// import configuration from './config'

import requests from './requests'
import resources from './resources'
import identity from './identity'
import actions from './vco/actions'
import workflows from './vco/workflows'
import configurations from './vco/configurations'
import categories from './vco/categories'
import content from './vco/content'
import packages from './vco/packages'
import policies from './vco/policies'

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

// resources
vRa.prototype.getAllResources = resources.getAllResources
vRa.prototype.getResourceByName = resources.getResourceByName
vRa.prototype.getResourceById = resources.getResourceById
vRa.prototype.getResourceActions = resources.getResourceActions
vRa.prototype.submitResource = resources.submitResource
vRa.prototype.getResourceActionTemplate = resources.getResourceActionTemplate
vRa.prototype.getResourceActionRequests = resources.getResourceActionRequests

// identity
vRa.prototype.isTokenAuthorized = identity.isTokenAuthorized
vRa.prototype.getTokenId = identity.getTokenId

// content
vRa.prototype.getContent = content.getContent
vRa.prototype.exportContent = content.exportContent

// package
vRa.prototype.createPackage = packages.createPackage
vRa.prototype.getPackageIdByName = packages.getPackageIdByName
vRa.prototype.getPackage = packages.getPackage
vRa.prototype.deletePackage = packages.deletePackage

// policies
vRa.prototype.createApprovalPolicy = policies.createApprovalPolicy
vRa.prototype.getAllApprovalPolicies = policies.getAllApprovalPolicies
vRa.prototype.getApprovalPolicyBydId = policies.getApprovalPolicyBydId
vRa.prototype.updateApprovalPolicy = policies.updateApprovalPolicy

module.exports = vRa
