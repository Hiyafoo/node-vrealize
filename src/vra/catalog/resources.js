import Promise from 'bluebird'
import _findIndex from 'lodash.findindex'
var requestPromise = Promise.promisifyAll(require('request'))

/* istanbul ignore next */
module.exports = {
  getResources: getResources,
  getResourceByName: getResourceByName,
  getResourceById: getResourceById,
  getResourceActions: getResourceActions,
  getResourceActionTemplate: getResourceActionTemplate,
  getResourceActionRequests: getResourceActionRequests,
  submitResourceAction: submitResourceAction,
  getObjectFromKey: getObjectFromKey
}

var resourceIdKey = 'resourceId'

function getResources (limit) {
  var _this = this

  limit = limit || 1000

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources?limit=${limit}`,
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
        }
        if (response.body.content.length === 0) {
          throw new Error('Unable to find resource with name: ' + name)
        }

        return resolve(response.body.content[0])
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
        }
        if (response.body.content.length === 0) {
          throw new Error('Unable to find resource with id: ' + id)
        }

        return resolve(response.body.content[0])
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
    _this.vra.catalog.getResourceByName(resourceName)
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

function submitResourceAction (actionOptions) {
  var _this = this
  var resourceActionId
  var resourceId

  return new Promise(function (resolve, reject) {
    _this.vra.catalog.getResourceActions(actionOptions.resourceName)
      .then(function (response) {
        resourceId = response[resourceIdKey]
        resourceActionId = getObjectFromKey(response, actionOptions.actionName).id

        return _this.vra.catalog.getResourceActionTemplate(resourceId, resourceActionId)
      })
      .then(function (templateData) {
        var postUrl = `https://${_this.config.hostname}/catalog-service/api/consumer/resources/${resourceId}/actions/${resourceActionId}/requests/`

        return _this.vra.catalog.sendRequestViaUrl(postUrl, templateData)
      })
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getResourceActionRequests (actionOptions) {
  var _this = this
  var resourceId
  var resourceActionId

  return new Promise(function (resolve, reject) {
    _this.vra.catalog.getResourceActions(actionOptions.resourceName)
      .then(function (response) {
        resourceId = response[resourceIdKey]
        resourceActionId = getObjectFromKey(response, actionOptions.actionName).id

        var options = {
          method: 'GET',
          agent: _this.config.agent,
          url: `https://${_this.config.hostname}/catalog-service/api/consumer/requests?limit=1000&$filter=(resourceAction/id eq '${resourceActionId}' and resource/id eq '${resourceId}')`,
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

function getObjectFromKey (array, key) {
  var indexOfKey = _findIndex(array, function (o) {
    return o.name === key
  })
  if (indexOfKey === -1) {
    throw new Error('Could not find key with the value \'' + key + '\' in the array: ' + JSON.stringify(array, null, 2))
  }
  return array[indexOfKey]
}
