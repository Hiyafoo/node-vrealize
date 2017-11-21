import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

var inProgressState = 'IN_PROGRESS'
var pendingPreApprovalState = 'PENDING_PRE_APPROVAL'
var submittedState = 'SUBMITTED'
var preApproved = 'PRE_APPROVED'

/* istanbul ignore next */
module.exports = {
  submitRequest: submitRequest,
  getRequestsByCatalogItemName: getRequestsByCatalogItemName,
  getRequest: getRequest,
  updateTemplateData: updateTemplateData,
  sendRequestViaUrl: sendRequestViaUrl
}

function getRequestsByCatalogItemName (catalogItemName, filterMethod, limit) {
  var _this = this
  limit = limit || 10000
  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/requests?limit=${limit}&$filter=(catalogItem/name eq '${catalogItemName}')`,
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

        // could not find any requests with given name
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

function submitRequest (deploymentOptions) {
  var _this = this
  var urlRequest

  return new Promise(function (resolve, reject) {
    _this.vra.catalog.getCatalogItemByName(deploymentOptions.blueprintName)
      .then(function (response) {
        var urlTemplate = response.links[0].href
        urlTemplate = urlTemplate.substring(0, urlTemplate.indexOf('{'))

        urlRequest = response.links[1].href
        urlRequest = urlRequest.substring(0, urlRequest.indexOf('{'))

        return _this.vra.catalog.getCatalogItemTemplate(urlTemplate)
      })
      .then(function (templateData) {
        return module.exports.updateTemplateData(templateData, deploymentOptions.templateData)
      })
      .then(function (mergedTemplateData) {
        return _this.vra.catalog.sendRequestViaUrl(urlRequest, mergedTemplateData)
      })
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function sendRequestViaUrl (url, data) {
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

function getRequest (params) {
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

        return resolve('ERROR: ' + body.state)
      })
      .catch(function (error) {
        reject(error)
      })
  })
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
