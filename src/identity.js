import request from 'request'
import chalk from 'chalk'

module.exports = {
  getToken: getToken,
  isTokenAuthorized: isTokenAuthorized,
  showConfig: function () {
    console.log(chalk.blue(this.config.username))
  }
}

function isTokenAuthorized (token, cb) {
  var options = {
    method: 'HEAD',
    agent: this.config.agent,
    url: `https://${this.config.hostname}/identity/api/tokens/${token}`,
    headers: {
      'authorization': 'Bearer ' + token,
      'content-type': 'application/json'
    }
  }

  request.head(options, function (error, response, body) {
    if (error) {
      return cb(error)
    }

    if (response && response.statusCode === 204) {
      return cb(null, true)
    } else {
      return cb(null, false)
    }
  })
}

function getToken (cb) {
  var options = {
    method: 'POST',
    agent: this.config.agent,
    url: `https://${this.config.hostname}/identity/api/tokens`,
    rejectUnauthorized: false,
    requestCert: true,
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    },
    body: {
      username: this.config.username,
      password: this.config.password,
      tenant: this.config.tenant
    },
    json: true
  }

  request(options, function (error, response, body) {
    // clear here to prevent password from being populated further than this request
    this.config.password = ''
    if (error) {
      cb(error)
    }

    if (response.statusCode === 200) {
      this.config.token = body
      process.env.VRA_TOKEN = this.config.token
      cb(null, body.id)
    } else {
      cb(body.errors[0].systemMessage)
    }
  })
}
