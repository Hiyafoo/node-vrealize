/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
import fs from 'fs'
require('chai').should()

var NodeVRealize = require('../../../src/index')
var vRa = new NodeVRealize()

describe('Configurations', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let fsCreateReadStreamStub
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise

  var categoryId = 'categoryId'
  var configurationPath = 'workflowPath'
  var password = 'password'
  var configurationId = 'workflowId'

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    fsCreateReadStreamStub = sandbox.stub(fs, 'createReadStream')
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('exportConfiguration method', function () {
    it('promise should reject when reading stream for action path throws an error', function () {
      var errorMessage = 'error'
      fsCreateReadStreamStub.throws(new Error(errorMessage))

      return vRa.exportConfiguration(categoryId, configurationPath, password)
      .then(function (response) {
      })
      .catch(function (error) {
        expect(error.message).to.equal(errorMessage)
      })
    })

    it('promise should return response when the statusCode is 200', function () {
      var res = {statusCode: 200}
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.resolves(res, null)

      return vRa.exportConfiguration(categoryId, configurationPath, password)
      .then(function (response) {
        expect(res).to.equal(response)
      })
    })

    it('promise should return body when the statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.resolves(res)

      return vRa.exportConfiguration(categoryId, configurationPath, password)
      .then(function (response) {
        expect(res).to.deep.equal(res)
      })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.rejects(new Error(errorMessage))

      return vRa.exportConfiguration(categoryId, configurationPath, password)
      .catch(function (error) {
        expect(error.message).to.equal(errorMessage)
      })
    })
  })

  describe('importConfiguration method', function () {
    it('promise should return the response when statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return vRa.importConfiguration(configurationId, password)
      .then(function (response) {
        expect(res).to.equal(response)
      })
    })

    it('promise should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return vRa.importConfiguration(configurationId, password)
      .then(function (response) {
        expect(res).to.deep.equal(res)
      })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return vRa.importConfiguration(configurationId, password)
      .catch(function (error) {
        expect(error.message).to.equal(errorMessage)
      })
    })
  })
})
