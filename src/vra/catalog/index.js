import Promise from 'bluebird'
import requests from './requests'
import resources from './resources'
var requestPromise = Promise.promisifyAll(require('request'))

/* istanbul ignore next */
module.exports = {
  getAllCatalogItems: getAllCatalogItems,
  getCatalogItemByName: getCatalogItemByName,
  getCatalogItemTemplate: getCatalogItemTemplate,
  submitRequest: requests.submitRequest,
  getRequestsByCatalogItemName: requests.getRequestsByCatalogItemName,
  getRequest: requests.getRequest,
  getRequests: requests.getRequests,
  sendRequestViaUrl: requests.sendRequestViaUrl,
  getResources: resources.getResources,
  getResourceByName: resources.getResourceByName,
  getResourceById: resources.getResourceById,
  getResourceActions: resources.getResourceActions,
  getResourceActionTemplate: resources.getResourceActionTemplate,
  getResourceActionRequests: resources.getResourceActionRequests,
  submitResourceAction: resources.submitResourceAction
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

function getCatalogItemByName (name) {
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

function getCatalogItemTemplate (url) {
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
