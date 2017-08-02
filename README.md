[![CircleCI](https://circleci.com/gh/Hiyafoo/node-vrealize.svg?style=shield)](https://circleci.com/gh/Hiyafoo/node-vrealize) ![Local Coverage-shield-badge-1](https://img.shields.io/badge/Local%20Coverage-100%25-brightgreen.svg)

# Node vRealize

A node.js client library to communicate with the vRealize REST API.

This project is in a very early phase.

## Installation

```bash
npm install node-vrealize
```

## Available methods

Please note that all the methods of the node-vRealize module return Promises.

## Actions

* function importAction(categoryName, actionPath, password)
* function importWorkflow(categoryId, workflowPath, password)

## Identity

* function getToken()
* function isTokenAuthorized()

## Requests

* function **getRequestsByName**(*catalogItemName*, *filterMehtod*)
* function **getAllCatalogItems**()
* function **submit**(*options*)
* function **getByName**(*name*)
* function **getTemplate**(*url*)
* function **sendRequest**(*url*, *data*)
* function **get**(*options*) with ***options***:
  * **raw**: *true*|*false*

    if *true*, returns a single string **IN_PROGRESS**|**PENDING_PRE_APPROVAL**|**SUBMITTED**|**SUCCESS**|**FAILED**
    
    if *false*, returns the verbose vRa JSON object
* function getAll()

## Usage

### Retrieve a token and use it for later purposes

```JavaScript
var NodevRealize = require( 'node-vrealize')
var https = require( 'https')

var vRa = new NodevRealize()

// Adjust the configuration variables to your own environment
vRa.config.hostname = 'localhost'
vRa.config.tenant = 'commerce'
vRa.config.username: 'username',
vRa.config.password: 'password',
vRa.config.tenant: 'tenant',
vRa.config.token: null,
vRa.config.agent = new https.Agent({
  host: 'localhost',
  port: '4443',
  path: '/',
  rejectUnauthorized: false
})

vRa.getToken()
.then(function (token) {
  // Handle the retrieved token
  vRa.config.token = token
})
.catch(function (error) {
  // Handle the Error
})

// the vRA instance will use the token previously set in the config
vRa.getRequestsByName('CentOS VM')
.then(function (response) {
  // Do something
})
.catch(function (error) {
  // Handle error
})
```

## LICENSE

MIT License

Copyright (c) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
