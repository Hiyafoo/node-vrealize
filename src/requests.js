import _findIndex from 'lodash.findindex'
import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

var inProgressState = 'IN_PROGRESS'
var pendingPreApprovalState = 'PENDING_PRE_APPROVAL'
var submittedState = 'SUBMITTED'
var preApproved = 'PRE_APPROVED'

/* istanbul ignore next */
module.exports = {
  submit: submit,
  getAll: getAll,
  getByName: getByName,
  getRequestsByName: getRequestsByName,
  getObjectFromKey: getObjectFromKey,
  get: get,
  getAllCatalogItems: getAllCatalogItems,
  getTemplate: getTemplate,
  sendRequest: sendRequest,
  updateTemplateData: updateTemplateData
}

function getRequestsByName (catalogItemName, filterMethod) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/requests?limit=1000&$filter=(catalogItem/name eq '${catalogItemName}')`,
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

        // could not find any reuqests with given name
        if (!response.body || !response.body.content) {
          return resolve([])
        }

        resolve(filterMethod(response.body.content))
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getAllCatalogItems () {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/entitledCatalogItemViews?limit=1000`,
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

        let items = []
        response.body.content.forEach(function (item) {
          var res = {}
          res.name = item.name
          res.id = item.catalogItemId
          res.submitRequestUrl = item.links[1].href
          res.submitRequestUrlMethod = item.links[1].rel
          // res.catalogResourceLabel = item.catalogResource.label
          // res.catalogResourceId = item.catalogResource.id
          items.push(res)
        }, this)
        resolve(items)
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
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/entitledCatalogItemViews?limit=1000&$filter=(name eq '${name}')`,
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

function submit (deploymentOptions) {
  var _this = this
  var urlRequest

  return new Promise(function (resolve, reject) {
    _this.getByName(deploymentOptions.blueprintName)
      .then(function (response) {
        var urlTemplate = response.links[0].href
        urlTemplate = urlTemplate.substring(0, urlTemplate.indexOf('{'))

        urlRequest = response.links[1].href
        urlRequest = urlRequest.substring(0, urlRequest.indexOf('{'))

        return _this.getTemplate(urlTemplate)
      })
      .then(function (templateData) {
        return _this.updateTemplateData(templateData, deploymentOptions.templateData)
      })
      .then(function (mergedTemplateData) {
        return _this.sendRequest(urlRequest, mergedTemplateData)
      })
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getTemplate (url) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: url,
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
        return resolve(response.body)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function sendRequest (url, data) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'POST',
      agent: _this.config.agent,
      url: url,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: data,
      json: true
    }

    requestPromise.postAsync(options)
      .then(function (response) {
        if (response.statusCode !== 200 && response.statusCode !== 201) {
          return reject(response.body)
        }
        resolve(response.body)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function get (params) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/requests/${params.id}`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        if (response.statusCode !== 200) {
          return reject(response.body)
        }

        var body = response.body
        if (params.raw === true) {
          return resolve(body)
        }

        if (body.state === inProgressState || body.state === pendingPreApprovalState || body.state === submittedState || body.state === preApproved) {
          return resolve(inProgressState)
        }

        var requestCompletion = body.requestCompletion
        if (requestCompletion) {
          return resolve(requestCompletion.requestCompletionState)
        }

        return resolve('ERROR')
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getAll () {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/requests/`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        if (response.statusCode !== 200) {
          return reject(response.body)
        }
        resolve(response.body)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getObjectFromKey (jsonObject, key) {
  var indexCID = _findIndex(jsonObject.entries, function (o) {
    return o.key === key
  })
  // 'key', 'y.Hostname.CID')
  if (indexCID === -1) {
    return null
  }
  return jsonObject.entries[indexCID]
}

function updateTemplateData (templateData, dataToBeMerged) {
  return new Promise(function (resolve, reject) {
    var node
    if (dataToBeMerged) {
      dataToBeMerged.forEach(function (elem) {
        node = templateData
        if (elem.path.length > 0) {
          var properties = elem.path.split('.')

          // access each property. Ex: a.b.c.d
          properties.forEach(function (property) {
            node = node[property]
          })
        }
        node[elem.leaf] = elem.value
      })
    }
    resolve(templateData)
  })
}
