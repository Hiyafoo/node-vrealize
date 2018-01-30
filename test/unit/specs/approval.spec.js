/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var nodeVRealize = new NodeVRealize()

var approval = require('./files/approval')

describe('[vRA - Approval]', function () {
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

  describe('getAllApprovalPolicies method', function () {
    var tenantId = 'tenantId'
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.approval.getAllApprovalPolicies()
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.approval.getAllApprovalPolicies(tenantId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getApprovalPolicyById method', function () {
    var policyId = 'approvalPolicyId'
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.approval.getApprovalPolicyById(policyId)
        .then(function (response) {
          expect(requestGetStubPromise.getCall(0).args[0].url).to.equal(`https:///approval-service/api/policies/${policyId}`)
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.approval.getApprovalPolicyById(policyId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('createApprovalPolicy method', function () {
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestPostStubPromise.resolves(res, null)

      return nodeVRealize.vra.approval.createApprovalPolicy()
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPostStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.approval.createApprovalPolicy()
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('updateApprovalPolicy method', function () {
    var policyId = 'approvalPolicyId'
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: ''}
      requestPutStubPromise.resolves(res, null)

      return nodeVRealize.vra.approval.updateApprovalPolicy(policyId)
        .then(function (response) {
          expect(requestPutStubPromise.getCall(0).args[0].url).to.equal(`https:///approval-service/api/policies/${policyId}`)
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPutStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.approval.updateApprovalPolicy(policyId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getApprovalPolicyTypeByName method', function () {
    var policyTypeName = 'Service Catalog - Catalog Item Request - Virtual Machine'
    it('should return policy type with matching name when policy type exists', function () {
      var res = {statusCode: 200, body: approval.all}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.approval.getApprovalPolicyTypeByName(policyTypeName)
        .then(function (response) {
          expect(response.name).to.equal(policyTypeName)
        })
    })

    it('should reject with error message when policy type name does not exist', function () {
      var policyTypeName = 'abc'
      var errorMessage = 'Could not find policyType with name' + policyTypeName
      var res = {statusCode: 200, body: approval.all}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.approval.getApprovalPolicyTypeByName(policyTypeName)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })

    it('should reject with error message when method throws unhandled exception', function () {
      var policyTypeName = 'abc'
      var errorMessage = 'error message'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.approval.getApprovalPolicyTypeByName(policyTypeName)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })
})
