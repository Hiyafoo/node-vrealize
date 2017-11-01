import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  getContent: getContent
}

function getContent (contentTypeId, tenantId) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    try {
      options = {
        method: 'GET',
        agent: _this.config.agent,
        url: `https://${_this.config.hostname}/content-management-service/api/contents/`,
        headers: {
          'cache-control': 'no-cache',
          'authorization': `Bearer ${_this.config.token}`
        },
        qs: {
          limit: '1000',
          filter: `tenantId eq ${tenantId}`
        },
        json: true
      }
    } catch (error) {
      return reject(error)
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
