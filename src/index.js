// import configuration from './config'

import identity from './identity'
// import resources from './vra/resources'
import content from './vra/content'
import catalog from './vra/catalog'
import actions from './vro/actions'
import workflows from './vro/workflows'
import configurations from './vro/configurations'
import categories from './vro/categories'

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
    getRequests: catalog.getRequests.bind(this),
    getCatalogItemTemplate: catalog.getCatalogItemTemplate.bind(this)
  }
  // this.vra.resources = {
  //   getAllResources: resources.getAllResources,
  //   getResourceByName: resources.getResourceByName,
  //   getResourceById: resources.getResourceById,
  //   getResourceActions: resources.getResourceActions,
  //   submitResource: resources.submitResource,
  //   getResourceActionTemplate: resources.getResourceActionTemplate,
  //   getResourceActionRequests: resources.getResourceActionRequests
  // }
}

module.exports = NodeVRealize
