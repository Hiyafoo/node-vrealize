import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

/* istanbul ignore next */
module.exports = {
  getEntitlementByName: getEntitlementByName,
  updateEntitlement: updateEntitlement
}

function getEntitlementByName (entitlementName) {
  var _this = this
  var limit = 10000
  return new Promise(function (resolve, reject) {
    var options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/entitlements?limit=${limit}`,
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

        // could not find any requests with given name
        if (!response.body || !response.body.content) {
          return resolve([])
        }

        var entitlements = response.body.content

        for (var i = 0; i < entitlements.length; i++) {
          var entitlement = entitlements[i]
          console.log(entitlement)
          if (entitlement.name === entitlementName) {
            return resolve(entitlement)
          }
        }

        reject(new Error('Could not find the entitlement with the name' + entitlementName))
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function updateEntitlement (id, json) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'PUT',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/catalog-service/api/entitlements/${id}`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: json,
      json: true
    }

    requestPromise.putAsync(options)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
