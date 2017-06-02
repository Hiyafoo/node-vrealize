import fs from 'fs'
import extfs from 'extfs'
import logger from './logger'

module.exports = {
  doesVMWareTokenExist: doesVMWareTokenExist,
  saveVMwareToken: saveVMwareToken,
  getTokenFromFile: getTokenFromFile
}

var VMwareTokenPath = '/tmp/VMwareToken'

function doesVMWareTokenExist (cb) {
  fs.exists(VMwareTokenPath, function (exists) {
    if (!exists) {
      return cb(`The file at path ${VMwareTokenPath} does not exist`, false)
    }

    extfs.isEmpty(VMwareTokenPath, function (empty) {
      if (empty) {
        return cb(`The file at path ${VMwareTokenPath} is empty`, false)
      }
      cb(null, true)
    })
  })
}

/* istanbul ignore next */
function getTokenFromFile (callback) {
  fs.readFile(VMwareTokenPath, (err, data) => {
    if (err) {
      logger.error(err)
      return callback(err, null)
    }

    callback(null, data)
  })
}

/* istanbul ignore next */
function saveVMwareToken (data) {
  fs.writeFile(VMwareTokenPath, data, function (err) {
    if (err) {
      throw err
    }
    logger.info(`Token has been saved to ${VMwareTokenPath}`)
  })
}
