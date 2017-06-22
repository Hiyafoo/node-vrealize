/* global it beforeEach afterEach describe */
// ar path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var sinonStubPromise = require('sinon-stub-promise')
require('chai').should()
var NodeVRealize = require('../../../../../../src/index')

var vRa = new NodeVRealize()

sinonStubPromise(sinon)

describe('[Requests] - updateTemplateData method', function () {
  'use strict'
  let sandbox
  let dataToBeMerged
  let templateData

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    dataToBeMerged = [
      {
        'path': 'data.DNS1',
        'leaf': 'componentId',
        'value': 'ID'
      }
    ]

    templateData = {
      'type': 'provisioningRequest',
      'catalogItemId': '25c168eb-fe62-4810-8f42-48f83883d48e',
      'requestedFor': 'svc_ns1ansibleinfra2@ycs.io',
      'businessGroupId': '660354cc-70fd-40a3-aa3f-09061b4db04a',
      'description': null,
      'reasons': null,
      'data': {
        'DNS1': {
          'componentTypeId': 'com.vmware.csp.component.cafe.composition',
          'componentId': null,
          'classId': 'Blueprint.Component.Declaration',
          'typeFilter': 'ProjectZonev510*Call_RC_Local_DNS1',
          'data': {
            '_hasChildren': false
          }
        },
        'DNS_Server': {
          'componentTypeId': 'com.vmware.csp.component.cafe.composition',
          'componentId': null,
          'classId': 'Blueprint.Component.Declaration',
          'typeFilter': 'ProjectZonev510*Check_DNS_Server_Status_1',
          'data': {
            'COUNTER': 10,
            'LOGFILE': '/var/log/hybris.DNS.log',
            'TIMESTAMP': '',
            '_hasChildren': false
          }
        }
      }
    }
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('promise should return unchanged templateData when dataToBeMerge is empty', function () {
    return vRa.updateTemplateData(templateData, [])
    .then(function (template) {
      expect(template).to.deep.equal(templateData)
    })
  })

  it('promise should return changed templateData with dataToBeMerged properties', function () {
    return vRa.updateTemplateData(templateData, dataToBeMerged)
    .then(function (template) {
      expect(template.data.DNS1.componentId).to.equal(dataToBeMerged[0].value)
    })
  })

  // it('should not change templateData when no deploymentOptions are specified', function (done) {
  //   var expectedResult = { test: 'test' }

  //   requests.updateTemplateData(templateData, dataToBeMerged, function (err, mergedTemplate) {
  //     if (err) {}
  //     expect(mergedTemplate).to.deep.equal(expectedResult)
  //     done()
  //   })
  // })

  // it('should modify the templatedData property at the root level', function (done) {
  //   var expectedResult = { test: 'changed' }
  //   var templateData = { test: 'test' }

  //   requests.updateTemplateData(templateData, dataToBeMerged, function (err, mergedTemplate) {
  //     if (err) {}
  //     expect(mergedTemplate).to.deep.equal(expectedResult)
  //     done()
  //   })
  // })

  // it('should modify the templatedData property at the nested path level', function (done) {
  //   var deploymentOptions = {templateDataPath: 'dummy/path'}
  //   var expectedResult = {
  //     level1: {
  //       level2: { test: 'changed' }
  //     }
  //   }
  //   var templateData = {
  //     level1: {
  //       level2: { test: 'test' }
  //     }
  //   }

  //   requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
  //     if (err) {}
  //     expect(mergedTemplate).to.deep.equal(expectedResult)
  //     done()
  //   })
  // })

  // it('should modify the value of a templatedData property with a compounded name', function (done) {
  //   var deploymentOptions = {templateDataPath: 'dummy/path'}
  //   var expectedResult = {
  //     level1: {
  //       'level2.test': 'changed'
  //     }
  //   }
  //   var templateData = {
  //     level1: {
  //       'level2.test': 'test'
  //     }
  //   }

  //   requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
  //     if (err) {}
  //     expect(mergedTemplate).to.deep.equal(expectedResult)
  //     done()
  //   })
  // })

  // it('should modify the value of templatedData properties with multiple values in the templateMap', function (done) {
  //   var deploymentOptions = {templateDataPath: 'dummy/path'}
  //   var expectedResult = {
  //     leaf1: 'changed',
  //     leaf2: 'changed'
  //   }
  //   var templateData = {
  //     leaf1: {value: 'test'},
  //     leaf2: {value: 'test'}
  //   }

  //   requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
  //     if (err) {}
  //     expect(mergedTemplate).to.deep.equal(expectedResult)
  //     done()
  //   })
  // })

  // it('should modify the value of templatedData properties with multiple values in a real file', function (done) {
  //   var deploymentOptions = {templateDataPath: path.resolve(__dirname, 'files/data.json')}
  //   var expectedResult = {
  //     leaf1: 'changed',
  //     leaf2: 'changed'
  //   }
  //   var templateData = {
  //     leaf1: {value: 'test'},
  //     leaf2: {value: 'test'}
  //   }
  //   sandbox.restore()
  //   requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
  //     if (err) {}
  //     expect(mergedTemplate).to.deep.equal(expectedResult)
  //     done()
  //   })
  // })

  // it('should throw an error when the file cannot be read', function (done) {
  //   var deploymentOptions = {templateDataPath: path.resolve(__dirname, 'dummy/path')}
  //   var templateData = {
  //     leaf1: {value: 'test'},
  //     leaf2: {value: 'test'}
  //   }
  //   sandbox.restore()
  //   requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
  //     if (err) {
  //       expect(mergedTemplate).to.equal(null)
  //       done()
  //     }
  //   })
  // })
})
