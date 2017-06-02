/* global it beforeEach afterEach describe */
import request from 'request'
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()

var resources = require('../../../src/resources')

var response200 = {statusCode: 200}
var response404 = {statusCode: 404}

var resourceBody = {
  id: 1,
  requestCompletion: true,
  content:
  [
    {
      name: '1',
      status: 'status',
      id: 2,
      resourceTypeRef: {
        label: 1
      }
    }
  ]}

describe('Resources', function () {
  'use strict'
  let sandbox
  'use strict'
  let requestGetStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestGetStub = sandbox.stub(request, 'get')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAll method', function () {
    it('callback should return error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)

      resources.getAll(function (err, response, body) {
        expect(err).to.be.a('string')
        done()
      })
    })

    it('callback should return error with contents of body when getRequest returns non-successful status code', function (done) {
      requestGetStub.yields(null, response404, resourceBody)

      resources.getAll(function (err, response, body) {
        expect(response).to.be.undefined
        expect(body).to.be.undefined
        expect(err).to.equal(JSON.stringify(resourceBody))
        done()
      })
    })

    it('callback should return contents of body when getRequest returns 200 status code', function (done) {
      requestGetStub.yields(null, response200, resourceBody)

      resources.getAll(function (err, response, body) {
        expect(body).to.be.undefined
        expect(JSON.parse(response).length).to.equal(resourceBody.content.length)
        expect(err).to.be.null
        done()
      })
    })
  })

  describe('getByName method', function () {
    it('callback should return error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)

      resources.getByName([], function (err, response, body) {
        expect(err).to.be.a('string')
        done()
      })
    })

    it('callback should return error with contents of body when getRequest returns non-successful status code', function (done) {
      requestGetStub.yields(null, response404, resourceBody)

      resources.getByName([], function (err, response, body) {
        expect(response).to.be.undefined
        expect(body).to.be.undefined
        expect(err).to.equal(JSON.stringify(resourceBody, null, 2))
        done()
      })
    })

    it('callback should return contents of body when getRequest returns 200 status code', function (done) {
      requestGetStub.yields(null, response200, resourceBody)

      resources.getByName([], function (err, response, body) {
        expect(body).to.be.undefined
        expect(response).to.equal(resourceBody.content[0])
        expect(err).to.be.null
        done()
      })
    })
  })

  describe('getById method', function () {
    it('callback should return error when getRequest fails', function (done) {
      requestGetStub.yields('error', null, null)

      resources.getById([], function (err, response, body) {
        expect(err).to.be.a('string')
        done()
      })
    })

    it('callback should return error with contents of body when getRequest returns non-successful status code', function (done) {
      requestGetStub.yields(null, response404, resourceBody)

      resources.getById([], function (err, response, body) {
        expect(response).to.be.undefined
        expect(body).to.be.undefined
        expect(err).to.equal(JSON.stringify(resourceBody, null, 2))
        done()
      })
    })

    it('callback should return contents of body when getRequest returns 200 status code', function (done) {
      requestGetStub.yields(null, response200, resourceBody)

      resources.getById([], function (err, response, body) {
        expect(body).to.be.undefined
        expect(response).to.equal(resourceBody.content[0])
        expect(err).to.be.null
        done()
      })
    })
  })

  describe('getActions method', function () {
    it('callback should return error when resourceName cannot be found', function (done) {
      var getByNameStub = sandbox.stub(resources, 'getByName')
      getByNameStub.yields('error', null)

      resources.getActions([], function (err, response, body) {
        expect(err).to.be.a('string')
        done()
      })
    })

    it('callback should return error when getRequest fails', function (done) {
      var getByNameStub = sandbox.stub(resources, 'getByName')
      getByNameStub.yields(null, [])
      requestGetStub.yields('error', null, null)

      resources.getActions([], function (err, response, body) {
        expect(err).to.be.a('string')
        done()
      })
    })

    it('callback should return error with contents of body when getRequest returns non-successful status code', function (done) {
      var getByNameStub = sandbox.stub(resources, 'getByName')
      getByNameStub.yields(null, [])
      requestGetStub.yields(null, response404, resourceBody)

      resources.getActions([], function (err, response, body) {
        expect(response).to.be.undefined
        expect(body).to.be.undefined
        expect(err).to.equal(JSON.stringify(resourceBody, null, 2))
        done()
      })
    })

    it('callback should return contents of body when getRequest returns 200 status code', function (done) {
      var getByNameStub = sandbox.stub(resources, 'getByName')
      getByNameStub.yields(null, [])
      requestGetStub.yields(null, response200, resourceBody)

      resources.getActions([], function (err, response, body) {
        expect(body).to.be.undefined
        expect(response).to.equal(resourceBody.content)
        expect(err).to.be.null
        done()
      })
    })
  })
})
