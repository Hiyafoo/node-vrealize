/* global it beforeEach afterEach describe */
// ar path = require('path')
import request from 'request'
var expect = require('chai').expect
var sinon = require('sinon')
var sinonStubPromise = require('sinon-stub-promise')
require('chai').should()
var NodeVRealize = require('../../../../../../src/index')

var vRa = new NodeVRealize()

sinonStubPromise(sinon)

var response200 = {statusCode: 200}
var response201 = {statusCode: 201}
var response404 = {statusCode: 404}

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

describe('Requests', function () {
  'use strict'
  let sandbox
  let requestGetStub
  let requestPostStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestGetStub = sandbox.stub(request, 'getAsync').returnsPromise()
    requestPostStub = sandbox.stub(request, 'postAsync').returnsPromise()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getRequestsByName method', function () {
    it('promise should return error when vRa request rejects promise', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getRequestsByName(catalogItemName, customerIdName, cidKeyName)
      .catch(function (error) {
        expect(error).to.equal(errorMessage)
      })
    })

    it('promise should return error when response statusCode is not 200', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      return vRa.getRequestsByName(catalogItemName, customerIdName, cidKeyName)
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return empty array when response body or response body content is empty', function () {
      var response = {statusCode: 200}
      requestGetStub.resolves(response)

      return vRa.getRequestsByName(catalogItemName, customerIdName, cidKeyName)
      .then(function (response) {
        expect(response.length).to.equal(0)
      })
    })

    it('promise should return populated array when response statusCode is 200', function () {
      var response = {
        statusCode: 200,
        body: {
          content: []
        }}

      requestGetStub.resolves(response)

      return vRa.getRequestsByName(catalogItemName, customerIdName, cidKeyName)
      .then(function (response) {
        expect(response.length).to.equal(response.body.content.length)
      })
    })
  })

  describe('getObjectFromKey method', function () {
    it('should return the object when the key is present in the entries Array', function () {
      var jsonSample = {
        entries: [
          {key: 'test'}
        ]
      }
      var obj = vRa.getObjectFromKey(jsonSample, 'test')
      expect(obj).to.deep.equal({key: 'test'})
      obj.value = 'value'
      expect(jsonSample.entries[0].value).to.deep.equal('value')
    })

    it('should return null when the key is not present in the entries Array', function () {
      var jsonSample = {
        entries: [
          {'hybris.Hostname.CID': 'te'}
        ]
      }
      expect(vRa.getObjectFromKey(jsonSample, 'test')).to.deep.equal(null)
    })
  })

  describe('getAllCatalogItems method', function () {
    it('should return error when get request fails', function (done) {
      requestGetStub.yields('error', null, null)
      vRa.getAllCatalogItems(function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return an error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)
      vRa.getAllCatalogItems(function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return response body as error when getRequest returns a non-successful status code', function (done) {
      requestGetStub.yields(null, response404, body)
      vRa.getAllCatalogItems(function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return body item list when getRequest returns a 200 status code', function (done) {
      requestGetStub.yields(null, response200, body)
      vRa.getAllCatalogItems(function (err, response) {
        expect(err).to.be.null
        expect(JSON.parse(response).length).to.equal(body.content.length)
        done()
      })
    })
  })

  describe('getByName method', function () {
    it('callback should return an error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)
      vRa.getByName([], function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return response body as error when getRequest status code is not 200', function (done) {
      requestGetStub.yields(null, response404, 'error')
      vRa.getByName('name', function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('should return body content when getRequest status code is 200', function (done) {
      requestGetStub.yields(null, response200, body)
      vRa.getByName('name', function (err, response) {
        expect(err).to.be.null
        expect(response).to.equal(body.content[0])
        done()
      })
    })
  })

  describe('get method', function () {
    it('callback should return an error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)
      vRa.get([], function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })
  })

  describe('get method', function () {
    it('callback should return response body as error when getRequest status code is not 200', function (done) {
      requestGetStub.yields(null, response404, 'error')
      vRa.get('name', function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return request completion status when getRequest status code is 200 and raw parameter is false', function (done) {
      var params = {id: 1, raw: false}
      body.state = 'IN_PROGRESS'
      requestGetStub.yields(null, response200, body)
      vRa.get(params, function (err, response) {
        expect(err).to.be.null
        expect(response).to.equal(body.state)
        done()
      })
    })

    it('callback should return body when getRequest response state is IN_PROGRESS and raw parameter is true', function (done) {
      var params = {id: 1, raw: true}

      body.state = 'IN_PROGRESS'
      requestGetStub.yields(null, response200, body)
      vRa.get(params, function (err, response) {
        expect(err).to.be.null
        expect(response).to.equal(body)
        done()
      })
    })
  })
  it('callback should return IN_PROGRESS when getRequest response state is IN_PROGRESS and raw parameter is false', function (done) {
    var params = {id: 1, raw: false}

    body.state = 'IN_PROGRESS'
    requestGetStub.yields(null, response200, body)
    vRa.get(params, function (err, response) {
      expect(err).to.be.null
      expect(response).to.equal(body.state)
      done()
    })
  })

  it('callback should return when getRequest response state is OTHER and raw parameter is false', function (done) {
    var params = {id: 1, raw: false}

    body.state = 'OTHER'
    requestGetStub.yields(null, response200, body)
    vRa.get(params, function (err, response) {
      expect(err).to.be.null
      expect(response).to.equal(body.requestCompletion.requestCompletionState)
      done()
    })
  })

  describe('getAll method', function () {
    it('should return response body as error when getRequest status code is not 200', function (done) {
      requestGetStub.yields(null, response404, 'error')
      vRa.getAll('name', function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return an error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)
      vRa.getAll([], function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return body when getRequest status code is 200', function (done) {
      requestGetStub.yields(null, response200, body)
      vRa.getAll([], function (err, response) {
        expect(err).to.be.null
        expect(response).to.equal(body)
        done()
      })
    })
  })

  describe('sendRequest method', function () {
    it('should return error when getRequest fails', function (done) {
      requestPostStub.yields('error', null, null)
      vRa.sendRequest([], [], function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return response body as error when getRequest status code is not 200', function (done) {
      requestPostStub.yields(null, response404, 'error')
      vRa.sendRequest([], [], function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('should return body when getRequest status code is 201', function (done) {
      requestPostStub.yields(null, response201, body)
      vRa.sendRequest([], [], function (err, response) {
        expect(err).to.be.null
        expect(response).to.equal(body)
        done()
      })
    })
  })

  describe('getTemplate method', function () {
    it('callback should return an error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)
      vRa.getTemplate([], function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return response body as error when status code is not 200', function (done) {
      requestGetStub.yields(null, response404, 'error')
      vRa.getTemplate('name', function (err, response) {
        expect(err).to.be.a('string')
        expect(response).to.be.undefined
        done()
      })
    })

    it('callback should return body when getRequest status code is 200', function (done) {
      requestGetStub.yields(null, response200, body)
      vRa.getTemplate([], function (err, response) {
        expect(err).to.be.null
        expect(response).to.equal(body)
        done()
      })
    })
  })
})
