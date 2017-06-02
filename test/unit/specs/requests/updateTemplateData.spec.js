/* global it beforeEach afterEach describe */
// ar path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()
import fs from 'jsonfile'
import path from 'path'

var requests = require('../../../../src/requests')

describe('[Requests] - updateTemplateData method', function () {
  'use strict'
  let sandbox
  let fsReadFileStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    fsReadFileStub = sandbox.stub(fs, 'readFile')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should not change templateData when no deploymentOptions are specified', function (done) {
    var expectedResult = { test: 'test' }
    var templateData = { test: 'test' }
    fsReadFileStub.yields(null, [])
    requests.updateTemplateData(templateData, {templateDataPath: 'dummy/path'}, function (err, mergedTemplate) {
      if (err) {}
      expect(mergedTemplate).to.deep.equal(expectedResult)
      done()
    })
  })

  it('should modify the templatedData property at the root level', function (done) {
    var deploymentOptions = {templateDataPath: 'dummy/path'}
    var expectedResult = { test: 'changed' }
    var templateData = { test: 'test' }
    fsReadFileStub.yields(null, [{
      path: '',
      leaf: 'test',
      value: 'changed'
    }])
    requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
      if (err) {}
      expect(mergedTemplate).to.deep.equal(expectedResult)
      done()
    })
  })

  it('should modify the templatedData property at the nested path level', function (done) {
    var deploymentOptions = {templateDataPath: 'dummy/path'}
    var expectedResult = {
      level1: {
        level2: { test: 'changed' }
      }
    }
    var templateData = {
      level1: {
        level2: { test: 'test' }
      }
    }
    fsReadFileStub.yields(null, [{
      path: 'level1.level2',
      leaf: 'test',
      value: 'changed'
    }])
    requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
      if (err) {}
      expect(mergedTemplate).to.deep.equal(expectedResult)
      done()
    })
  })

  it('should modify the value of a templatedData property with a compounded name', function (done) {
    var deploymentOptions = {templateDataPath: 'dummy/path'}
    var expectedResult = {
      level1: {
        'level2.test': 'changed'
      }
    }
    var templateData = {
      level1: {
        'level2.test': 'test'
      }
    }
    fsReadFileStub.yields(null, [{
      path: 'level1',
      leaf: 'level2.test',
      value: 'changed'
    }
    ])
    requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
      if (err) {}
      expect(mergedTemplate).to.deep.equal(expectedResult)
      done()
    })
  })

  it('should modify the value of templatedData properties with multiple values in the templateMap', function (done) {
    var deploymentOptions = {templateDataPath: 'dummy/path'}
    var expectedResult = {
      leaf1: 'changed',
      leaf2: 'changed'
    }
    var templateData = {
      leaf1: {value: 'test'},
      leaf2: {value: 'test'}
    }
    fsReadFileStub.yields(null, [{
      path: '',
      leaf: 'leaf1',
      value: 'changed'
    },
    {
      path: '',
      leaf: 'leaf2',
      value: 'changed'
    }])
    requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
      if (err) {}
      expect(mergedTemplate).to.deep.equal(expectedResult)
      done()
    })
  })

  it('should modify the value of templatedData properties with multiple values in a real file', function (done) {
    var deploymentOptions = {templateDataPath: path.resolve(__dirname, 'files/data.json')}
    var expectedResult = {
      leaf1: 'changed',
      leaf2: 'changed'
    }
    var templateData = {
      leaf1: {value: 'test'},
      leaf2: {value: 'test'}
    }
    sandbox.restore()
    requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
      if (err) {}
      expect(mergedTemplate).to.deep.equal(expectedResult)
      done()
    })
  })

  it('should throw an error when the file cannot be read', function (done) {
    var deploymentOptions = {templateDataPath: path.resolve(__dirname, 'dummy/path')}
    var templateData = {
      leaf1: {value: 'test'},
      leaf2: {value: 'test'}
    }
    sandbox.restore()
    requests.updateTemplateData(templateData, deploymentOptions, function (err, mergedTemplate) {
      if (err) {
        expect(mergedTemplate).to.equal(null)
        done()
      }
    })
  })
})
