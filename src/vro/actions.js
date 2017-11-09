import fs from 'fs'
import Promise from 'bluebird'
var _filter = require('lodash.filter')
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  importOne: importOne,
  exportToModuleName: exportToModuleName,
  importFromModuleName: importFromModuleName
}

function exportToModuleName (moduleName, actionPath, password) {
  var _this = this
  return new Promise(function (resolve, reject) {
    var options
    try {
      options = {
        method: 'POST',
        agent: _this.config.agent,
        url: `https://${_this.config.hostname}/vco/api/actions/`,
        headers: {
          'cache-control': 'no-cache',
          'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64')
        },
        qs: {
          categoryName: moduleName,
          overwrite: true
        },
        formData: {file: fs.createReadStream(actionPath)},
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

function importOne (actionId, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/actions/${actionId}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
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

function importFromModuleName (moduleName, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/actions/`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
        'accept': 'application/json'
      },
      encoding: 'utf-8',
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        if (response.statusCode && response.statusCode >= 200 && response.statusCode < 300 && response.body && response.body.link && response.body.link.length > 0) {
          var filteredActions = _filter(response.body.link, function (link) {
            if (link.attributes) {
              for (var i = 0; i < link.attributes.length; i++) {
                var attribute = link.attributes[i]
                var isInModule = attribute.name === 'fqn' && attribute.value.startsWith(moduleName)
                if (isInModule) {
                  return true
                }
              }
            }
            return false
          })
          response.body.link = filteredActions
        }
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
