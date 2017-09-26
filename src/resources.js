import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))
// import _ from 'lodash'

/* istanbul ignore next */
module.exports = {
  getAll: getAll,
  getByName: getByName,
  getById: getById,
  getActions: getActions
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
      }, this)
      resolve(resources)
    })
    .catch(function (error) {
      reject(error)
    })
  })
}

function getByName (name) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources?limit=1000&$filter=(name eq '${name}')`,
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

function getById (id) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources?limit=1000&$filter=request/id eq '${id}'`,
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
        reject(response.body)
      } else {
        resolve(response.body.content[0])
      }
    })
    .catch(function (error) {
      reject(error)
    })
  })
}

function getActions (resourceName) {
  var _this = this
  return new Promise(function (resolve, reject) {
    _this.getByName(resourceName)
      .then(function (resource) {
        var options = {
          method: 'GET',
          agent: _this.config.agent,
          url: `https://${_this.config.hostname}/catalog-service/api/consumer/resources/${resource.id}/actions`,
          headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'authorization': `Bearer ${_this.config.token}`
          },
          body: {},
          json: true
        }

        return requestPromise.getAsync(options)
      })
    .then(function (response) {
      if (response.statusCode !== 200) {
        reject(response.body)
      } else {
        resolve(response.body.content)
      }
    })
    .catch(function (error) {
      reject(error)
    })
  })
}
