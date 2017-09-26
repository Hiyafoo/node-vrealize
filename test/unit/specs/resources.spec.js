/* global it beforeEach afterEach describe */
import request from 'request'
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()
var NodeVRealize = require('../../../src/index')

var vRa = new NodeVRealize()

// var resources = require('../../../src/resources')

// var response200 = {statusCode: 200}
// var response404 = {statusCode: 404}

// var resourceBody = {
//   id: 1,
//   requestCompletion: true,
//   content:
//   [
    // {
    //   name: '1',
    //   status: 'status',
    //   id: 2,
    //   resourceTypeRef: {
    //     label: 1
    //   }
    // }
//   ]}

describe('Resources', function () {
  'use strict'
  let sandbox
  'use strict'
  let requestGetStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestGetStub = sandbox.stub(request, 'getAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAll method', function () {
    it('promise should return error when getRequest fails', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getAll()
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getAll().catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body:
        {
          content: [
            {
              name: '1',
              status: 'status'
            }
          ]}
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getAll()
      .then(function (response) {
        expect(response.content.length).to.equal(stubbedResponse.body.content.length)
      })
    })
  })

  describe('getByName method', function () {
    it('promise should return error when getRequest fails', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getResourceByName()
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getResourceByName('name')
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body:
        {
          content: [
            {
              name: '1',
              status: 'status'
            }
          ]}
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getResourceByName('name')
      .then(function (response) {
        expect(response).to.deep.equal(stubbedResponse.body.content[0])
      })
    })
  })

  describe('getById method', function () {
    it('promise should return error when getRequest fails', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getResourceById()
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getResourceById('id')
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body:
        {
          content: [
            {
              name: '1',
              status: 'status'
            }
          ]}
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getResourceById('id')
      .then(function (response) {
        expect(response).to.deep.equal(stubbedResponse.body.content[0])
      })
    })
  })

  describe('getActions method', function () {
    it('promise should return error when resourceName cannot be found', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getResourceActions('name')
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getResourceActions('name')
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body:
        {
          content: [
            {
              name: '1',
              status: 'status'
            }
          ]}
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getResourceActions('name')
      .then(function (response) {
        expect(response.length).to.equal(stubbedResponse.body.content.length)
      })
    })
  })
})
