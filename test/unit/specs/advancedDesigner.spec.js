/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var nodeVRealize = new NodeVRealize()
nodeVRealize.config.tenant = 'tenant-id'

describe('[vRA - Advanced Designer]', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise
  // eslint-disable-next-line
  let requestDeleteStubPromise

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
    requestDeleteStubPromise = sandbox.stub(request, 'deleteAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAllSubscriptions method', function () {
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestGetStubPromise.resolves(res, null)

      console.log(JSON.stringify(nodeVRealize))

      return nodeVRealize.vra.advancedDesigner.getAllSubscriptions()
        .then(function (response) {
          expect(res).to.equal(response)
          expect(requestGetStubPromise.getCall(0).args[0].url).to.equal(`https:///advanced-designer-service/api/tenants/tenant-id/event-broker/subscriptions?limit=1000`)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.advancedDesigner.getAllSubscriptions()
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getSubscriptionById method', function () {
    var subscriptionId = 'subscriptionPolicyId'
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.advancedDesigner.getSubscriptionById(subscriptionId)
        .then(function (response) {
          expect(requestGetStubPromise.getCall(0).args[0].url).to.equal(`https:///advanced-designer-service/api/tenants/tenant-id/event-broker/subscriptions/${subscriptionId}`)
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.advancedDesigner.getSubscriptionById(subscriptionId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('createSubscription method', function () {
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestPostStubPromise.resolves(res, null)

      return nodeVRealize.vra.advancedDesigner.createSubscription('json-body')
        .then(function (response) {
          expect(res).to.equal(response)
          expect(requestPostStubPromise.getCall(0).args[0].url).to.equal(`https:///advanced-designer-service/api/tenants/tenant-id/event-broker/subscriptions/`)
          expect(requestPostStubPromise.getCall(0).args[0].body).to.equal(`json-body`)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPostStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.advancedDesigner.createSubscription('json-body')
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('deleteSubscription method', function () {
    var subscriptionId = 'subscriptionId'
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestDeleteStubPromise.resolves(res, null)

      return nodeVRealize.vra.advancedDesigner.deleteSubscription(subscriptionId)
        .then(function (response) {
          expect(requestDeleteStubPromise.getCall(0).args[0].url).to.equal(`https:///advanced-designer-service/api/tenants/tenant-id/event-broker/subscriptions/${subscriptionId}`)
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestDeleteStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.advancedDesigner.deleteSubscription(subscriptionId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })
})
