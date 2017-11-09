/* global it beforeEach afterEach describe */
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var nodeVRealize = new NodeVRealize()

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

describe('[vRO - Categories]', function () {
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

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
    requestDeleteStubPromise = sandbox.stub(request, 'deleteAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('exportOne method', function () {
    it('should return a 200 response when creating a root category', function () {
      var res = {statusCode: 200}
      requestPostStubPromise.resolves(res, null)

      return nodeVRealize.vro.categories.exportOne(rootCategoryObj, password)
        .then(function (response) {
          expect(res).to.equal(response)
          var spyPostAsync = requestPostStubPromise.getCall(0)
          expect(spyPostAsync.args[0].url).to.equal('https:///vco/api/categories/')
        })
    })

    it('should return a 200 response when creating a child category', function () {
      var res = {statusCode: 200}
      requestPostStubPromise.resolves(res, null)

      return nodeVRealize.vro.categories.exportOne(childCategoryObj, password)
        .then(function (response) {
          expect(res).to.equal(response)
          var spyPostAsync = requestPostStubPromise.getCall(0)
          expect(spyPostAsync.args[0].url).to.equal('https:///vco/api/categories/id')
        })
    })

    it('should return the response when the statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestPostStubPromise.resolves(res)

      return nodeVRealize.vro.categories.exportOne(rootCategoryObj, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return an error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPostStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.categories.exportOne(rootCategoryObj, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('importOne method', function () {
    it('should return the response when statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.categories.importOne(categoryId, password)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return nodeVRealize.vro.categories.importOne(categoryId, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.categories.importOne(categoryId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getOne method', function () {
    it('should return the response when statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.categories.getOne(categoryId, password)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return nodeVRealize.vro.categories.getOne(categoryId, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.categories.getOne(categoryId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getFromCategoryType method', function () {
    it('should return the response when statusCode is 200 (root categories only)', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.categories.getFromCategoryType('type', true, password)
        .then(function (response) {
          var spyGetAsync = requestGetStubPromise.getCall(0)
          expect(spyGetAsync.args[0].qs).to.deep.equal({
            categoryType: 'type',
            isRoot: true
          })
          expect(res).to.equal(response)
        })
    })
    it('should return the response when statusCode is 200 (all categories)', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.categories.getFromCategoryType('type', false, password)
        .then(function (response) {
          var spyGetAsync = requestGetStubPromise.getCall(0)
          expect(spyGetAsync.args[0].qs).to.deep.equal({
            categoryType: 'type',
            isRoot: false
          })
          expect(res).to.equal(response)
        })
    })

    it('should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return nodeVRealize.vro.categories.getFromCategoryType(categoryId, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.categories.getFromCategoryType(categoryId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getCategoryIdFromAbsolutePath method', function () {
    it('should return the id of the level 1 category', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getFromCategoryType')
      var requestGetCategoryStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getOne')
      requestGetCategoryStubPromise.resolves(categoryLevel1)
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      return nodeVRealize.vro.categories.getCategoryIdFromAbsolutePath('/io.test/network/', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.calledOnce).to.equal(true)
          expect(rootCategoryId).to.equal('123080815d065f21015d1349a5580db3')
        })
    })

    it('should return the id of the level 2 category', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getFromCategoryType')
      var requestGetCategoryStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getOne')
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      requestGetCategoryStubPromise.onCall(0).resolves(categoryLevel1)
      requestGetCategoryStubPromise.onCall(1).resolves(categoryLevel2)
      return nodeVRealize.vro.categories.getCategoryIdFromAbsolutePath('/io.test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(2)
          expect(rootCategoryId).to.equal('456789')
        })
    })

    it('should return -1 when the level 2 category does not exist', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getFromCategoryType')
      var requestGetCategoryStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getOne')
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
      return nodeVRealize.vro.categories.getCategoryIdFromAbsolutePath('/io.test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(2)
          expect(rootCategoryId).to.equal(-1)
        })
    })

    it('should return -1 when the root category does not exist', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getFromCategoryType')
      var requestGetCategoryStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getOne')
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      return nodeVRealize.vro.categories.getCategoryIdFromAbsolutePath('/does.not.exist/test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(0)
          expect(rootCategoryId).to.equal(-1)
        })
    })

    it('should reject with an error if the getOne rejects with an error', function () {
      var requestGetCategoriesStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getFromCategoryType')
      var requestGetCategoryStubPromise = sandbox.stub(nodeVRealize.vro.categories, 'getOne')
      requestGetCategoriesStubPromise.resolves(bodyResponseRootCategories)
      requestGetCategoryStubPromise.rejects({message: 'error'})
      return nodeVRealize.vro.categories.getCategoryIdFromAbsolutePath('/io.test/network/nsx', 'ConfigurationElementCategory', 'password')
        .then(function (rootCategoryId) {
          expect(requestGetCategoryStubPromise.callCount).to.equal(2)
          expect(rootCategoryId).to.equal(-1)
        })
        .catch(function (err) {
          expect(err).to.deep.equal({message: 'error'})
        })
    })
  })

  describe('deleteOne method', function () {
    it('should return a 200 statusCode on successful deletion', function () {
      var categoryId = 'id'
      var getOneIdFromAbsolutePath = sandbox.stub(nodeVRealize.vro.categories, 'getCategoryIdFromAbsolutePath')

      var res = {statusCode: 200}
      requestDeleteStubPromise.resolves(res, null)

      getOneIdFromAbsolutePath.resolves(categoryId)
      return nodeVRealize.vro.categories.deleteOne('/io.test/network/', 'ConfigurationElementCategory', 'password')
        .then(function (response) {
          expect(response.statusCode).to.equal(200)
        })
    })

    it('should reject with an error when category id cannot be found', function () {
      var categoryId = 'id'
      var getOneIdFromAbsolutePath = sandbox.stub(nodeVRealize.vro.categories, 'getCategoryIdFromAbsolutePath')

      var error = 'error'
      requestDeleteStubPromise.rejects(error)

      getOneIdFromAbsolutePath.resolves(categoryId)
      return nodeVRealize.vro.categories.deleteOne('/io.test/network/', 'ConfigurationElementCategory', 'password')
        .catch(function (err) {
          expect(err.name).to.equal(error)
        })
    })
  })
})
