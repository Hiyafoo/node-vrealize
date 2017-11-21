[![CircleCI](https://circleci.com/gh/Hiyafoo/node-vrealize.svg?style=shield)](https://circleci.com/gh/Hiyafoo/node-vrealize) ![Local Coverage-shield-badge-1](https://img.shields.io/badge/Local%20Coverage-97.52%25-brightgreen.svg)

# Node vRealize

A node.js client library to communicate with the vRealize REST API.

## Installation

```bash
npm install node-vrealize
```

## Available methods

Please note that all the methods of the node-vRealize module return Promises.

## vRO

### Categories (new NodeVRealize().vro.categories)

* method **exportOne**(*categoryObj*, *password*) where **categoryObj** is of the following type if importing a root category:
  ```JavaScript
  {
    name: 'name',
    description: 'desc',
    type: 'type'
  }
  ```
  or is of the following type if importing a child category:
  ```JavaScript
  {
    parentId: 'parentId',
    name: 'name',
    description: 'desc',
    type: 'type'
  }
  ```
* method **importOne**()
* method **getCategoryIdFromAbsolutePath**(*categoryAbsolutePath*, *categoryType=[WorkflowCategory | ConfigurationElementCategory | ResourceElementCategory | ScriptModuleCategory]*, *password*)
* method **getFromCategoryType**(*categoryType=[WorkflowCategory | ConfigurationElementCategory | ResourceElementCategory | ScriptModuleCategory]*, *isRoot*, *password*)
* method **getOne**(*categoryId*, *password*)
* method **getLeafCategoryId**(*currentCategoryId*, *categoryPath*, *password*)
* method **deleteOne**(*categoryAbsolutePath*, *categoryType=[WorkflowCategory | ConfigurationElementCategory | ResourceElementCategory | ScriptModuleCategory]*, *password*)

### Actions (new NodeVRealize().vro.actions)

* method **importOne**(*actionId*, *password*)
* method **exportToModuleName**(*moduleName*, *actionPath*, *password*)
* method **importFromModuleName**(*moduleName*, *password*) where **moduleName** is the fully qualified name of a module or the starting matching string  of a module name
  (i.e. "io.test/network" or "io.test")

### Workflows (new NodeVRealize().vro.workflows)

* method **importOne**(*workflowId*, *password*)
* method **exportOne**(*categoryId*, *workflowPath*, *password*)

### Configurations (new NodeVRealize().vro.configurations)

* method **importOne**(*configurationId*, *password*)
* method **exportOne**(*categoryId*, *configurationPath*, *password*)

## vRA

### Identity (new NodeVRealize().vra.identity)

* method **getToken**(*tokenId*)
* method **isTokenAuthorized**()

### Catalog (new NodeVRealize().vra.catalog)

* method **getAllCatalogItems**()
* method **getCatalogItemByName**(*name*)
* method **getRequestsByCatalogItemName**(*catalogItemName*, *limit=1000*, *filterMethod*)
* method **submitRequest**(*deploymentOptions*) where ***options*** is a JSON object:
  * **blueprintName**: the name of the blueprint
  * **templateData**
* method **sendRequestViaUrl**(*url*, *data*)
* method **getRequest**(*options*) where ***options*** is a JSON object:
  * **id**: the id of the request
  * **raw**: *true*|*false*

    if *true*, returns a single string **IN_PROGRESS**|**PENDING_PRE_APPROVAL**|**SUBMITTED**|**SUCCESS**|**FAILED**

    if *false*, returns the verbose vRa JSON object
    (**THIS IS THE DEFAULT**)
* method **getRequests**()
* method **getCatalogItemTemplate**(*url*)
* method **getResources**(*limit=1000*)
* method **getResourceByName**(*resourceName*)
* method **getResourceById**(*resourceId*)
* method **getResourceActions**(*resourceName*)
* method **getResourceActionTemplate**(*resourceId*, *resourceActionId*)
* method **getResourceActionRequests**(*actionOptions*) where ***actionOptions*** is a JSON object:
  * **resourceName**
  * **actionName**
* method **submitResourceAction**(*actionOptions*) where ***actionOptions*** is a JSON object:
  * **resourceName**
  * **actionName**

### Content (new NodeVRealize().vra.content)

* method **getFromTenant**(*tenantId* [, *limit=1000*])
* method **exportPackage**(*contentZipPath*, *resolutionMode=[SKIP | OVERWRITE]*)
* method **createPackage**(*packageName*, *tenantId*, *contents*)
* method **getPackageById**(*packageId*)
* method **deletePackage**(*packageId*)
### Approval (new NodeVRealize().vra.approval)

* method **getAllApprovalPolicies**()
* method **getApprovalPolicyById**(*apprvalPolicyId*)
* method **createApprovalPolicy**(*approvalPolicyJson*)
* method **updateApprovalPolicy**(*apprvalPolicyId*, *approvalPolicyJson*)

## Usage

### Retrieve a token and use it for later purposes

```JavaScript
var NodevRealize = require( 'node-vrealize')
var https = require( 'https')

var nodeVRealize = new NodevRealize()

// Adjust the configuration variables to your own environment
nodeVRealize.config.hostname = 'localhost'
nodeVRealize.config.tenant = 'commerce'
nodeVRealize.config.username: 'username',
nodeVRealize.config.password: 'password',
nodeVRealize.config.tenant: 'tenant',
nodeVRealize.config.token: null,
nodeVRealize.config.agent = new https.Agent({
  host: 'localhost',
  port: '4443',
  path: '/',
  rejectUnauthorized: false
})

nodeVRealize.identity.getTokenId()
.then(method (token) {
  // Handle the retrieved token
})
.catch(method (error) {
  // Handle the Error
})

// the vRA instance will use the token previously set in the config
nodeVRealize.vra.catalog.getRequestsByCatalogItemName('CentOS VM')
.then(method (response) {
  // Do something
})
.catch(method (error) {
  // Handle error
})
```

## LICENSE

MIT License

Copyright (c) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
