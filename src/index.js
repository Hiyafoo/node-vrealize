// import configuration from './config'

import requests from './requests'
import identity from './identity'
import actions from './actions'
import workflows from './workflows'

function vRa () {
  this.config = {
    username: '',
    hostname: '',
    password: '',
    tenant: '',
    token: '',
    agent: ''
  }
}

// actions
vRa.prototype.importWorkflow = workflows.importWorkflow
vRa.prototype.exportWorkflow = workflows.exportWorkflow

vRa.prototype.importAction = actions.importAction
vRa.prototype.getAllActions = actions.getAll
vRa.prototype.exportAction = actions.exportAction

// requests
vRa.prototype.getRequestsByName = requests.getRequestsByName
vRa.prototype.getAllCatalogItems = requests.getAllCatalogItems
vRa.prototype.submit = requests.submit
vRa.prototype.getByName = requests.getByName
vRa.prototype.updateTemplateData = requests.updateTemplateData
vRa.prototype.getTemplate = requests.getTemplate
vRa.prototype.sendRequest = requests.sendRequest
vRa.prototype.get = requests.get
vRa.prototype.getAll = requests.getAll
vRa.prototype.getObjectFromKey = requests.getObjectFromKey

// identity
vRa.prototype.isTokenAuthorized = identity.isTokenAuthorized
vRa.prototype.getToken = identity.getToken

module.exports = vRa
