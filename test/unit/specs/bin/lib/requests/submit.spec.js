/* global it beforeEach afterEach describe */
// ar path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var sinonStubPromise = require('sinon-stub-promise')
require('chai').should()
var NodeVRealize = require('../../../../../../src/index')

var vRa = new NodeVRealize()

sinonStubPromise(sinon)

var deploymentOptions = {
  clientId: 1,
  projectId: 2,
  deploymentName: 3,
  templateDataPath: null,
  blueprintName: 'name'
}

var body = {
  id: 1,
  requestCompletion: true,
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

describe('[Requests] - Submit method', function () {
  'use strict'
  let sandbox
  let getByNameStub
  let getTemplateStub
  let updateTemplateDataStub
  let sendRequestStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    getByNameStub = sandbox.stub(vRa, 'getByName').returnsPromise()
    getTemplateStub = sandbox.stub(vRa, 'getTemplate').returnsPromise()
    updateTemplateDataStub = sandbox.stub(vRa, 'updateTemplateData').returnsPromise()
    sendRequestStub = sandbox.stub(vRa, 'sendRequest').returnsPromise()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('promise should return error when getByName promise is rejected', function () {
    var errorMessage = 'error'
    getByNameStub.rejects(errorMessage)

    return vRa.submit(deploymentOptions)
      .catch(function (error) {
        expect(error).to.equal(errorMessage)
      })
  })

  it('promise should return error when getTemplate promise is rejected', function () {
    var errorMessage = 'error'

    getByNameStub.resolves(body.content[0])
    getTemplateStub.rejects(errorMessage)

    return vRa.submit(deploymentOptions)
      .catch(function (error) {
        expect(error).to.equal(errorMessage)
      })
  })

  it('promise should return error when updateTemplateData promise is rejected', function () {
    var response = {statusCode: 200}
    var errorMessage = 'error'

    getByNameStub.resolves(body.content[0])
    getTemplateStub.resolves(response)
    updateTemplateDataStub.rejects(errorMessage)

    return vRa.submit(deploymentOptions)
      .catch(function (error) {
        expect(error).to.equal(errorMessage)
      })
  })

  it('promise should return error when sendRequest promise is rejected', function () {
    var response = {statusCode: 200}
    var errorMessage = 'error'

    getByNameStub.resolves(body.content[0])
    getTemplateStub.resolves(response)
    updateTemplateDataStub.resolves(response)
    sendRequestStub.rejects(errorMessage)

    return vRa.submit(deploymentOptions)
      .catch(function (error) {
        expect(error).to.equal(errorMessage)
      })
  })

  it('promise should return response when submit is valid', function () {
    var rsp = {statusCode: 200}

    getByNameStub.resolves(body.content[0])
    getTemplateStub.resolves(rsp)
    updateTemplateDataStub.resolves(rsp)
    sendRequestStub.resolves(rsp)

    return vRa.submit(deploymentOptions)
      .then(function (response) {
        expect(response).to.equal(rsp)
      })
  })
})

