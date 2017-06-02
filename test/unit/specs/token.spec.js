/* global it beforeEach afterEach describe */
// var path = require('path')
var expect = require('chai').expect
var sinon = require('sinon')
import token from '../../../src/token'
import fs from 'fs'
import extfs from 'extfs'
require('chai').should()

describe('Token', function () {
  'use strict'
  let sandbox
  // eslint-disable-next-line
  let doesVMWareTokenExistStub
    // eslint-disable-next-line
  let saveVMwareTokenStub
      // eslint-disable-next-line
  let fsExistsStub
        // eslint-disable-next-line
  let extfsIsEmptyStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    fsExistsStub = sandbox.stub(fs, 'exists')
    extfsIsEmptyStub = sandbox.stub(extfs, 'isEmpty')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('doesVMWareTokenExist method', function () {
    it('should return false if the token file does not exist', function (done) {
      fsExistsStub.yields(false)
      extfsIsEmptyStub.yields(false)

      token.doesVMWareTokenExist(function (err, result) {
        expect(err).to.be.a('string')
        expect(result).to.equal(false)
        done()
      })
    })

    it('should return false if the token file is empty', function (done) {
      fsExistsStub.yields(true)
      extfsIsEmptyStub.yields(true)

      token.doesVMWareTokenExist(function (err, result) {
        expect(err).to.be.a('string')
        expect(result).to.equal(false)
        done()
      })
    })

    it('should return true if the token file is populated with a token', function (done) {
      fsExistsStub.yields(true)
      extfsIsEmptyStub.yields(false)

      token.doesVMWareTokenExist(function (err, result) {
        expect(err).to.equal(null)
        expect(result).to.equal(true)
        done()
      })
    })
  })
}
)
