import Promise from 'bluebird'
import fs from 'fs'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  getFromTenant: getFromTenant,
  exportPackage: exportPackage,
  createPackage: createPackage,
  getPackageById: getPackageById,
  deletePackage: deletePackage
}

function getFromTenant (tenantId, limit) {
  var _this = this
  limit = limit || 1000
  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/content-management-service/api/contents/?limit=${limit}&$filter=(tenantId eq '${tenantId}')`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function exportPackage (contentZipPath, resolutionMode) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'POST',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/content-management-service/api/packages/?resolutionMode=${resolutionMode}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      formData: {file: fs.createReadStream(contentZipPath)},
      json: true
    }

    requestPromise.postAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function createPackage (packageName, tenantId, contents) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'POST',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/content-management-service/api/packages`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`,
        'accept': 'application/json'
      },
      body: {
        name: packageName,
        contents: contents,
        tenantId: tenantId
      },
      json: true
    }

    requestPromise.postAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getPackageById (id) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/content-management-service/api/packages/${id}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`,
        'accept': 'application/zip'
      },
      encoding: null
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function deletePackage (id) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'DELETE',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/content-management-service/api/packages/${id}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`,
        'accept': 'application/json'
      },
      json: true
    }

    requestPromise.deleteAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
