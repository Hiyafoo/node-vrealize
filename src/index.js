// import configuration from './config'

import requests from './requests'
import identity from './identity'
import actions from './vco/actions'
import workflows from './vco/workflows'
import configurations from './vco/configurations'
import categories from './vco/categories'

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

vRa.prototype.importCategory = categories.importCategory
vRa.prototype.exportCategory = categories.exportCategory
vRa.prototype.getCategories = categories.getCategories
vRa.prototype.getCategoryIdFromAbsolutePath = categories.getCategoryIdFromAbsolutePath
vRa.prototype.getCategory = categories.getCategory
vRa.prototype.deleteRootCategory = categories.deleteRootCategory
vRa.prototype.getLeafCategoryId = categories.getLeafCategoryId

vRa.prototype.importWorkflow = workflows.importWorkflow
vRa.prototype.exportWorkflow = workflows.exportWorkflow

vRa.prototype.importConfiguration = configurations.importConfiguration
vRa.prototype.exportConfiguration = configurations.exportConfiguration

vRa.prototype.importAction = actions.importAction
vRa.prototype.importActions = actions.importActions
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
vRa.prototype.getTokenId = identity.getTokenId

module.exports = vRa
