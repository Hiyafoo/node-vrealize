import Promise from 'bluebird'
import fs from 'fs'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  getContent: getContent,
  exportContent: exportContent
}

function getContent (tenantId) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    try {
      options = {
        method: 'GET',
        agent: _this.config.agent,
        url: `https://${_this.config.hostname}/content-management-service/api/contents/?limit=1000&$filter=(tenantId eq '${tenantId}')`,
        headers: {
          'cache-control': 'no-cache',
          'authorization': `Bearer ${_this.config.token}`
        },
        json: true
      }
    } catch (error) {
      return reject(error)
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

function exportContent (contentZipPath, resolutionMode) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'POST',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/content-management-service/api/packages/?resolutionMode=${resolutionMode}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`,
        'accept': 'application/json'
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
