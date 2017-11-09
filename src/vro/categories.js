import Promise from 'bluebird'
import path from 'path'
import _find from 'lodash.find'
import _trim from 'lodash.trim'
var requestPromise = Promise.promisifyAll(require('request'))

var _ = {
  find: _find,
  trim: _trim
}

module.exports = {
  importOne: importOne,
  exportOne: exportOne,
  getCategoryIdFromAbsolutePath: getCategoryIdFromAbsolutePath,
  getFromCategoryType: getFromCategoryType,
  getOne: getOne,
  getLeafCategoryId: getLeafCategoryId,
  deleteOne: deleteOne
}

function exportOne (categoryObj, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    var parentId = categoryObj.parentId || ''
    options = {
      method: 'POST',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/categories/${parentId}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
        'accept': 'application/json'
      },
      body: {
        name: categoryObj.name,
        description: categoryObj.description,
        type: categoryObj.type
      },
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

function importOne (categoryId, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/categories/${categoryId}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
        'accept': 'application/json'
      },
      encoding: 'utf-8'
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

function getFromCategoryType (categoryType, isRoot, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/categories/`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
        'accept': 'application/json'
      },
      qs: {
        categoryType: categoryType,
        isRoot: isRoot || false
      },
      encoding: 'utf-8',
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

function getOne (categoryId, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/vco/api/categories/${categoryId}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
        'accept': 'application/json'
      },
      encoding: 'utf-8',
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function deleteOne (categoryAbsolutePath, categoryType, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    _this.vro.categories.getCategoryIdFromAbsolutePath(categoryAbsolutePath, categoryType, password)
      .then(function (categoryId) {
        var options

        options = {
          method: 'DELETE',
          agent: _this.config.agent,
          url: `https://${_this.config.hostname}/vco/api/categories/${categoryId}`,
          headers: {
            'cache-control': 'no-cache',
            'authorization': 'Basic ' + new Buffer(_this.config.username + ':' + password).toString('base64'),
            'accept': 'application/json'
          },
          encoding: 'utf-8',
          json: true,
          qs: {
            deleteNonEmptyContent: true
          }
        }

        return requestPromise.deleteAsync(options)
      }).then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getCategoryIdFromAbsolutePath (categoryAbsolutePath, categoryType, password) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var category = path.parse(categoryAbsolutePath)
    var categoryPath = category.dir + '/' + category.base
    var categoryDecomposedPath = _.trim(categoryPath, '/').split('/')

    // TODO: put in cache for 5 minutes
    _this.vro.categories.getFromCategoryType(categoryType, true, password)
      .then(function (response) {
        var rootCategories = response.body
        // TODO: put in cache for 5 minutes
        var rootCategoryName = categoryDecomposedPath.shift()
        return findCategoryId(rootCategoryName, rootCategories)
      })
      .then(function (rootCategoryId) {
        if (rootCategoryId === -1) {
          resolve(rootCategoryId)
        } else {
          return _this.vro.categories.getLeafCategoryId(rootCategoryId, categoryDecomposedPath, password)
        }
      })
      .then(function (leafCategoryId) {
        resolve(leafCategoryId)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

function findCategoryId (categoryName, categories) {
  var categoryId = -1
  var category = _.find(categories.link, function (link) {
    if (link.attributes) {
      for (var i = 0; i < link.attributes.length; i++) {
        var attribute = link.attributes[i]
        var isName = attribute.name === 'name' && attribute.value === categoryName
        if (isName) { return true }
      }
    }
    return false
  })
  if (category) {
    categoryId = _.find(category.attributes, function (attribute) {
      return attribute.name === 'id'
    }).value || -1
  }

  return categoryId
}

function getLeafCategoryId (currentCategoryId, categoryPath, password) {
  var _this = this
  return new Promise(function (resolve, reject) {
    if (categoryPath.length <= 0) {
      resolve(currentCategoryId)
    } else {
      _this.vro.categories.getOne(currentCategoryId, password)
        .then(function (response) {
          var category = response.body
          var categoryName = categoryPath.shift()
          var categoryId = findCategoryId(categoryName, category.relations)
          if (categoryId !== -1) {
            resolve(_this.vro.categories.getLeafCategoryId(categoryId, categoryPath, password))
          } else {
            resolve(-1)
          }
        })
        .catch(function (err) {
          reject(err)
        })
    }
  })
}
