/* global it beforeEach afterEach describe */
import fs from 'fs'
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var nodeVRealize = new NodeVRealize()

var actions = require('./files/actions')

describe('[vRO - Actions]', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let fsCreateReadStreamStub
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise

  var categoryName = 'categoryName'
  var actionPath = 'actionPath'
  var actionId = 'actionId'
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

  describe('exportToModuleName method', function () {
    it('should reject when reading stream for action path throws an error', function () {
      var errorMessage = 'error'
      fsCreateReadStreamStub.throws(new Error(errorMessage))

      return nodeVRealize.vro.actions.exportToModuleName(categoryName, actionPath, password)
        .then(function (response) {
        })
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })

    it('should return response when statusCode is 200', function () {
      var res = {statusCode: 200}
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.resolves(res, null)

      return nodeVRealize.vro.actions.exportToModuleName(categoryName, actionPath, password)
        .then(function (response, body) {
          expect(res).to.equal(response)
        })
    })

    it('should return body when statusCode over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.resolves(res)

      return nodeVRealize.vro.actions.exportToModuleName(categoryName, actionPath, password)
        .then(function (response) {
          expect(response).to.deep.equal(res)
        })
    })

    it('should return error when vRa request is rejected', function () {
      var errorMessage = 'error'
      fsCreateReadStreamStub.returns('')
      requestPostStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.actions.exportToModuleName(categoryName, actionPath, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('importOne method', function () {
    it('should return the response when statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.actions.importOne(actionId, password)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return the response when statusCode is over 300', function () {
      var res = {statusCode: 300, body: 'test'}
      requestGetStubPromise.resolves(res)

      return nodeVRealize.vro.actions.importOne(actionId, password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.actions.importOne(actionId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('importFromModuleName method', function () {
    it('should return the response when statusCode is 200', function () {
      var res = {
        statusCode: 200,
        body: {
          link: []
        }
      }
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.actions.importFromModuleName('io.test', password)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return the filtered response when statusCode is 200', function () {
      var res = {
        statusCode: 200,
        body: actions.all
      }
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.actions.importFromModuleName('io.test.network', password)
        .then(function (response) {
          // console.log(JSON.stringify(response, null, 2))
          expect(response.body.link.length).to.equal(7)
        })
    })

    it('should return no actions in the filtered response when statusCode is 200', function () {
      var res = {
        statusCode: 200,
        body: actions.all
      }
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vro.actions.importFromModuleName('do.not.exist', password)
        .then(function (response) {
          // console.log(JSON.stringify(response, null, 2))
          expect(response.body.link.length).to.equal(0)
        })
    })

    it('should return the response when statusCode is over 300', function () {
      var res = {
        statusCode: 300,
        body: 'test'
      }
      requestGetStubPromise.resolves(res)

      return nodeVRealize.vro.actions.importFromModuleName('not found', password)
        .then(function (response) {
          expect(res).to.deep.equal(res)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vro.actions.importFromModuleName(actionId, password)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })
})
