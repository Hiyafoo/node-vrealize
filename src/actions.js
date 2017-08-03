import fs from 'fs'
import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  getAll: getAll,
  importAction: importAction
}

function importAction (categoryName, actionPath, password) {
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
        qs: {categoryName: categoryName},
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

function getAll () {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources?limit=1000`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token.id}`
      },
      body: {},
      json: true
    }

    requestPromise.getAsync(options)
    .then(function (response) {
      if (response.statusCode === 200) {
        let resources = []
        response.body.content.forEach(function (resource) {
          var res = {}
          res.name = resource.name
          res.status = resource.status
          res.id = resource.id
          res.typeRef = resource.resourceTypeRef.label
        // res.catalogResourceLabel = resource.catalogResource.label
        // res.catalogResourceId = resource.catalogResource.id
          resources.push(res)
        }, _this)
        resolve(resources)
      } else {
        resolve(response.body)
      }
    })
    .catch(function (error) {
      reject(error)
    })
  })
}
