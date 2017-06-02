import request from 'request'
import config from './config'
import chalk from 'chalk'

module.exports = {
  getToken: getToken,
  showConfig: function () {
    console.log(chalk.blue(config.username))
  }
}

function getToken (cb) {
  var options = {
    method: 'POST',
    agent: config.agent,
    url: `https://${config.hostname}/identity/api/tokens`,
    rejectUnauthorized: false,
    requestCert: true,
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    },
    body: {
      username: config.username,
      password: config.password,
      tenant: config.tenant
    },
    json: true
  }

  request(options, function (error, response, body) {
    // clear here to prevent password from being populated further than this request
    config.password = ''
    if (error) {
      cb(error)
    }

    if (response.statusCode === 200) {
      config.token = body
      process.env.VRA_TOKEN = config.token
      cb(null, body.id)
    } else {
      cb(body.errors[0].systemMessage)
    }
  })
}
