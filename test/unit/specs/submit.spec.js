/* global it beforeEach afterEach describe */
var requests = require('../../../src/vra/catalog/requests')
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()
var NodeVRealize = require('../../../src/index')

var nodeVRealize = new NodeVRealize()

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

describe('[vRA - Catalog / Requests] - Submit method', function () {
  'use strict'
  let sandbox
  let getByNameStub
  let getTemplateStub
  let updateTemplateDataStub
  let sendRequestStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    getByNameStub = sandbox.stub(nodeVRealize.vra.catalog, 'getCatalogItemByName')
    getTemplateStub = sandbox.stub(nodeVRealize.vra.catalog, 'getCatalogItemTemplate')
    updateTemplateDataStub = sandbox.stub(requests, 'updateTemplateData')
    sendRequestStub = sandbox.stub(nodeVRealize.vra.catalog, 'sendRequestViaUrl')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should return an error when getCatalogItemByName promise is rejected', function () {
    var errorMessage = 'error'
    getByNameStub.rejects(errorMessage)

    return nodeVRealize.vra.catalog.submitRequest(deploymentOptions)
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
  })

  it('should return an error when getTemplate promise is rejected', function () {
    var errorMessage = 'error'

    getByNameStub.resolves(body.content[0])
    getTemplateStub.rejects(errorMessage)

    return nodeVRealize.vra.catalog.submitRequest(deploymentOptions)
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
  })

  it('should return an error when updateTemplateData promise is rejected', function () {
    var response = {statusCode: 200}
    var errorMessage = 'errorrrrrr'

    getByNameStub.resolves(body.content[0])
    getTemplateStub.resolves(response)
    updateTemplateDataStub.rejects(errorMessage)

    return nodeVRealize.vra.catalog.submitRequest(deploymentOptions)
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
  })

  it('should return an error when sendRequest promise is rejected', function () {
    var response = {statusCode: 200}
    var errorMessage = 'error'

    getByNameStub.resolves(body.content[0])
    getTemplateStub.resolves(response)
    updateTemplateDataStub.resolves(response)
    sendRequestStub.rejects(errorMessage)

    return nodeVRealize.vra.catalog.submitRequest(deploymentOptions)
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
  })

  it('should return a response when submit is valid', function () {
    var rsp = {statusCode: 200}

    getByNameStub.resolves(body.content[0])
    getTemplateStub.resolves(rsp)
    updateTemplateDataStub.resolves(rsp)
    sendRequestStub.resolves(rsp)

    return nodeVRealize.vra.catalog.submitRequest(deploymentOptions)
      .then(function (response) {
        expect(response).to.equal(rsp)
      })
  })
})
