/* global it beforeEach afterEach describe */
var fs = require('fs')
var expect = require('chai').expect
var sinon = require('sinon')
var request = require('request')
require('chai').should()

var NodeVRealize = require('../../../src/index')
var nodeVRealize = new NodeVRealize()

describe('[vRA - Content]', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let requestPostStubPromise
  // eslint-disable-next-line
  let requestGetStubPromise
  // eslint-disable-next-line
  let createReadStreamStub
  // eslint-disable-next-line
  let requestDeleteStubPromise

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestPostStubPromise = sandbox.stub(request, 'postAsync')
    requestGetStubPromise = sandbox.stub(request, 'getAsync')
    requestDeleteStubPromise = sandbox.stub(request, 'deleteAsync')
    createReadStreamStub = sandbox.stub(fs, 'createReadStream')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getContent method', function () {
    var tenantId = 'tenantId'
    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200, body: getContentResponse}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.content.getFromTenant(tenantId)
        .then(function (response) {
          expect(requestGetStubPromise.getCall(0).args[0].url).to.equal('https:///content-management-service/api/contents/?limit=1000&$filter=(tenantId eq \'tenantId\')')
          expect(res).to.equal(response)
        })
    })

    it('should return response with 10,000 items when the statusCode is 200', function () {
      var res = {statusCode: 200, body: getContentResponse}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.content.getFromTenant(tenantId, 10000)
        .then(function (response) {
          expect(requestGetStubPromise.getCall(0).args[0].url).to.equal('https:///content-management-service/api/contents/?limit=10000&$filter=(tenantId eq \'tenantId\')')
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.content.getFromTenant(tenantId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('createPackage method', function () {
    var packageName = 'packageName'
    var tenantId = 'tenantId'
    var contents = []

    it('should return response when the statusCode is 201', function () {
      var res = {statusCode: 201}
      requestPostStubPromise.resolves(res, null)

      return nodeVRealize.vra.content.createPackage(packageName, tenantId, contents)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPostStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.content.createPackage(packageName, tenantId, contents)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('exportPackage method', function () {
    it('should return response when the statusCode is 201', function () {
      var resolutionMode = 'YOUHOU'
      var res = {statusCode: 201}
      requestPostStubPromise.resolves(res, null)
      createReadStreamStub.returns('content-of-the-file')
      return nodeVRealize.vra.content.exportPackage('my-path', resolutionMode)
        .then(function (response) {
          expect(requestPostStubPromise.getCall(0).args[0].url).to.equal(`https:///content-management-service/api/packages/?resolutionMode=${resolutionMode}`)
          expect(requestPostStubPromise.getCall(0).args[0].formData).to.deep.equal({file: 'content-of-the-file'})
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestPostStubPromise.rejects(new Error(errorMessage))
      createReadStreamStub.returns('content-of-the-file')
      return nodeVRealize.vra.content.exportPackage('file', 'RESOLUTION_MODE')
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('deletePackage method', function () {
    it('should return response when the statusCode is 201', function () {
      var id = 'ID'
      var res = {statusCode: 201}
      requestDeleteStubPromise.resolves(res, null)
      return nodeVRealize.vra.content.deletePackage(id)
        .then(function (response) {
          expect(requestDeleteStubPromise.getCall(0).args[0].url).to.equal(`https:///content-management-service/api/packages/${id}`)
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestDeleteStubPromise.rejects(new Error(errorMessage))
      return nodeVRealize.vra.content.deletePackage('file')
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })

  describe('getPackageById method', function () {
    var packageId = 'packageName'

    it('should return response when the statusCode is 200', function () {
      var res = {statusCode: 200}
      requestGetStubPromise.resolves(res, null)

      return nodeVRealize.vra.content.getPackageById(packageId)
        .then(function (response) {
          expect(res).to.equal(response)
        })
    })

    it('should return error when the vRa request is rejected', function () {
      var errorMessage = 'error'
      requestGetStubPromise.rejects(new Error(errorMessage))

      return nodeVRealize.vra.content.getPackageById(packageId)
        .catch(function (error) {
          expect(error.message).to.equal(errorMessage)
        })
    })
  })
})

var getContentResponse = {
  'links': [
    {
      '@type': 'link',
      'rel': 'next',
      'href': "https://sy2-inf-vra-001.ycs.io/content-management-service/api/contents/?filter=tenantId%20eq%20'ycommerce'&page=2&limit=10"
    }
  ],
  'content': [
    {
      '@type': 'Content',
      'id': '1a630d08-1e1b-4c22-a526-17ac2618d474',
      'contentId': 'CustomizeDeploymentName',
      'name': 'Customize-Deployment-Name',
      'description': 'Properties for Custom Hostnaming Extension v4',
      'contentTypeId': 'property-group',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-06-16T14:34:50.923Z',
      'lastUpdated': '2017-09-19T16:42:29.449Z',
      'version': 8
    },
    {
      '@type': 'Content',
      'id': '18cd1aaa-f42b-4128-9731-d95687e3ed15',
      'contentId': 'VirtualMachine.Disk3.Eager.Zero',
      'name': 'VirtualMachine.Disk3.Eager.Zero',
      'description': null,
      'contentTypeId': 'property-definition',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-09-21T14:04:05.044Z',
      'lastUpdated': '2017-09-21T14:04:05.044Z',
      'version': 0
    },
    {
      '@type': 'Content',
      'id': '0683337d-d3c6-4982-bab7-436e56755bb8',
      'contentId': 'VirtualMachine.Disk2.SCSI.Controller',
      'name': 'VirtualMachine.Disk2.SCSI.Controller',
      'description': null,
      'contentTypeId': 'property-definition',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-09-21T14:05:50.980Z',
      'lastUpdated': '2017-09-21T14:05:50.980Z',
      'version': 0
    },
    {
      '@type': 'Content',
      'id': '82688759-c16e-4830-a759-7cfd8514aa3d',
      'contentId': 'VirtualMachine.Disk4.SCSI.Controller',
      'name': 'VirtualMachine.Disk4.SCSI.Controller',
      'description': null,
      'contentTypeId': 'property-definition',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-09-22T08:56:05.746Z',
      'lastUpdated': '2017-09-22T08:56:05.746Z',
      'version': 0
    },
    {
      '@type': 'Content',
      'id': 'fd938a29-dfb4-4924-921f-ee2680dc1395',
      'contentId': 'CustomizeCMZVMNames',
      'name': 'Customize-CMZ-VM-Names',
      'description': null,
      'contentTypeId': 'property-group',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-06-16T18:54:57.635Z',
      'lastUpdated': '2017-08-25T14:41:49.732Z',
      'version': 7
    },
    {
      '@type': 'Content',
      'id': 'c5b77a2a-d6b3-4d23-bd91-5464301c7740',
      'contentId': 'hybris.Hostname.NumberSuffix',
      'name': 'Number Suffix',
      'description': '<hostnumber>: fixed 3 digits, only numbers, leading 0. Required for all hosts. Normally skipped for virtual addresses like SCAN servers (orascn) or virtual hosts for datahub. If we have exotic cases with more than 1 scan or virtual address of same type, we can use the hostnumber.',
      'contentTypeId': 'property-definition',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-06-16T17:44:21.664Z',
      'lastUpdated': '2017-08-25T14:41:50.669Z',
      'version': 5
    },
    {
      '@type': 'Content',
      'id': '5f8fe096-3b88-4c36-a6d1-1bca94a9de88',
      'contentId': 'hybris.Hostname.DCID',
      'name': 'Datacenter ID',
      'description': 'Datacenter Id. (3 to 6 digits)',
      'contentTypeId': 'property-definition',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-06-16T17:16:13.590Z',
      'lastUpdated': '2017-08-25T14:41:52.552Z',
      'version': 4
    },
    {
      '@type': 'Content',
      'id': '6dedda8a-2cf5-4245-8b63-8193d65430a0',
      'contentId': 'image_ValueSet.CentOS',
      'name': 'ValueSet.CentOS',
      'description': 'ValueSet.CentOS',
      'contentTypeId': 'component-profile-value',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-06-20T18:12:11.395Z',
      'lastUpdated': '2017-06-20T18:12:11.395Z',
      'version': 0
    },
    {
      '@type': 'Content',
      'id': 'f4ff9f47-e592-41a0-9efa-b64a11a6faba',
      'contentId': 'hybris.Hostname.CID',
      'name': 'Customer ID',
      'description': 'The customer ID. Must have a minimum of 3 letters (maximum 6). Must be unique.',
      'contentTypeId': 'property-definition',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-06-16T17:09:58.672Z',
      'lastUpdated': '2017-08-25T14:41:53.488Z',
      'version': 4
    },
    {
      '@type': 'Content',
      'id': '914853b8-81b6-4f11-b634-140e62931031',
      'contentId': 'size_ValueSet.Small',
      'name': 'ValueSet.Small',
      'description': 'ValueSet.Small',
      'contentTypeId': 'component-profile-value',
      'mimeType': null,
      'tenantId': 'ycommerce',
      'subtenantId': null,
      'dependencies': [],
      'createdDate': '2017-06-16T18:34:50.230Z',
      'lastUpdated': '2017-06-16T18:34:50.230Z',
      'version': 0
    }
  ],
  'metadata': {
    'size': 10,
    'totalElements': 67,
    'totalPages': 7,
    'number': 1,
    'offset': 0
  }
}
