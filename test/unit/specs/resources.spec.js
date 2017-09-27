/* global it beforeEach afterEach describe */
import request from 'request'
var expect = require('chai').expect
var sinon = require('sinon')
require('chai').should()
var NodeVRealize = require('../../../src/index')

var vRa = new NodeVRealize()

// var resources = require('../../../src/resources')

// var response200 = {statusCode: 200}
// var response404 = {statusCode: 404}

// var resourceBody = {
//   id: 1,
//   requestCompletion: true,
//   content:
//   [
    // {
    //   name: '1',
    //   status: 'status',
    //   id: 2,
    //   resourceTypeRef: {
    //     label: 1
    //   }
    // }
//   ]}

describe('Resources', function () {
  'use strict'
  let sandbox
  'use strict'
  let requestGetStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    requestGetStub = sandbox.stub(request, 'getAsync')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAll method', function () {
    it('promise should return error when getRequest fails', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getAll()
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getAll().catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body:
        {
          content: [
            {
              name: '1',
              status: 'status'
            }
          ]}
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getAll()
      .then(function (response) {
        expect(response.content.length).to.equal(stubbedResponse.body.content.length)
      })
    })
  })

  describe('getByName method', function () {
    it('promise should return error when getRequest fails', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getResourceByName()
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getResourceByName('name')
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body: getActionByNameResponse
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getResourceByName('name')
      .then(function (response) {
        expect(response).to.deep.equal(stubbedResponse.body.content[0])
      })
    })
  })

  describe('getById method', function () {
    it('promise should return error when getRequest fails', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getResourceById()
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getResourceById('id')
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body:
        {
          content: [
            {
              name: '1',
              status: 'status'
            }
          ]}
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getResourceById('id')
      .then(function (response) {
        expect(response).to.deep.equal(stubbedResponse.body.content[0])
      })
    })
  })

  describe('getResourceActions method', function () {
    it('promise should return error when resourceName cannot be found', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getResourceActions('name')
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getResourceActions('name')
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body: actionsForResourceResponse
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getResourceActions('name')
      .then(function (response) {
        expect(response).to.deep.equal(stubbedResponse.body.content)
      })
    })
  })

  describe('getResourceActionTemplate method', function () {
    it('promise should return error when resourceName cannot be found', function () {
      var errorMessage = 'error'
      requestGetStub.rejects(errorMessage)

      return vRa.getResourceActionTemplate('id', 'actionId')
      .catch(function (error) {
        expect(error.name).to.equal(errorMessage)
      })
    })

    it('promise should return error with contents of body when getRequest returns non-successful status code', function () {
      var response = {statusCode: 400, body: 'error'}
      requestGetStub.resolves(response)

      vRa.getResourceActionTemplate('id', 'actionId')
      .catch(function (error) {
        expect(error).to.equal(response.body)
      })
    })

    it('promise should return contents of body when getRequest returns 200 status code', function () {
      var stubbedResponse = {statusCode: 200,
        body: actionTemplate
      }
      requestGetStub.resolves(stubbedResponse)

      vRa.getResourceActionTemplate('id', 'actionId')
      .then(function (response) {
        expect(response).to.deep.equal(stubbedResponse.body)
      })
    })
  })
})

var getActionByNameResponse = {
  'links': [],
  'content': [
    {
      '@type': 'CatalogResource',
      'id': '5ba6b907-c254-4ddf-b23c-a1258d69a6d8',
      'iconId': '2595bbda-b2d4-45de-9a6f-f9b2700aa703',
      'resourceTypeRef': {
        'id': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d',
        'label': 'NSXEdge'
      },
      'name': 'sy2-dop402-do402-edge-001',
      'description': 'Client:dop402-do402|RangeIP:Range253',
      'status': 'ACTIVE',
      'catalogItem': {
        'id': '2595bbda-b2d4-45de-9a6f-f9b2700aa703',
        'label': 'Create Project Client Networking'
      },
      'requestId': 'dded27f4-0d3d-4cb9-9a7c-be4a580ee07a',
      'requestState': 'SUCCESSFUL',
      'providerBinding': {
        'bindingId': '24916c0e-7f71-4c13-b3ba-7444784ac934',
        'providerRef': {
          'id': 'c0ce7dd0-26fd-440e-a712-f059b555c85a',
          'label': 'XaaS'
        }
      },
      'owners': [
        {
          'tenantName': 'ycommerce',
          'ref': 'c5254635@ycs.io',
          'type': 'USER',
          'value': 'Nicolas Rose'
        }
      ],
      'organization': {
        'tenantRef': 'ycommerce',
        'tenantLabel': 'ycommerce',
        'subtenantRef': '4b1dfb8f-0805-44c6-92d7-587ed3f59ccf',
        'subtenantLabel': 'BG-YCM'
      },
      'dateCreated': '2017-09-21T20:16:05.033Z',
      'lastUpdated': '2017-09-21T20:16:08.924Z',
      'hasLease': false,
      'lease': null,
      'leaseForDisplay': null,
      'hasCosts': false,
      'costs': null,
      'costToDate': null,
      'totalCost': null,
      'expenseMonthToDate': null,
      'parentResourceRef': null,
      'hasChildren': false,
      'operations': null,
      'forms': {
        'catalogResourceInfoHidden': null,
        'details': {
          'type': 'external',
          'formId': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d_Resource.Details'
        }
      },
      'resourceData': {
        'entries': [
          {
            'key': 'vmHostName',
            'value': {
              'type': 'string',
              'value': 'NSX-edge-223-0'
            }
          },
          {
            'key': 'vmName',
            'value': {
              'type': 'string',
              'value': 'sy2-dop402-do402-edge-001-0'
            }
          },
          {
            'key': 'datacenterName',
            'value': {
              'type': 'string',
              'value': 'SY2-Sydney'
            }
          },
          {
            'key': 'vmId',
            'value': {
              'type': 'string',
              'value': 'vm-1812'
            }
          },
          {
            'key': 'vcUniqueId',
            'value': {
              'type': 'string',
              'value': '5002487b-bb90-8dbd-0c84-f90492ad65d5'
            }
          },
          {
            'key': 'objectTypeName',
            'value': {
              'type': 'string',
              'value': 'Edge'
            }
          },
          {
            'key': 'description',
            'value': {
              'type': 'string',
              'value': 'Client:dop402-do402|RangeIP:Range253'
            }
          },
          {
            'key': 'type',
            'value': {
              'type': 'string',
              'value': 'Edge'
            }
          },
          {
            'key': 'revision',
            'value': {
              'type': 'string',
              'value': '6'
            }
          },
          {
            'key': 'datacenterMoid',
            'value': {
              'type': 'string',
              'value': 'datacenter-2'
            }
          },
          {
            'key': 'apiVersion',
            'value': {
              'type': 'string',
              'value': '4.0'
            }
          },
          {
            'key': 'dunesId',
            'value': {
              'type': 'string',
              'value': '7c62660f-3918-4364-9905-6a9bdff6b66c/edge-223'
            }
          },
          {
            'key': 'edgeType',
            'value': {
              'type': 'string',
              'value': 'gatewayServices'
            }
          },
          {
            'key': 'name',
            'value': {
              'type': 'string',
              'value': 'sy2-dop402-do402-edge-001'
            }
          },
          {
            'key': 'nics',
            'value': {
              'type': 'string',
              'value': 'com.vmware.o11n.plugins.nsx.model.Nics@734616d5'
            }
          },
          {
            'key': 'tenantId',
            'value': {
              'type': 'string',
              'value': ''
            }
          },
          {
            'key': 'id',
            'value': {
              'type': 'string',
              'value': '7c62660f-3918-4364-9905-6a9bdff6b66c/edge-223'
            }
          },
          {
            'key': 'state',
            'value': {
              'type': 'string',
              'value': 'deployed'
            }
          },
          {
            'key': 'objectId',
            'value': {
              'type': 'string',
              'value': 'edge-223'
            }
          }
        ]
      },
      'destroyDate': null,
      'pendingRequests': []
    }
  ],
  'metadata': {
    'size': 1000,
    'totalElements': 1,
    'totalPages': 1,
    'number': 1,
    'offset': 0
  }
}

var actionsForResourceResponse = {
  'links': [],
  'content': [
    {
      '@type': 'ConsumerResourceOperation',
      'name': 'Destroy Networking Project',
      'description': 'Resource action to use when you need to destroy all the components associated to Networking Project of a client',
      'iconId': '5c13bfd4-5cb6-47d5-bb26-2f83c74d8e35',
      'type': 'ACTION',
      'id': '5c13bfd4-5cb6-47d5-bb26-2f83c74d8e35',
      'extensionId': null,
      'providerTypeId': 'com.vmware.csp.core.designer.service',
      'bindingId': 'ycommerce!::!70732f38-78c0-471d-98d8-4de36b8e1a85',
      'hasForm': true,
      'formScale': 'BIG'
    },
    {
      '@type': 'ConsumerResourceOperation',
      'name': 'Get Network Path',
      'description': '',
      'iconId': 'fd02692e-2cab-4d6b-bc91-933fea0e5841_icon',
      'type': 'ACTION',
      'id': '1a188d44-571b-45c3-b869-8e845ebce8e6',
      'extensionId': null,
      'providerTypeId': 'com.vmware.csp.core.designer.service',
      'bindingId': 'ycommerce!::!40531612-13c0-4d7b-bd90-550fbd64cb40',
      'hasForm': true,
      'formScale': 'BIG'
    }
  ]
}

var actionTemplate = {
  'type': 'com.vmware.vcac.catalog.domain.request.CatalogResourceRequest',
  'resourceId': '5ba6b907-c254-4ddf-b23c-a1258d69a6d8',
  'actionId': '5c13bfd4-5cb6-47d5-bb26-2f83c74d8e35',
  'description': null,
  'data': {}
}
