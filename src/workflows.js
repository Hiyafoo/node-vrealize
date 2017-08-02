import fs from 'fs'
import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  importWorkflow: importWorkflow
}

function importWorkflow (categoryName, workflowPath, password) {
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
        qs: {categoryName: categoryName},
        formData: {file: fs.createReadStream(workflowPath)},
        json: true
      }
    } catch (error) {
      return reject(error)
    }

    requestPromise.postAsync(options)
    .then(function (response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        return resolve(response)
      } else {
        return resolve(response.body)
      }
    })
    .catch(function (error) {
      reject(error)
    })
  })
}
