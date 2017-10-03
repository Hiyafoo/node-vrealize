import Promise from 'bluebird'
import _findIndex from 'lodash.findindex'
import Requests from './requests'
var requestPromise = Promise.promisifyAll(require('request'))

/* istanbul ignore next */
module.exports = {
  getAllResources: getAllResources,
  getResourceByName: getResourceByName,
  getResourceById: getResourceById,
  getResourceActions: getResourceActions,
  getResourceActionTemplate: getResourceActionTemplate,
  submitResource: submitResource
}

var resourceIdKey = 'resourceId'

function getAllResources () {
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

function getResourceByName (name) {
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

function getResourceById (id) {
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
  var resourceId

  return new Promise(function (resolve, reject) {
    _this.getResourceByName(resourceName)
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

        resourceId = resource.id
        return requestPromise.getAsync(options)
      })
      .then(function (response) {
        if (response.statusCode !== 200) {
          reject(response.body)
        } else {
          response.body.content[resourceIdKey] = resourceId
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

function submitResource (actionOptions) {
  var _this = this
  var resourceActionId
  var resourceId

  return new Promise(function (resolve, reject) {
    _this.getResourceActions(actionOptions.resourceName)
      .then(function (response) {
        resourceId = response[resourceIdKey]
        resourceActionId = getObjectFromKey(response, actionOptions.actionName).id

        return _this.getResourceActionTemplate(resourceId, resourceActionId)
      })
      .then(function (templateData) {
        var postUrl = `https://${_this.config.hostname}/catalog-service/api/consumer/resources/${resourceId}/actions/${resourceActionId}/requests/`

        return Requests.sendRequest.call(this, postUrl, templateData)
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
    return o.name === key
  })
  if (indexOfKey === -1) {
    throw new Error('Could not find key: ' + key + ' in array: ' + JSON.stringify(array, null, 2))
  }
  return array[indexOfKey]
}
