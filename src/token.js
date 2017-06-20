import Promise from 'bluebird'
var fs = Promise.promisifyAll(require('fs'))
var extfs = Promise.promisifyAll(require('extfs'))

module.exports = {
  doesVMWareTokenExist: doesVMWareTokenExist,
  saveVMwareToken: saveVMwareToken,
  getTokenFromFile: getTokenFromFile
}

var VMwareTokenPath = '/tmp/VMwareToken'

function doesVMWareTokenExist () {
  return new Promise(function (resolve, reject) {
    fs.existsAsync(VMwareTokenPath)
    .then(function (exists) {
      if (exists) {
        return extfs.isEmptyAsync(VMwareTokenPath)
      }
      resolve(false)
    })
    .then(function (isEmpty) {
      resolve(!isEmpty)
    })
    .catch(function (error) {
      reject(error)
    })
  })
}

/* istanbul ignore next */
function getTokenFromFile () {
  return new Promise(function (resolve, reject) {
    fs.readFileAsync(VMwareTokenPath)
    .then(function (data) {
      resolve(data)
    })
    .catch(function (error) {
      reject(error)
    })
  })
}

/* istanbul ignore next */
function saveVMwareToken (data) {
  fs.writeFile(VMwareTokenPath, data, function (err) {
    if (err) {
      throw err
    }
  })
}
