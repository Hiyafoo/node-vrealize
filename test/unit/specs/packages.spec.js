/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var vRa = new NodeVRealize()

describe('Packages', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('createPackage method', function () {
    var packageName = 'packageName'
    var tenantId = 'tenantId'
    var contents = []

    it('promise should return response when the statusCode is 201', function () {
      var res = {statusCode: 201}
      requestPostStubPromise.resolves(res, null)

      return vRa.createPackage(packageName, tenantId, contents)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPostStubPromise.rejects(new Error(errorMessage))

      return vRa.createPackage(packageName, tenantId, contents)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getPackageIdByName method', function () {
    var packageName = 'packageName'

    it('promise should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: getPackageResponse}
      requestGetStubPromise.resolves(res, null)

      return vRa.getPackageIdByName(packageName)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return vRa.getPackageIdByName(packageName)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getPackage method', function () {
    var packageId = 'packageName'

    it('promise should return response when the statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return vRa.getPackage(packageId)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('promise should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return vRa.getPackage(packageId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })
})

var getPackageResponse = {
  'links': [],
  'content': [
    {
      '@type': 'Package',
      'id': '6880b456-7afe-4534-adb2-aa82051bad14',
      'name': 'Demo Package',
      'description': 'Package for demo purposes',
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'contents': [
        '105dc37c-2d85-488b-ba4a-622489123166'
      ],
      'createdDate': '2017-11-01T20:09:23.504Z',
      'lastUpdated': '2017-11-01T20:09:23.504Z',
      'version': 0
    },
    {
      '@type': 'Package',
      'id': '21af8992-3985-4e8a-8e55-c85f7ea5bc90',
      'name': 'Demo Package1',
      'description': 'Package for demo purposes',
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'contents': [
        '105dc37c-2d85-488b-ba4a-622489123166',
        '8b46b6ed-8b9e-483b-a3a9-f8fa16ec4aa4'
      ],
      'createdDate': '2017-11-01T20:15:58.158Z',
      'lastUpdated': '2017-11-01T20:15:58.158Z',
      'version': 0
    }
  ],
  'metadata': {
    'size': 20,
    'totalElements': 2,
    'totalPages': 1,
    'number': 1,
    'offset': 0
  }
}
