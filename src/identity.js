import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  getToken: getToken,
  isTokenAuthorized: isTokenAuthorized
}

function isTokenAuthorized (token) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'HEAD',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/identity/api/tokens/${token}`,
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json'
      }
    }

    requestPromise.headAsync(options)
    .then(function (response) {
      if (response && response.statusCode === 204) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
    .catch(function (error) {
      reject(error)
    })
  })
}

function getToken () {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options = {
      method: 'POST',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/identity/api/tokens`,
      rejectUnauthorized: false,
      requestCert: true,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body: {
        username: _this.config.username,
        password: _this.config.password,
        tenant: _this.config.tenant
      },
      json: true
    }

    requestPromise.postAsync(options)
    .then(function (response) {
    // clear here to prevent password from being populated further than this request
      _this.config.password = ''

      if (response.statusCode === 200) {
        _this.config.token = response.body
        process.env.VRA_TOKEN = _this.config.token
        resolve(response.body.id)
      } else {
        reject(response.body.errors[0].systemMessage)
      }
    })
    .catch(function (error) {
      reject(error)
    })
  })
}
