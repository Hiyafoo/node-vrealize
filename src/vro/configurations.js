import fs from 'fs'
import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  importOne: importOne,
  exportOne: exportOne
}

function exportOne (categoryId, configurationPath, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    try {
      options = {
        method: 'POST',
        agent: _this.config.agent,
        url: `https://${_this.config.hostname}/vco/api/configurations/`,
        headers: {
          'cache-control': 'no-cache',
          'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64')
        },
        qs: {
          categoryId: categoryId
        },
        formData: {file: fs.createReadStream(configurationPath)},
        json: true
      }
    } catch (error) {
      return reject(error)
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

function importOne (configurationId, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/configurations/${configurationId}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
        'accept': 'application/xml'
      },
      encoding: 'utf-8'
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
