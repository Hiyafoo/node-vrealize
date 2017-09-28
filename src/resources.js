import Promise from 'bluebird'
import _findIndex from 'lodash.findindex'
import Requests from './requests'
var requestPromise = Promise.promisifyAll(require('request'))

/* istanbul ignore next */
module.exports = {
  getAll: getAll,
  getByName: getByName,
  getById: getById,
  getResourceActions: getResourceActions,
  getResourceActionTemplate: getResourceActionTemplate,
  submit: submit
}

function getAll () {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources?limit=1000`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: {},
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        if (response.statusCode !== 200) {
          return reject(response.body)
        }

        let resources = []
        response.body.content.forEach(function (resource) {
          var res = {}
          res.name = resource.name
          res.status = resource.status
          res.id = resource.id
          res.typeRef = resource.resourceTypeRef.label
          // res.catalogResourceLabel = resource.catalogResource.label
          // res.catalogResourceId = resource.catalogResource.id
          resources.push(res)
        }, this)
        resolve(resources)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getByName (name) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources?limit=1000&$filter=(name eq '${name}')`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: {},
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        if (response.statusCode !== 200) {
          return reject(response.body)
        } else {
          resolve(response.body.content[0])
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getById (id) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources?limit=1000&$filter=request/id eq '${id}'`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: {},
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        if (response.statusCode !== 200) {
          reject(response.body)
        } else {
          resolve(response.body.content[0])
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getResourceActions (resourceName) {
  var _this = this
  return new Promise(function (resolve, reject) {
    _this.getByName(resourceName)
      .then(function (resource) {
        var options = {
          method: 'GET',
          agent: _this.config.agent,
          url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources/${resource.id}/actions`,
          headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'authorization': `Bearer ${_this.config.token}`
          },
          body: {},
          json: true
        }

        return requestPromise.getAsync(options)
      })
      .then(function (response) {
        if (response.statusCode !== 200) {
          reject(response.body)
        } else {
          resolve(response.body.content)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getResourceActionTemplate (resourceId, resourceActionId) {
  var _this = this
  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources/${resourceId}/actions/${resourceActionId}/requests/template`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: {},
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        if (response.statusCode !== 200) {
          reject(response.body)
        } else {
          resolve(response.body)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function submit (actionOptions) {
  var _this = this
  var resourceActionId

  return new Promise(function (resolve, reject) {
    _this.getResourceActions(actionOptions.resourceName)
      .then(function (response) {
        resourceActionId = getObjectFromKey(response, actionOptions.actionName).id

        return _this.getResourceActionTemplate(actionOptions.resourceId, resourceActionId)
      })
      .then(function (templateData) {
        var postUrl = `https://${_this.config.hostname}/catalog-service/api/consumer/resources/${actionOptions.resourceId}/actions/${resourceActionId}/requests/`

        return Requests.sendRequest(postUrl, templateData)
      })
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getObjectFromKey (array, key) {
  var indexOfKey = _findIndex(array, function (o) {
    return o.key === key
  })
  if (indexOfKey === -1) {
    throw new Error('Could not find key: ' + key + ' in array: ' + JSON.stringify(array, null, 2))
  }
  return array[indexOfKey]
}
