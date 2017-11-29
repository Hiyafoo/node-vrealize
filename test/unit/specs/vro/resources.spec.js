/* global it beforeEach afterEach describe */
import fs from 'fs'
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../../src/index')
var nodeVRealize = new NodeVRealize()

describe('[vRO - Configurations]', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let fsCreateReadStreamStub
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise

  var categoryId = 'categoryId'
  var resourcePath = 'resourcePath'
  var password = 'password'

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    fsCreateReadStreamStub = sandbox.stub(fs, 'createReadStream')
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('exportOne method', function () {
    it('should reject when reading stream for resource path throws an error', function () {
      var errorMessage = 'error'
      fsCreateReadStreamStub.throws(new Error(errorMessage))

      return nodeVRealize.vro.resources.exportOne(categoryId, resourcePath, password)
        .then(function (response) {
        })
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })

    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200}
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.resolves(res, null)

      return nodeVRealize.vro.resources.exportOne(categoryId, resourcePath, password)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return body when the statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.resolves(res)

      return nodeVRealize.vro.resources.exportOne(categoryId, resourcePath, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.resources.exportOne(categoryId, resourcePath, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })
})
