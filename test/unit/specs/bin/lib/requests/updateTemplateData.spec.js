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

  it('promise should return unchanged templateData when dataToBeMerged is empty', function () {
    return vRa.updateTemplateData(templateData, [])
    .then(function (template) {
      expect(template).to.deep.equal(templateData)
    })
  })

  it('promise should return unchanged templateData when dataToBeMerged is null', function () {
    return vRa.updateTemplateData(templateData, null)
    .then(function (template) {
      expect(template).to.deep.equal(templateData)
    })
  })

  it('promise should return unchanged templateData when dataToBeMerged has empty path', function () {
    dataToBeMerged[0].path = ''
    return vRa.updateTemplateData(templateData, dataToBeMerged)
    .then(function (template) {
      expect(template).to.equal(templateData)
    })
  })

  it('promise should return changed templateData with dataToBeMerged properties', function () {
    return vRa.updateTemplateData(templateData, dataToBeMerged)
    .then(function (template) {
      expect(template.data.DNS1.componentId).to.equal(dataToBeMerged[0].value)
    })
  })
})
