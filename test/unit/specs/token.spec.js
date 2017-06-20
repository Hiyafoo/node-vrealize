/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
var sinonStubPromise = require('sinon-stub-promise')
import fs from 'fs'
import extfs from 'extfs'
require('chai').should()

var NodeVRealize = require('../../../src/index')

var vRa = new NodeVRealize()

sinonStubPromise(sinon)

describe('Token', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let doesVMWareTokenExistStub
    // eslint-disable-next-line
  let saveVMwareTokenStub
  // eslint-disable-next-line
  let fsExistsStubPromise
    // eslint-disable-next-line
  let extfsIsEmptyStubPromise

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    fsExistsStubPromise = sandbox.stub(fs, 'existsAsync').returnsPromise()
    extfsIsEmptyStubPromise = sandbox.stub(extfs, 'isEmptyAsync').returnsPromise()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('doesVMWareTokenExist method', function () {
    it('promise should return true when VMwareToken file exists and is not empty', function () {
      fsExistsStubPromise.resolves(true)
      extfsIsEmptyStubPromise.resolves(false)

      return vRa.doesVMWareTokenExist()
      .then(function (tokenExists) {
        expect(tokenExists).to.equal(true)
      })
    })

    it('promise should return false if the token file does not exist', function () {
      fsExistsStubPromise.resolves(false)
      extfsIsEmptyStubPromise.resolves(true)

      return vRa.doesVMWareTokenExist()
      .then(function (tokenExists) {
        expect(tokenExists).to.equal(false)
      })
    })

    it('promise should return false if the token file is empty', function () {
      fsExistsStubPromise.resolves(true)
      extfsIsEmptyStubPromise.resolves(true)

      return vRa.doesVMWareTokenExist()
      .then(function (tokenExists) {
        expect(tokenExists).to.equal(false)
      })
    })

    it('promise should return error when promise to check if token exists is rejected', function () {
      var errorMessage = 'error'
      fsExistsStubPromise.rejects(errorMessage)
      extfsIsEmptyStubPromise.resolves(true)

      return vRa.doesVMWareTokenExist()
      .catch(function (error) {
        expect(error).to.equal(errorMessage)
      })
    })

    it('promise should return error when promise to check if token file is empty is rejected', function () {
      var errorMessage = 'error'
      fsExistsStubPromise.resolves(true)
      extfsIsEmptyStubPromise.rejects(errorMessage)

      return vRa.doesVMWareTokenExist()
      .catch(function (error) {
        expect(error).to.equal(errorMessage)
      })
    })
  })
}
)
