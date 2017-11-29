import fs from 'fs'
import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  exportOne: exportOne
}

function exportOne (categoryId, resourcePath, password) {
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
          categoryId: categoryId
        },
        formData: {file: fs.createReadStream(resourcePath)},
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
