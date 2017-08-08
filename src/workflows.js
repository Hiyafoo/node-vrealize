import fs from 'fs'
import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  importWorkflow: importWorkflow,
  exportWorkflow: exportWorkflow
}

function importWorkflow (categoryId, workflowPath, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    try {
      options = {
        method: 'POST',
        agent: _this.config.agent,
        url: `https://${_this.config.hostname}/vco/api/workflows/`,
        headers: {
          'cache-control': 'no-cache',
          'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64')
        },
        qs: {
          categoryId: categoryId,
          overwrite: true
        },
        formData: {file: fs.createReadStream(workflowPath)},
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

function exportWorkflow (workflowId, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/workflows/${workflowId}`,
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
