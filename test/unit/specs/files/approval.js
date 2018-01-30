var policyTypes = {
  'links': [],
  'content': [
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Virtual',
      'name': 'Service Catalog - Catalog Item Request - Virtual Machine',
      'description': 'Infrastructure Virtual Machine',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Virtual',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;445f12b7-d7f7-48c2-95a0-a64536fb1307',
      'name': 'Service Catalog - Resource Action Request - Cancel Reconfigure - Machine',
      'description': 'Cancel reconfigure on a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.CancelReconfigure',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;40374ca1-a3e7-4605-b633-d19c6c0a0600',
      'name': 'Service Catalog - Resource Action Request - Delete Snapshot - Virtual Machine',
      'description': 'Delete a snapshot of this machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Virtual.Action.DeleteSnapshot',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;49aeba83-e86b-484d-be47-c35e470762a1',
      'name': 'Service Catalog - Resource Action Request - Reconfigure - Load Balancer',
      'description': 'Reconfigure a load balancer.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Network.LoadBalancer.NSX.Action.Reconfigure',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;299c3fb8-1042-421e-8c0a-264fec49dd9d',
      'name': 'Service Catalog - Resource Action Request - Reprovision - Machine',
      'description': 'Reprovision a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Reprovision',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;5f982919-f22a-4647-b73f-68dc4168f472',
      'name': 'Service Catalog - Resource Action Request - Suspend - Machine',
      'description': 'Suspend a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Suspend',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;774112d4-8c3d-40cf-b885-262050d6fe8d',
      'name': 'Service Catalog - Resource Action Request - Destroy Volume - Container Volume',
      'description': 'Destroy Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Volume.Remove',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;9c2dbb97-2c22-4606-8e91-583a3f191f4c',
      'name': 'Service Catalog - Resource Action Request - Destroy - Container',
      'description': 'Destroy Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'REMOVE_RESOURCE',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;23085a9f-4a38-4539-ad22-71ae6e56af1b',
      'name': 'Service Catalog - Resource Action Request - Stop - Container',
      'description': 'Stop Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Container.Stop',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem',
      'name': 'Service Catalog - Catalog Item Request',
      'description': '',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': null,
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction',
      'name': 'Service Catalog - Resource Action Request',
      'description': '',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': null,
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;com.vmware.csp.component.software.service.software',
      'name': 'Service Catalog - Catalog Item Request - Software Component',
      'description': 'Type for catalog items representing Software Components.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'com.vmware.csp.component.software.service.software',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;1dc04bfe-1588-422e-9aff-20c4526e7051',
      'name': 'Service Catalog - Resource Action Request - Reboot - Machine',
      'description': 'Reboot a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Reboot',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;928786a8-be9e-4ffc-94c4-0ab4ce0ae435',
      'name': 'Service Catalog - Resource Action Request - Destroy - Cloud Machine',
      'description': 'Destroy a cloud machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Cloud.Action.DestroyCloud',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;754809b1-1fb8-49c4-b5b0-d84bb6c5a4ab',
      'name': 'Service Catalog - Resource Action Request - Power On - Machine',
      'description': 'Power on a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.PowerOn',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;bfed9ae2-8a01-4d7e-bbd7-678cd80f987c',
      'name': 'Service Catalog - Resource Action Request - Destroy - Security Group',
      'description': 'Destroy Security Group Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Network.SecurityGroup.NSX.Action.Destroy',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Network.SecurityTag.NSX.Existing',
      'name': 'Service Catalog - Catalog Item Request - Existing Security Tag',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Network.SecurityTag.NSX.Existing',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Network.LoadBalancer.NSX.OnDemand',
      'name': 'Service Catalog - Catalog Item Request - On-Demand Load Balancer',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Network.LoadBalancer.NSX.OnDemand',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;c8979375-5b8e-435f-87a3-cf91533ac10e',
      'name': 'Service Catalog - Resource Action Request - Destroy - Existing Network',
      'description': 'Destroy Existing Network Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Network.Network.Existing.Action.Destroy',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;d2752b6f-6a41-40bd-a56e-c8dd288d1fa7',
      'name': 'Service Catalog - Resource Action Request - Change Security - Deployment',
      'description': 'Add or remove security objects for virtual machines in this deployment.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'composition.resource.type.deployment.Action.ChangeSecurity',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;5d7846f9-675b-48a9-9e1b-1c0bee325d87',
      'name': 'Service Catalog - Resource Action Request - Scale Out - Deployment',
      'description': 'Scales out any scalable component in a deployment.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'composition.resource.action.deployment.scaleout',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;105499ab-dbf6-4ead-8f78-2008300aafe4',
      'name': 'Service Catalog - Resource Action Request - Expire - Deployment',
      'description': 'Expires a deployment and all constituent resources.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'composition.resource.action.deployment.archive',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;cfe5ce72-e006-4c41-aaca-45a808676916',
      'name': 'Service Catalog - Resource Action Request - Manage Public IP Address - Azure Virtual Machine',
      'description': "Assigns an available Public IP Address to the VM's primary network interface card or dissociate an already assigned one.",
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': '_internal!::!6379a166-b84e-4ddf-b1e7-39e3a1ea8a62',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Cloud',
      'name': 'Service Catalog - Catalog Item Request - Cloud Machine',
      'description': 'Infrastructure Cloud Machine',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Cloud',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;ad11d3a8-2b47-4c47-a0c5-5b3c1d6f3a34',
      'name': 'Service Catalog - Resource Action Request - Create Snapshot - Virtual Machine',
      'description': 'Create a snapshot for this machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Virtual.Action.CreateSnapshot',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;60c7f081-fa71-46ca-8cd6-babdd97c7c7b',
      'name': 'Service Catalog - Resource Action Request - Revert To Snapshot - Virtual Machine',
      'description': 'Revert to a snapshot of this machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Virtual.Action.RevertSnapshot',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;327500a8-fc6a-4c4a-82f2-45953c1fa5d7',
      'name': 'Service Catalog - Resource Action Request - Power Off - Machine',
      'description': 'Power off a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.PowerOff',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;7c7bf287-d9e2-4fff-bd01-c3a1b6a0284b',
      'name': 'Service Catalog - Resource Action Request - Destroy - Virtual Machine',
      'description': 'Destroy a virtual machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Virtual.Action.Destroy',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;7994ef67-c08a-49e5-8e50-cd9050dbe055',
      'name': 'Service Catalog - Resource Action Request - Power Cycle - Machine',
      'description': 'Reset a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Reset',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;948141c0-ac5b-4051-93f0-8d9d027b5ca1',
      'name': 'Service Catalog - Resource Action Request - Destroy - Security Tag',
      'description': 'Destroy Security Tag Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Network.SecurityTag.NSX.Action.Destroy',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;f5bfbd2c-7683-4047-8a13-b21861d40390',
      'name': 'Service Catalog - Resource Action Request - Destroy - Network',
      'description': 'Destroy Network Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Network.Network.NSX.Action.Destroy',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;09e11811-856e-467c-9d36-41dbcb7548d3',
      'name': 'Service Catalog - Resource Action Request - Change Owner - Deployment',
      'description': 'Change owner of a deployment and all its component resources.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'composition.resource.action.deployment.changeowner',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;df2631bc-4aa3-41c0-9644-c9551b518fa8',
      'name': 'Service Catalog - Resource Action Request - Scale In - Deployment',
      'description': 'Scales in any scalable component in a deployment.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'composition.resource.action.deployment.scalein',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;App.Network',
      'name': 'Service Catalog - Catalog Item Request - Container Network',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'App.Network',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;624c347d-d5c3-4120-9ae7-d191bfc6e130',
      'name': 'Service Catalog - Resource Action Request - Unregister - Network',
      'description': 'Unregister Network Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Network.Network.NSX.Action.Unregister',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;fe7e55d2-08ca-43df-9cb1-09693be9f998',
      'name': 'Service Catalog - Resource Action Request - Unregister VDI - Virtual Machine',
      'description': 'Unregister virtual desktop infrastructure (VDI).',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Virtual.Action.UnregisterVdi',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Network.SecurityGroup.NSX.OnDemand',
      'name': 'Service Catalog - Catalog Item Request - On-Demand Security Group',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Network.SecurityGroup.NSX.OnDemand',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;29ac900a-bf96-4251-be73-735c32a53ce4',
      'name': 'Service Catalog - Resource Action Request - Execute Reconfigure - Machine',
      'description': 'Infrastructure execute reconfigure.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.ExecuteReconfigure',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;88efed08-fa06-4c50-998d-32783a18d882',
      'name': 'Service Catalog - Resource Action Request - Install Tools - Machine',
      'description': 'Install tools on a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.InstallTools',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Network.Network.NSX.OnDemand.NAT',
      'name': 'Service Catalog - Catalog Item Request - On-Demand NAT Network',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Network.Network.NSX.OnDemand.NAT',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Network.Network.Existing',
      'name': 'Service Catalog - Catalog Item Request - Existing Network',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Network.Network.Existing',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;d802b9af-1f39-4f7a-8b1a-53a0d0d5c8d6',
      'name': 'Service Catalog - Resource Action Request - Reconfigure - Machine',
      'description': 'Reconfigure a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Reconfigure',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;aad2c246-2419-45ae-8d0f-fd16776f652a',
      'name': 'Service Catalog - Resource Action Request - Change Lease - Machine',
      'description': 'Change the lease for a machine. Leave empty for indefinite.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.ChangeLease',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;dfda555e-1616-410a-8379-bbf2d7cf8eee',
      'name': 'Service Catalog - Resource Action Request - Shutdown - Machine',
      'description': 'Shutdown a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Shutdown',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;61c60b35-34f0-4551-93c8-57acc26c7dbb',
      'name': 'Service Catalog - Resource Action Request - Expire - Machine',
      'description': 'Expire a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Expire',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Network.Network.NSX.OnDemand.Routed',
      'name': 'Service Catalog - Catalog Item Request - On-Demand Routed Network',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Network.Network.NSX.OnDemand.Routed',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;748fb998-6ae7-4242-b238-fcce2d25e5ed',
      'name': 'Service Catalog - Resource Action Request - Register VDI - Virtual Machine',
      'description': 'Register virtual desktop infrastructure (VDI).',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Virtual.Action.RegisterVdi',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;882b5bb9-c91a-4b18-a95e-b231976c7391',
      'name': 'Service Catalog - Resource Action Request - Unregister - Machine',
      'description': 'Unregister a machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Machine.Action.Unregister',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;Infrastructure.Network.SecurityGroup.NSX.Existing',
      'name': 'Service Catalog - Catalog Item Request - Existing Security Group',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'Infrastructure.Network.SecurityGroup.NSX.Existing',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;44d00ed5-8d31-4a21-820c-13d39e4411a5',
      'name': 'Service Catalog - Resource Action Request - Change NAT Rules - Network',
      'description': 'Change NAT rules configured on this network.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Infrastructure.Network.Network.NSX.Action.ChangeNatRules',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;a7cfc835-d675-415f-a1f4-444bf9ed9549',
      'name': 'Service Catalog - Resource Action Request - Restart - Azure Virtual Machine',
      'description': 'Restarts the specified virtual machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': '_internal!::!6c4b3b0b-9685-4987-acf3-b393731361ba',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;5c091740-7679-469b-9fd6-50adb5d2cd93',
      'name': 'Service Catalog - Resource Action Request - Destroy - Deployment',
      'description': 'Destroys a deployment and all constituent resources.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'composition.resource.action.deployment.destroy',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;d1dd7f17-bd03-4658-a45f-31ca5b8b809e',
      'name': 'Service Catalog - Resource Action Request - Stop - Azure Virtual Machine',
      'description': 'Powers off the specified Azure virtual machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': '_internal!::!749dd1d9-bb53-40ba-b81f-21ebb89eac10',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;App.Container',
      'name': 'Service Catalog - Catalog Item Request - Container',
      'description': 'Container',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'App.Container',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;8e7e04c7-ccdd-498b-96a8-e8954f3d9ae7',
      'name': 'Service Catalog - Resource Action Request - Interact with IP List - Virtual Machine',
      'description': 'Used to modify or consult the Proxy IP lists.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!5b34f8aa-3316-434f-b36e-7c9ae8465a87',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;a113a8aa-b4f0-48e3-adf8-ad1fb57dc0b1',
      'name': 'Service Catalog - Resource Action Request - Start - Azure Virtual Machine',
      'description': 'Powers on the specified Azure virtual machine.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': '_internal!::!d45ff428-3a90-419f-8ab0-216360bd4a8e',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;65b42cf6-5805-47be-9e6e-c022e6abcfc7',
      'name': 'Service Catalog - Resource Action Request - Interact with Whitelist - Virtual Machine',
      'description': 'Used to modify or consult the Proxy Whitelists.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!6d335ccc-f6d1-4df2-9b17-015ead3e67ef',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;1f4a89cb-5f6b-41d2-895e-43a7735d4ee3',
      'name': 'Service Catalog - Resource Action Request - Add IP List to Whitelist - Virtual Machine',
      'description': 'Map IP list to a Whitelist',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!282d52b8-0e12-47c9-bd59-93918f7c3aa1',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;1a188d44-571b-45c3-b869-8e845ebce8e6',
      'name': 'Service Catalog - Resource Action Request - Get Network Path - NSXEdge',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!40531612-13c0-4d7b-bd90-550fbd64cb40',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;ad35c701-d452-4691-8c70-54055e76857b',
      'name': 'Service Catalog - Resource Action Request - Create HANA Schema - Virtual Machine',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!4f840773-ddce-49f0-bb9d-93df504859a1',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;com.vmware.csp.component.cafe.composition.blueprint',
      'name': 'Service Catalog - Catalog Item Request - Composite Blueprint',
      'description': 'Composite Blueprint',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'com.vmware.csp.component.cafe.composition.blueprint',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;5c13bfd4-5cb6-47d5-bb26-2f83c74d8e35',
      'name': 'Service Catalog - Resource Action Request - Destroy Networking Project - NSXEdge',
      'description': 'Resource action to use when you need to destroy all the components associated to Networking Project of a client',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!70732f38-78c0-471d-98d8-4de36b8e1a85',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;8f724c22-0ecb-44f3-bf88-6fba438e6c19',
      'name': 'Service Catalog - Resource Action Request - Change Lease - Deployment',
      'description': 'Change lease of a deployment and all its component resources.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'composition.resource.action.deployment.changelease',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request',
      'name': 'Service Catalog - Request',
      'description': '',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'request',
      'typeFilter': null,
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;com.vmware.csp.core.designer.service.serviceblueprint',
      'name': 'Service Catalog - Catalog Item Request - XaaS Blueprint',
      'description': 'XaaS Blueprint',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'com.vmware.csp.core.designer.service.serviceblueprint',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;47f9d720-13b7-4d6f-90dc-620d472656ab',
      'name': 'Service Catalog - Resource Action Request - Destroy - Container Network',
      'description': 'Destroy Container Network Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'App.Network.Action.Destroy',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;34d944a2-ea42-412e-80ba-172496698b3a',
      'name': 'Service Catalog - Resource Action Request - Add Site(s) to IPsec VPN - NSXEdge',
      'description': 'RA - Add Site(s) to IPsec VPN',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!d61e8ae6-1030-4dc0-b1ec-b5fefcf2963c',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;6f9344ed-f6a6-47cc-bf73-258f2c4152df',
      'name': 'Service Catalog - Resource Action Request - Configure IPsec - NSXEdge',
      'description': 'Initial configuration of IPsec\nRA - Configure IPsec',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!c694b12f-78c0-4847-8abe-d8872c5973ad',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;ConfigManagement.Puppet',
      'name': 'Service Catalog - Catalog Item Request - Puppet',
      'description': 'Puppet',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'ConfigManagement.Puppet',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;5f305c1f-3e04-4304-a37d-f14dd333bece',
      'name': 'Service Catalog - Resource Action Request - Reset IPsec Password - NSXEdge',
      'description': 'RA - Reset IPsec Password',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!6cb4172a-a01e-478b-8e70-7e2e4870bad8',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.catalogitem;App.Volume',
      'name': 'Service Catalog - Catalog Item Request - Container Volume',
      'description': 'Container Volume',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'catalogItemRequest',
      'typeFilter': 'App.Volume',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;8ec8e24c-e83d-4281-aa0f-51f387be0c2a',
      'name': 'Service Catalog - Resource Action Request - Run Puppet on a Deployment - Deployment',
      'description': 'Run puppet in all the Virtual Machines that they are part of a deployment',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!f4e8fc9c-37d7-4e30-94af-012cb26462a5',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;8d1036c7-c27c-4fe1-bf83-a1abd34f044a',
      'name': 'Service Catalog - Resource Action Request - RA - Go Live PE2 - NSXEdge',
      'description': null,
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!c38a5e12-9eb3-4060-8eb0-44135b08562f',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;b16fbcf7-3355-43d3-97ba-e003f33bc02e',
      'name': 'Service Catalog - Resource Action Request - Run Puppet on VM - Virtual Machine',
      'description': 'Run puppet on one only Virtual Machine other than a HDBC.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'ycommerce!::!6cbbd9d5-eebe-4b59-b794-08285f9ff5f9',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;27e2b292-7d4e-47c2-b7ed-79b8d77acd10',
      'name': 'Service Catalog - Resource Action Request - Delete - Azure Virtual Machine',
      'description': 'Deletes the specified Azure virtual machine together with all related resources where applicable.',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': '_internal!::!fa3e5313-1e82-4595-9715-b0a66b0337d5',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    },
    {
      '@type': 'ApprovalPolicyType',
      'id': 'com.vmware.cafe.catalog.request.resourceaction;106f5adf-7315-43c5-9c69-d1acd909da0b',
      'name': 'Service Catalog - Resource Action Request - Start - Container',
      'description': 'Start Action',
      'serviceTypeId': 'com.vmware.csp.core.cafe.catalog',
      'classId': 'resourceActionRequest',
      'typeFilter': 'Container.Start',
      'phaseTypes': [
        {
          'id': 'com.vmware.cafe.catalog.request.pre',
          'name': 'Pre Approval',
          'description': 'Approvals sought before a request is fulfilled.',
          'forms': null,
          'phaseOrder': 0,
          'allowUpdates': true
        },
        {
          'id': 'com.vmware.cafe.catalog.request.post',
          'name': 'Post Approval',
          'description': 'Approvals sought after a request has been fulfilled.',
          'forms': null,
          'phaseOrder': 1,
          'allowUpdates': false
        }
      ]
    }
  ],
  'metadata': {
    'size': 1000,
    'totalElements': 76,
    'totalPages': 1,
    'number': 1,
    'offset': 0
  }
}

module.exports = {
  all: policyTypes
}
