/* global it beforeEach afterEach describe */
// ar path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()

var requests = require('../../../../src/requests')

var deploymentOptions = {
  clientId: 1,
  projectId: 2,
  deploymentName: 3,
  templateDataPath: null
}

var templateData = {
  description: 'description',
  data:
  {
    'y.Hostname.CID': 1,
    'y.Hostname.PID': 2,
    '_deploymentName': 3,
    'y.SSH.ssh_key': 4,
    JUMPBOX:
    {
      data:
      {
        'y.SSH.ssh_key': 5
      }
    }
  }
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

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should return an error when blueprint name cannot be found', function (done) {
    var getByNameStub = sandbox.stub(requests, 'getByName')
    getByNameStub.yields('error', null)

    requests.submit([], function (err, response) {
      expect(err).to.be.a('string')
      done()
    })
  })

  it('should return an error when the template cannot tbe found', function (done) {
    var getByNameStub = sandbox.stub(requests, 'getByName')
    var getTemplateStub = sandbox.stub(requests, 'getTemplate')
    getByNameStub.yields(null, body.content[0])
    getTemplateStub.yields('error', body)

    requests.submit([], function (err, response) {
      expect(err).to.be.a('string')
      done()
    })
  })

  it('should return an error when sendRequest fails with valid blueprint name and template', function (done) {
    var getByNameStub = sandbox.stub(requests, 'getByName')
    var getTemplateStub = sandbox.stub(requests, 'getTemplate')
    var sendRequestStub = sandbox.stub(requests, 'sendRequest')

    getByNameStub.yields(null, body.content[0])
    getTemplateStub.yields(null, templateData)
    var error = 'error'
    sendRequestStub.yields(error, null)

    requests.submit(deploymentOptions, function (err, response) {
      expect(err).to.equal(error)
      expect(response).to.be.null
      done()
    })
  })

  it('should properly execute with a valid blueprint name and template', function (done) {
    var getByNameStub = sandbox.stub(requests, 'getByName')
    var getTemplateStub = sandbox.stub(requests, 'getTemplate')
    var sendRequestStub = sandbox.stub(requests, 'sendRequest')
    var response = 'response'

    getByNameStub.yields(null, body.content[0])
    getTemplateStub.yields(null, templateData)
    sendRequestStub.yields(null, response)

    requests.submit(deploymentOptions, function (err, response) {
      expect(err).to.be.null
      expect(response).to.equal(response)
      done()
    })
  })

  it('should return an error when updating the template returns an error', function (done) {
    var getByNameStub = sandbox.stub(requests, 'getByName')
    var getTemplateStub = sandbox.stub(requests, 'getTemplate')
    var updateTemplateDataStub = sandbox.stub(requests, 'updateTemplateData')
    var error = 'error'

    getByNameStub.yields(null, body.content[0])
    getTemplateStub.yields(null, templateData)
    updateTemplateDataStub.yields(error, null)

    requests.submit(deploymentOptions, function (err, response) {
      if (err) {
        expect(err).to.equal(error)
      }
      expect(response).to.be.null
      done()
    })
  })
})

