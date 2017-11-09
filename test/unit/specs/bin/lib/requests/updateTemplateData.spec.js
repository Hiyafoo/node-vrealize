/* global it beforeEach afterEach describe */
// ar path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()
var requests = require('../../../../../../src/vra/catalog/requests')

describe('[vRA - Catalog / Requests] - updateTemplateData method', function () {
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

  it('should return unchanged templateData when dataToBeMerged is empty', function () {
    return requests.updateTemplateData(templateData, [])
      .then(function (template) {
        expect(template).to.deep.equal(templateData)
      })
  })

  it('should return unchanged templateData when dataToBeMerged is null', function () {
    return requests.updateTemplateData(templateData, null)
      .then(function (template) {
        expect(template).to.deep.equal(templateData)
      })
  })

  it('should return unchanged templateData when dataToBeMerged has empty path', function () {
    dataToBeMerged[0].path = ''
    return requests.updateTemplateData(templateData, dataToBeMerged)
      .then(function (template) {
        expect(template).to.equal(templateData)
      })
  })

  it('should return changed templateData with dataToBeMerged properties', function () {
    return requests.updateTemplateData(templateData, dataToBeMerged)
      .then(function (template) {
        expect(template.data.DNS1.componentId).to.equal(dataToBeMerged[0].value)
      })
  })
})
