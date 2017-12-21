import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  getAllSubscriptions: getAllSubscriptions,
  getSubscriptionById: getSubscriptionById,
  createSubscription: createSubscription,
  deleteSubscription: deleteSubscription
}

function getAllSubscriptions () {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    var tenantId = _this.config.tenant

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/advanced-designer-service/api/tenants/${tenantId}/event-broker/subscriptions?limit=1000`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
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

function getSubscriptionById (id) {
  var _this = this
  var tenantId = _this.config.tenant
  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/advanced-designer-service/api/tenants/${tenantId}/event-broker/subscriptions/${id}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
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

function createSubscription (subscriptionJson) {
  var _this = this
  var tenantId = _this.config.tenant

  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'POST',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/advanced-designer-service/api/tenants/${tenantId}/event-broker/subscriptions/`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: subscriptionJson,
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

function deleteSubscription (id) {
  var _this = this
  var tenantId = _this.config.tenant

  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'DELETE',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/advanced-designer-service/api/tenants/${tenantId}/event-broker/subscriptions/${id}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      json: true
    }

    requestPromise.deleteAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
