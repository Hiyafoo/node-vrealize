import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  createPackage: createPackage,
  getPackageIdByName: getPackageIdByName,
  getPackage: getPackage
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

function getPackageIdByName (packageName) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/content-management-service/api/packages/`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`,
        'accept': 'application/json'
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

function getPackage (id) {
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
