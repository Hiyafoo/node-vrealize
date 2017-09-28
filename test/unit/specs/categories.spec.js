/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var vRa = new NodeVRealize()

var categoryLevel1 = {
  statusCode: 200,
  body: {
    relations: {
      link: [
        {
          'href': 'https://localhost:443/vco/api/categories/ff8080815d065f21015d06d2417800db/permissions/',
          'rel': 'permissions'
        },
        {
          'attributes': [
            {
              'value': '123080815d065f21015d1349a5580db3',
              'name': 'id'
            },
            {
              'value': 'network',
              'name': 'name'
            }
          ],
          'href': 'https://test.io/vco/api/categories/123080815d065f21015d1349a5580db3/',
          'rel': 'down'
        },
        {
          'href': 'https://localhost:443/vco/api/categories/ff8080815d065f21015d06d2417800db/permissions/',
          'rel': 'permissions'
        }
      ]
    }
  }
}

var categoryLevel2 = {
  statusCode: 200,
  body: {
    relations: {
      link: [
        {
          'href': 'https://localhost:443/vco/api/categories/ff8080815d065f21015d06d2417800db/permissions/',
          'rel': 'permissions'
        },
        {
          'attributes': [
            {
              'value': '456789',
              'name': 'id'
            },
            {
              'value': 'nsx',
              'name': 'name'
            }
          ],
          'href': 'https://test.io/vco/api/categories/456789/',
          'rel': 'down'
        },
        {
          'href': 'https://localhost:443/vco/api/categories/ff8080815d065f21015d06d2417800db/permissions/',
          'rel': 'permissions'
        }

      ]
    }
  }
}

describe('Categories', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise
  // eslint-disable-next-line
  let requestDeleteStubPromise

  var childCategoryObj = {
    parentId: 'id',
    name: 'name',
    description: 'desc',
    type: 'type'
  }

  var rootCategoryObj = {
    name: 'name',
    description: 'desc',
    type: 'type'
  }
  var categoryId = 'id'
  var password = 'password'

  var bodyResponseRootCategories = {
    statusCode: 200,
    body: require('./files/categories').rootCategories
  }
  // var bodyResponseAllCategories = require('./files/categories').allCategories

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
    requestDeleteStubPromise = sandbox.stub(request, 'deleteAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('exportCategory method', function () {
    it('should return a 200 response when creating a root category', function () {
      var res = {statusCode: 200}
      requestPostStubPromise.resolves(res, null)

      return vRa.exportCategory(rootCategoryObj, password)
        .then(function (response) {
          expect(res).to.equal(response)
          var spyPostAsync = requestPostStubPromise.getCall(0)
          expect(spyPostAsync.args[0].url).to.equal('https:///vco/api/categories/')
        })
    })

    it('should return a 200 response when creating a child category', function () {
      var res = {statusCode: 200}
      requestPostStubPromise.resolves(res, null)

      return vRa.exportCategory(childCategoryObj, password)
        .then(function (response) {
          expect(res).to.equal(response)
          var spyPostAsync = requestPostStubPromise.getCall(0)
          expect(spyPostAsync.args[0].url).to.equal('https:///vco/api/categories/id')
        })
    })

    it('should return the response when the statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestPostStubPromise.resolves(res)

      return vRa.exportCategory(rootCategoryObj, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return an error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPostStubPromise.rejects(new Error(errorMessage))

      return vRa.exportCategory(rootCategoryObj, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('importCategory method', function () {
    it('promise should return the response when statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return vRa.importCategory(categoryId, password)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('promise should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return vRa.importCategory(categoryId, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return vRa.importCategory(categoryId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getCategory method', function () {
    it('promise should return the response when statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return vRa.getCategory(categoryId, password)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('promise should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return vRa.getCategory(categoryId, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return vRa.getCategory(categoryId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getCategories method', function () {
    it('promise should return the response when statusCode is 200 (root categories only)', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return vRa.getCategories('type', true, password)
        .then(function (response) {
          var spyGetAsync = requestGetStubPromise.getCall(0)
          expect(spyGetAsync.args[0].qs).to.deep.equal({
            categoryType: 'type',
            isRoot: true
          })
          expect(res).to.equal(response)
        })
    })
    it('promise should return the response when statusCode is 200 (all categories)', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return vRa.getCategories('type', false, password)
        .then(function (response) {
          var spyGetAsync = requestGetStubPromise.getCall(0)
          expect(spyGetAsync.args[0].qs).to.deep.equal({
            categoryType: 'type',
            isRoot: false
          })
          expect(res).to.equal(response)
        })
    })

    it('promise should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return vRa.getCategories(categoryId, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return vRa.getCategories(categoryId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getCategoryIdFromAbsolutePath method', function () {
    it('should return the id of the level 1 category', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategories')
      var requestGetCategoryStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategory')
      requestGetCategoryStubPromise.resolves(categoryLevel1)
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      return vRa.getCategoryIdFromAbsolutePath('/io.test/network/', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.calledOnce).to.equal(true)
          expect(rootCategoryId).to.equal('123080815d065f21015d1349a5580db3')
        })
    })

    it('should return the id of the level 2 category', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategories')
      var requestGetCategoryStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategory')
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      requestGetCategoryStubPromise.onCall(0).resolves(categoryLevel1)
      requestGetCategoryStubPromise.onCall(1).resolves(categoryLevel2)
      return vRa.getCategoryIdFromAbsolutePath('/io.test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(2)
          expect(rootCategoryId).to.equal('456789')
        })
    })

    it('should return -1 when the level 2 category does not exist', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategories')
      var requestGetCategoryStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategory')
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      requestGetCategoryStubPromise.onCall(0).resolves(categoryLevel1)
      requestGetCategoryStubPromise.onCall(1).resolves({
        statusCode: 200,
        body: {
          relations: {
            link: []
          }
        }
      })
      return vRa.getCategoryIdFromAbsolutePath('/io.test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(2)
          expect(rootCategoryId).to.equal(-1)
        })
    })

    it('should return -1 when the root category does not exist', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategories')
      var requestGetCategoryStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategory')
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      return vRa.getCategoryIdFromAbsolutePath('/does.not.exist/test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(0)
          expect(rootCategoryId).to.equal(-1)
        })
    })

    it('should reject with an error if the getCategory rejects with an error', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategories')
      var requestGetCategoryStubPromise = sandbox.stub(NodeVRealize.prototype, 'getCategory')
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      requestGetCategoryStubPromise.rejects({message: 'error'})
      return vRa.getCategoryIdFromAbsolutePath('/io.test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(2)
          expect(rootCategoryId).to.equal(-1)
        })
        .catch(function (err) {
          expect(err).to.deep.equal({message: 'error'})
        })
    })
  })

  describe('deleteRootCategory method', function () {
    it('should return a 200 statusCode on successful deletion', function () {
      var categoryId = 'id'
      var getCategoryIdFromAbsolutePath = sandbox.stub(NodeVRealize.prototype, 'getCategoryIdFromAbsolutePath')

      var res = {statusCode: 200}
      requestDeleteStubPromise.resolves(res, null)

      getCategoryIdFromAbsolutePath.resolves(categoryId)
      return vRa.deleteRootCategory('/io.test/network/', 'ConfigurationElementCategory', 'password')
        .then(function (response) {
          expect(response.statusCode).to.equal(200)
        })
    })

    it('should reject with an error when category id cannot be found', function () {
      var categoryId = 'id'
      var getCategoryIdFromAbsolutePath = sandbox.stub(NodeVRealize.prototype, 'getCategoryIdFromAbsolutePath')

      var error = 'error'
      requestDeleteStubPromise.rejects(error)

      getCategoryIdFromAbsolutePath.resolves(categoryId)
      return vRa.deleteRootCategory('/io.test/network/', 'ConfigurationElementCategory', 'password')
        .catch(function (err) {
          expect(err.name).to.equal(error)
        })
    })
  })
})
