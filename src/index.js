// import configuration from './config'

import identity from './identity'
import content from './vra/content'
import catalog from './vra/catalog'
import approval from './vra/approval'
import actions from './vro/actions'
import workflows from './vro/workflows'
import configurations from './vro/configurations'
import categories from './vro/categories'
import resources from './vro/resources'
import advancedDesigner from './vra/advancedDesigner'

function NodeVRealize () {
  this.config = {
    username: '',
    hostname: '',
    password: '',
    tenant: '',
    token: '',
    agent: ''
  }
  this.identity = {
    isTokenAuthorized: identity.isTokenAuthorized.bind(this),
    getTokenId: identity.getTokenId.bind(this)
  }
  this.vro = {}
  this.vra = {}
  this.vro.categories = {
    importOne: categories.importOne.bind(this),
    exportOne: categories.exportOne.bind(this),
    getFromCategoryType: categories.getFromCategoryType.bind(this),
    getCategoryIdFromAbsolutePath: categories.getCategoryIdFromAbsolutePath.bind(this),
    getOne: categories.getOne.bind(this),
    deleteOne: categories.deleteOne.bind(this),
    getLeafCategoryId: categories.getLeafCategoryId.bind(this)
  }
  this.vro.workflows = {
    importOne: workflows.importOne.bind(this),
    exportOne: workflows.exportOne.bind(this)
  }
  this.vro.actions = {
    importOne: actions.importOne.bind(this),
    exportToModuleName: actions.exportToModuleName.bind(this),
    importFromModuleName: actions.importFromModuleName.bind(this)
  }
  this.vro.configurations = {
    importOne: configurations.importOne.bind(this),
    exportOne: configurations.exportOne.bind(this)
  }
  this.vro.resources = {
    exportOne: resources.exportOne.bind(this)
  }
  this.vra.content = {
    getFromTenant: content.getFromTenant.bind(this),
    exportPackage: content.exportPackage.bind(this),
    createPackage: content.createPackage.bind(this),
    getPackageById: content.getPackageById.bind(this),
    deletePackage: content.deletePackage.bind(this)
  }
  this.vra.catalog = {
    getAllCatalogItems: catalog.getAllCatalogItems.bind(this),
    getCatalogItemByName: catalog.getCatalogItemByName.bind(this),
    getRequestsByCatalogItemName: catalog.getRequestsByCatalogItemName.bind(this),
    submitRequest: catalog.submitRequest.bind(this),
    sendRequestViaUrl: catalog.sendRequestViaUrl.bind(this),
    getRequest: catalog.getRequest.bind(this),
    getCatalogItemTemplate: catalog.getCatalogItemTemplate.bind(this),
    getResources: catalog.getResources.bind(this),
    getResourceByName: catalog.getResourceByName.bind(this),
    getResourceById: catalog.getResourceById.bind(this),
    getResourceActions: catalog.getResourceActions.bind(this),
    getResourceActionTemplate: catalog.getResourceActionTemplate.bind(this),
    getResourceActionRequests: catalog.getResourceActionRequests.bind(this),
    submitResourceAction: catalog.submitResourceAction.bind(this)
  }
  this.vra.approval = {
    getAllApprovalPolicies: approval.getAllApprovalPolicies.bind(this),
    getApprovalPolicyById: approval.getApprovalPolicyById.bind(this),
    createApprovalPolicy: approval.createApprovalPolicy.bind(this),
    updateApprovalPolicy: approval.updateApprovalPolicy.bind(this),
    getApprovalPolicyTypeByName: approval.getApprovalPolicyTypeByName.bind(this),
    deleteApprovalPolicy: approval.deleteApprovalPolicy.bind(this)
  }
  this.vra.advancedDesigner = {
    getAllSubscriptions: advancedDesigner.getAllSubscriptions.bind(this),
    getSubscriptionById: advancedDesigner.getSubscriptionById.bind(this),
    createSubscription: advancedDesigner.createSubscription.bind(this),
    deleteSubscription: advancedDesigner.deleteSubscription.bind(this)
  }
}

module.exports = NodeVRealize
