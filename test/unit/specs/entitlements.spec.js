/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var nodeVRealize = new NodeVRealize()

var entitlements = require('./files/entitlements')

describe('[vRA - Entitlement]', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise
  // eslint-disable-next-line
  let requestPutStubPromise

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
    requestPutStubPromise = sandbox.stub(request, 'putAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('updateEntitlement method', function () {
    var entitlementId = 'entitlementId'
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestPutStubPromise.resolves(res, null)

      return nodeVRealize.vra.catalog.updateEntitlement(entitlementId)
        .then(function (response) {
          expect(requestPutStubPromise.getCall(0).args[0].url).to.equal(`https:///catalog-service/api/entitlements/${entitlementId}`)
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPutStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.catalog.updateEntitlement(entitlementId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getEntitlementByName method', function () {
    var entitlementName = 'ENTL-Standard'
    it('should return entitlement with matching name when entitlement name exists', function () {
      var res = {
        statusCode: 200,
        body: entitlements.all
      }
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.catalog.getEntitlementByName(entitlementName)
        .then(function (response) {
          expect(response.name).to.equal(entitlementName)
        })
    })

    it('should reject with error message when entitlement name does not exist', function () {
      var entitlementName = 'abc'
      var errorMessage = 'Could not find the entitlement with the name' + entitlementName
      var res = {statusCode: 200, body: entitlements.all}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.catalog.getEntitlementByName(entitlementName)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })

    it('should reject with error message when method throws unhandled exception', function () {
      var entitlementName = 'abc'
      var errorMessage = 'error message'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.catalog.getEntitlementByName(entitlementName)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })
})
