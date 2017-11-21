/* global it beforeEach afterEach describe */
import request from 'request'
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()
var NodeVRealize = require('../../../src/index')

var nodeVRealize = new NodeVRealize()

var catalogItemName = 'catalogItemName'
var customerIdName = 'customerIdName'
var cidKeyName = 'cidKeyName'

var body = {
  id: 1,
  state: 'SUCCESSFUL',
  requestCompletion: {
    'requestCompletionState': 'SUCCESSFUL',
    'completionDetails': '',
    'resourceBindingIds': null
  },
  content:
  [
    {
      name: '1',
      catalogItemId: 1,
      links:
      [
        {href: 'link0', rel: 'rel0'},
        {href: 'link1', rel: 'rel1'}
      ]
    }
  ]}

function filter (data) {
  var matchingCidrequests = []
  for (var i = 0; i < data.length; i++) {
    var requestItem = data[i]

    if (requestItem && requestItem.requestData && requestItem.requestData.entries) {
      for (var j = 0; j < requestItem.requestData.entries.length; j++) {
        var requestData = requestItem.requestData.entries[j]
        if (requestData.key === cidKeyName && requestData.value.value === customerIdName) {
          matchingCidrequests.push(requestItem)
        }
      }
    }
  }
  return matchingCidrequests
}

describe('[vRA - Catalog / Requests]', function () {
  'use strict'
  let sandbox
  let requestGetStub
  let requestPostStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestGetStub = sandbox.stub(request, 'getAsync')
    requestPostStub = sandbox.stub(request, 'postAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getRequestsByCatalogItemName method', function () {
    it('should return error when vRa request rejects promise', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return nodeVRealize.vra.catalog.getRequestsByCatalogItemName(catalogItemName, filter)
        .catch(function (error) {
          expect(error.name).to.equal(errorMessage)
        })
    })

    it('should return error when response statusCode is not 200', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      return nodeVRealize.vra.catalog.getRequestsByCatalogItemName(catalogItemName, filter)
        .catch(function (error) {
          expect(error).to.equal(response.body)
        })
    })

    it('should return empty array when response body or response body content is empty', function () {
      var response = {statusCode: 200}
      requestGetStub.resolves(response)

      return nodeVRealize.vra.catalog.getRequestsByCatalogItemName(catalogItemName, filter)
        .then(function (response) {
          expect(response.length).to.equal(0)
        })
    })

    it('should return populated array when customer id and key name are present in the reponse', function () {
      var rsp = {
        statusCode: 200,
        body: {
          content: [
            {
              requestData: {
                entries: [
                  {key: cidKeyName, value: {value: customerIdName}}
                ]
              }

            }]
        }}

      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequestsByCatalogItemName(catalogItemName, filter)
        .then(function (response) {
          expect(response.length).to.equal(rsp.body.content.length)
        })
    })

    it('should return empty array when customer id and key name are not present in the reponse', function () {
      var rsp = {
        statusCode: 200,
        body: {
          content: [
            {
              requestData: {
                entries: [
                  {key: cidKeyName + '1', value: {value: customerIdName + '1'}}
                ]
              }

            }]
        }}

      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequestsByCatalogItemName(catalogItemName, filter)
        .then(function (response) {
          expect(response.length).to.equal(0)
        })
    })
  })

  describe('getAllCatalogItems method', function () {
    it('should reject with error when statusCode is not 200', function () {
      var rsp = {statusCode: 404, body: 'error'}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getAllCatalogItems()
        .catch(function (error) {
          expect(error).to.equal(rsp.body)
        })
    })

    it('should reject with error when vRa request promise is rejected', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return nodeVRealize.vra.catalog.getAllCatalogItems()
        .catch(function (error) {
          expect(error.name).to.equal(errorMessage)
        })
    })

    it('should resolve with array of catalogItems when vRa request promise resolves', function () {
      var rsp = {statusCode: 200, body: body}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getAllCatalogItems()
        .then(function (response) {
          expect(response.length).to.equal(body.content.length)
        })
    })
  })

  describe('getCatalogItemByName method', function () {
    it('should reject with error when statusCode is not 200', function () {
      var rsp = {statusCode: 404, body: 'error'}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getCatalogItemByName('name')
        .catch(function (error) {
          expect(error).to.equal(rsp.body)
        })
    })

    it('should reject with error when vRa request promise is rejected', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return nodeVRealize.vra.catalog.getCatalogItemByName('name')
        .catch(function (error) {
          expect(error.name).to.equal(errorMessage)
        })
    })

    it('should resolve with body content when vRa request promise is resolved', function () {
      var rsp = {statusCode: 200, body: {content: [{name: 'name'}]}}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getCatalogItemByName('name')
        .then(function (response) {
          expect(response).to.equal(rsp.body.content[0])
        })
    })
  })

  describe('getRequest method', function () {
    it('should reject with error when statusCode is not 200', function () {
      var params = {id: 1, raw: false}
      var rsp = {statusCode: 404, body: 'error'}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequest(params)
        .catch(function (error) {
          expect(error).to.equal(rsp.body)
        })
    })

    it('should reject with error when vRa request promise is rejected', function () {
      var params = {id: 1, raw: false}
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return nodeVRealize.vra.catalog.getRequest(params)
        .catch(function (error) {
          expect(error.name).to.equal(errorMessage)
        })
    })

    it('should resolve with response body when raw parameter is true', function () {
      var params = {id: 1, raw: true}
      var rsp = {statusCode: 200, body: 'body'}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequest(params)
        .then(function (response) {
          expect(response).to.equal(rsp.body)
        })
    })

    it('should resolve with requestCompletionState property when raw parameter is false and state is not handled', function () {
      var params = {id: 1, raw: false}
      var rsp = {statusCode: 200, body: {state: 'unknown', requestCompletion: {requestCompletionState: 'state'}}}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequest(params)
        .then(function (response) {
          expect(response).to.equal(rsp.body.requestCompletion.requestCompletionState)
        })
    })

    it('should resolve with error when raw parameter is false, stateCompletion is empty and state is not handled', function () {
      var params = {id: 1, raw: false}
      var rsp = {statusCode: 200, body: {state: 'unknown'}}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequest(params)
        .then(function (response) {
          expect(response).to.equal('ERROR: ' + rsp.body.state)
        })
    })

    it('should resolve with requestCompletion object when raw parameter is false', function () {
      var params = {id: 1, raw: false}
      var rsp = {statusCode: 200, body: {requestCompletion: {requestCompletionState: 'state'}}}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequest(params)
        .then(function (response) {
          expect(response).to.equal(rsp.body.requestCompletion.requestCompletionState)
        })
    })

    it('should resolve with INPROGRESS when raw parameter is false and body state is INPROGRESS', function () {
      var inProgress = 'IN_PROGRESS'
      var params = {id: 1, raw: false}
      var rsp = {statusCode: 200, body: {requestCompletion: {requestCompletionState: 'state'}, state: inProgress}}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getRequest(params)
        .then(function (response) {
          expect(response).to.equal(inProgress)
        })
    })
  })

  describe('sendRequestViaUrl method', function () {
    it('should reject with error when statusCode is not 200', function () {
      var rsp = {statusCode: 404, body: 'error'}
      requestPostStub.resolves(rsp)

      return nodeVRealize.vra.catalog.sendRequestViaUrl()
        .catch(function (error) {
          expect(error).to.equal(rsp.body)
        })
    })

    it('should reject with error when vRa request promise is rejected', function () {
      var errorMessage = 'error'
      requestPostStub.rejects(errorMessage)

      return nodeVRealize.vra.catalog.sendRequestViaUrl()
        .catch(function (error) {
          expect(error.name).to.equal(errorMessage)
        })
    })

    it('should resolve with response body vRa request resolves', function () {
      var rsp = {statusCode: 201, body: 'body'}
      requestPostStub.resolves(rsp)

      return nodeVRealize.vra.catalog.sendRequestViaUrl()
        .then(function (response) {
          expect(response).to.equal(rsp.body)
        })
    })
  })

  describe('getCatalogItemTemplate method', function () {
    it('should reject with error when statusCode is not 200', function () {
      var rsp = {statusCode: 404, body: 'error'}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getCatalogItemTemplate()
        .catch(function (error) {
          expect(error).to.equal(rsp.body)
        })
    })

    it('should reject with error when vRa request promise is rejected', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return nodeVRealize.vra.catalog.getCatalogItemTemplate()
        .catch(function (error) {
          expect(error.name).to.equal(errorMessage)
        })
    })

    it('should resolve with response body vRa request resolves', function () {
      var rsp = {statusCode: 200, body: 'body'}
      requestGetStub.resolves(rsp)

      return nodeVRealize.vra.catalog.getCatalogItemTemplate()
        .then(function (response) {
          expect(response).to.equal(rsp.body)
        })
    })
  })
})
