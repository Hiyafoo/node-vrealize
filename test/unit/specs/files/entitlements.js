var entitlements = {
  'links': [],
  'content': [
    {
      '@type': 'Entitlement',
      'description': '',
      'entitledCatalogItems': [
        {
          'approvalPolicyId': null,
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': 'bcaa7c6f-63f4-40ce-90de-301bdebef789',
            'label': 'Aquire IP - Client'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': null,
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': 'cf8eb4a2-929b-4920-9c13-3236a6020e56',
            'label': 'Azure Machine'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': '9a73bfa7-06c9-4239-a531-b18d81416b41',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': '7414051b-0414-460a-ac70-536d9642e318',
            'label': 'Create Customer FreeIPA objects'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': 'a1899f2f-7d94-418d-9455-9fb0a1e20202',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': 'ffc631ea-9d2d-4f82-be3b-14cc9b0f4ac5',
            'label': 'Create NFS Share'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': 'a6e2043b-db32-405b-ae33-b5ffb81fa7d9',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': '55b9ddad-feca-48cd-ab67-9daff122ae3d',
            'label': 'Create Project Client Networking'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': 'e923f789-7d61-405c-952b-b573fcdf2d31',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': '3c031d21-190c-4e83-99ee-920825e99ede',
            'label': 'CustomVM'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': '441cb3d0-27d6-43ce-8dc7-c283547b8567',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': 'c0b39617-e595-4528-b231-e79b30564a73',
            'label': 'Destroy  Customer FreeIPA objects'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': 'e923f789-7d61-405c-952b-b573fcdf2d31',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': '163bceb8-e9eb-41c0-b795-9c4b4deec114',
            'label': 'GenericVM'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': '8435e0cf-a3a1-42a8-8ad9-6e6c51a100bc',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': 'c7760cd9-310c-47a3-be70-d42ae08f6aa9',
            'label': 'Hana DB Single Instance'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': null,
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': 'c7e0119a-b4e0-4174-b7fb-a6f2c5498bdb',
            'label': 'List Customer NFS Shares'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': null,
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': '77f60a4c-1ed9-408e-86c4-0bbce1a47bf7',
            'label': 'Release IP - Client'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': null,
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': 'c6a569db-6a08-4e5a-84af-133958ba5045',
            'label': 'Remove NFS Share'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': null,
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': '389d4d5d-bdbd-4342-8644-5ae5094c26dc',
            'label': 'Run Puppet On VM'
          },
          'catalogItemRequestable': true
        },
        {
          'approvalPolicyId': 'a99013eb-4d7e-4437-a680-71a03db1051d',
          'hidden': false,
          'active': true,
          'catalogItemRef': {
            'id': '31163d0b-575c-484f-8e14-1cc0fa32c780',
            'label': 'Standard VM CMZ'
          },
          'catalogItemRequestable': true
        }
      ],
      'entitledResourceOperations': [
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '8f39d2ba-f203-4c32-9dc9-e6a03e737bc0',
            'label': 'Add IP List to Whitelist'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'ycommerce!::!282d52b8-0e12-47c9-bd59-93918f7c3aa1',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '9b0a3522-5640-462a-9934-8e61ab7439bc',
            'label': 'Add Site(s) to IPsec VPN'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d',
            'label': 'NSXEdge'
          },
          'externalId': 'ycommerce!::!d61e8ae6-1030-4dc0-b1ec-b5fefcf2963c',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '571a57fc-d641-49a5-87b6-692fab97ff7f',
            'label': 'Associate Floating IP'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.dialog.AssociateFloatingIP',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'de4772ba-605a-4a61-9557-e77f89129b49',
            'label': 'Cancel Reconfigure'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.CancelReconfigure',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'c8328a7a-8682-4ec3-99e0-5f426da6cff9',
            'label': 'Change Lease'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'composition.resource.action.deployment.changelease',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '6378ad01-acbf-4bc5-aaa4-e05375eaeba8',
            'label': 'Change Lease'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.ChangeLease',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '74de2156-72bf-46d6-a851-fecd7458a61a',
            'label': 'Change NAT Rules'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Network.Network.NSX',
            'label': 'Network'
          },
          'externalId': 'Infrastructure.Network.Network.NSX.Action.ChangeNatRules',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '9d17471f-1908-4a18-902b-1bb115030db8',
            'label': 'Change Owner'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'composition.resource.action.deployment.changeowner',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'b14b355f-2d16-4db6-8cb1-902d341df9d1',
            'label': 'Change Security'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'composition.resource.type.deployment.Action.ChangeSecurity',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': 'b750c75c-b0d2-4e5d-b4cc-cb170cbbf984',
          'resourceOperationRef': {
            'id': '3bd817e2-1b1c-45cf-9cd4-cb59aaa9623c',
            'label': 'Configure IPsec'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d',
            'label': 'NSXEdge'
          },
          'externalId': 'ycommerce!::!c694b12f-78c0-4847-8abe-d8872c5973ad',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '8dba6772-0d61-449d-85ee-3734767e0dc0',
            'label': 'Connect to Remote Console'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.window.ConnectViaVmrc',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'affd970a-728f-4be8-b7e6-4cf924b510e1',
            'label': 'Connect using Console Ticket'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.dialog.ConnectViaConsoleTicket',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '93bc3096-14f3-4c7d-a118-8fe52d3d425f',
            'label': 'Connect using ICA'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.noform.ConnectViaIca',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '5f2cceb9-e1c0-4fb7-a854-2153188ceae1',
            'label': 'Connect using RDP'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.noform.ConnectViaRdp',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '29d4c796-e768-4f2b-8270-590dc2c02de9',
            'label': 'Connect using SSH'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.window.ConnectViaSsh',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'f6315a8a-79b8-455d-9166-fa283e9847a5',
            'label': 'Connect using VMRC'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.nowindow.ConnectViaNativeVmrc',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '09a5224e-bc5d-4348-9706-24d71085dc7f',
            'label': 'Connect using Virtual Desktop'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.window.ConnectViaVdi',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'b4474b2f-abb8-4888-a975-4356642984f3',
            'label': 'Create HANA Schema'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'ycommerce!::!4f840773-ddce-49f0-bb9d-93df504859a1',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'eb70e973-ba4e-4c99-8bd4-4161af69593b',
            'label': 'Create Snapshot'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'Infrastructure.Virtual.Action.CreateSnapshot',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '558165c2-244a-489e-a8ab-0cea626280de',
            'label': 'Delete'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': '_internal!::!dda3cc3f-f2da-45f5-bc64-a292c1ace3ba',
            'label': 'Azure Virtual Machine'
          },
          'externalId': '_internal!::!fa3e5313-1e82-4595-9715-b0a66b0337d5',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'e46167c7-90a1-44de-9f93-e3cd5e565296',
            'label': 'Delete Snapshot'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'Infrastructure.Virtual.Action.DeleteSnapshot',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '4d719c4d-dd33-4f42-8b32-c57e46fa3c95',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Cloud',
            'label': 'Cloud Machine'
          },
          'externalId': 'Infrastructure.Cloud.Action.DestroyCloud',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'e2454d11-c33c-43a8-9192-49e6aa52367a',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'App.Network',
            'label': 'Container Network'
          },
          'externalId': 'App.Network.Action.Destroy',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '79c1a7c7-f545-4eb6-a0f2-d652103c441e',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'App.Container',
            'label': 'Container'
          },
          'externalId': 'REMOVE_RESOURCE',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'a8773001-8989-4894-838c-4ac9386fbe1b',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'composition.resource.action.deployment.destroy',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '237127c5-b5d2-4878-b1eb-b9862ae83715',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Network.Network.Existing',
            'label': 'Existing Network'
          },
          'externalId': 'Infrastructure.Network.Network.Existing.Action.Destroy',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '7983a389-0db5-46bc-9195-7d711ed41a92',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Network.Network.NSX',
            'label': 'Network'
          },
          'externalId': 'Infrastructure.Network.Network.NSX.Action.Destroy',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'e0eab33d-41a3-4ce0-8ada-50f9b412e3bf',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Network.SecurityGroup.NSX',
            'label': 'Security Group'
          },
          'externalId': 'Infrastructure.Network.SecurityGroup.NSX.Action.Destroy',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '1c95d4ba-7008-4edd-b888-1f53a2ea4ea9',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Network.SecurityTag.NSX',
            'label': 'Security Tag'
          },
          'externalId': 'Infrastructure.Network.SecurityTag.NSX.Action.Destroy',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': 'bac80d5b-cff4-41ba-af5b-20c55ab3ccdc',
          'resourceOperationRef': {
            'id': '47d596a1-3cfc-4b3a-8854-9513eabbaabe',
            'label': 'Destroy'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'Infrastructure.Virtual.Action.Destroy',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': '4ec03a5b-ebf9-4c7c-8c4c-e4b8e6f7cae9',
          'resourceOperationRef': {
            'id': '93496b1f-4306-43d5-a0cc-222350828930',
            'label': 'Destroy Networking Project'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d',
            'label': 'NSXEdge'
          },
          'externalId': 'ycommerce!::!70732f38-78c0-471d-98d8-4de36b8e1a85',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'f634b981-c126-4009-a7a5-8f79b2cd4cd2',
            'label': 'Destroy Volume'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'App.Volume',
            'label': 'Container Volume'
          },
          'externalId': 'Volume.Remove',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'b2c93d62-3d22-45f3-adca-b92c0a614603',
            'label': 'Disassociate Floating IP'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.dialog.DisassociateFloatingIP',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'a6c1a78d-7936-42eb-b3b4-d787761bb613',
            'label': 'Execute Reconfigure'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.ExecuteReconfigure',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '153404d3-efab-411f-9605-f83e87104c05',
            'label': 'Expire'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'composition.resource.action.deployment.archive',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '81a808cb-838d-4f8b-b9a1-3323748e7289',
            'label': 'Expire'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Expire',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '68408015-8256-4dce-b2be-a30b1c6b166a',
            'label': 'Export Certificate'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.noform.ExportCertificate',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '32ecd0bf-1761-428c-9b80-de69f8a23637',
            'label': 'Get Expiration Reminder'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'csp.places.iaas.item.noform.GetExpirationReminder',
          'resourceOperationType': 'EXTENSION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '230166eb-32e4-4fe1-8c3f-8f026cc0b191',
            'label': 'Get Network Path'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d',
            'label': 'NSXEdge'
          },
          'externalId': 'ycommerce!::!40531612-13c0-4d7b-bd90-550fbd64cb40',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '5c6db399-ce78-4005-adac-a858093e3ad1',
            'label': 'Install Tools'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.InstallTools',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'bf2be813-f4fd-44a1-be1a-acf09ffdc2e7',
            'label': 'Interact with IP List'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'ycommerce!::!5b34f8aa-3316-434f-b36e-7c9ae8465a87',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'eb58d613-a1b6-479d-bb06-603d27a66752',
            'label': 'Interact with Whitelist'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'ycommerce!::!6d335ccc-f6d1-4df2-9b17-015ead3e67ef',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'ecda4d73-e5fb-4461-8e85-e4bf83d57408',
            'label': 'Manage Public IP Address'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': '_internal!::!dda3cc3f-f2da-45f5-bc64-a292c1ace3ba',
            'label': 'Azure Virtual Machine'
          },
          'externalId': '_internal!::!6379a166-b84e-4ddf-b1e7-39e3a1ea8a62',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'decf049b-d467-49f1-9547-33bd20458406',
            'label': 'Power Cycle'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Reset',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '7a523987-4c0c-4ba4-b6df-fb8aed8695a1',
            'label': 'Power Off'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.PowerOff',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'f6d8fb81-3f35-4969-91bc-d970dab007e1',
            'label': 'Power On'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.PowerOn',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '39e8c264-9d05-4744-8b08-0b43fb74507f',
            'label': 'RA - Go Live PE2'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d',
            'label': 'NSXEdge'
          },
          'externalId': 'ycommerce!::!c38a5e12-9eb3-4060-8eb0-44135b08562f',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '3c347922-e0ab-45be-8891-f26ca49afa64',
            'label': 'RA2 - Run Puppet on Deployment'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'ycommerce!::!d2d2c0c1-1907-45bf-aacd-8b2d7bc29e2c',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'd0c7beaf-4955-44ea-ad90-f814c377d861',
            'label': 'Reboot'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Reboot',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '608015d1-e628-43e7-9820-9be1959eaa27',
            'label': 'Reconfigure'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Network.LoadBalancer.NSX',
            'label': 'Load Balancer'
          },
          'externalId': 'Infrastructure.Network.LoadBalancer.NSX.Action.Reconfigure',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '8c1674da-7558-4de7-982e-e1e651834949',
            'label': 'Reconfigure'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Reconfigure',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '2fe02bdd-4a03-46d4-846c-343b4bb39eb9',
            'label': 'Register VDI'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'Infrastructure.Virtual.Action.RegisterVdi',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '3e7003f8-65bd-4339-9cda-d9a13334f92d',
            'label': 'Reprovision'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Reprovision',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': 'a68d80f4-f314-46c8-9352-09f578f8617c',
          'resourceOperationRef': {
            'id': '1cf616b5-259d-490d-a8f0-9bbcd4104861',
            'label': 'Reset IPsec Password'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'ycommerce!::!54924efa-3870-4438-9aa4-2e7f34c7ca6d',
            'label': 'NSXEdge'
          },
          'externalId': 'ycommerce!::!6cb4172a-a01e-478b-8e70-7e2e4870bad8',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'f4ed9d1e-7bc2-4feb-bc39-1921f0f81605',
            'label': 'Restart'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': '_internal!::!dda3cc3f-f2da-45f5-bc64-a292c1ace3ba',
            'label': 'Azure Virtual Machine'
          },
          'externalId': '_internal!::!6c4b3b0b-9685-4987-acf3-b393731361ba',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '5fb7d721-4e07-40b4-9063-60e6b4584a6d',
            'label': 'Revert To Snapshot'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'Infrastructure.Virtual.Action.RevertSnapshot',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '6d014072-58a7-472e-98bb-47294be46a84',
            'label': 'Run Puppet on Virtual Machine'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'ycommerce!::!6cbbd9d5-eebe-4b59-b794-08285f9ff5f9',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'cafdcfee-6851-47d4-bad7-dea497ee58cb',
            'label': 'Scale In'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'composition.resource.action.deployment.scalein',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'b182e3bf-7940-424b-a95d-ae1ce1c991d9',
            'label': 'Scale Out'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'composition.resource.type.deployment',
            'label': 'Deployment'
          },
          'externalId': 'composition.resource.action.deployment.scaleout',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '9a05ec85-7e4f-4dd9-99df-70cd790622ad',
            'label': 'Shutdown'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Shutdown',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '91876879-9720-4108-8e9d-54c8a21803a5',
            'label': 'Start'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': '_internal!::!dda3cc3f-f2da-45f5-bc64-a292c1ace3ba',
            'label': 'Azure Virtual Machine'
          },
          'externalId': '_internal!::!d45ff428-3a90-419f-8ab0-216360bd4a8e',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'b88c60ef-f317-4f1a-b018-1bd1a38b6354',
            'label': 'Start'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'App.Container',
            'label': 'Container'
          },
          'externalId': 'Container.Start',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'eb85aeb1-8517-48d6-8395-931a8d9b0c52',
            'label': 'Stop'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': '_internal!::!dda3cc3f-f2da-45f5-bc64-a292c1ace3ba',
            'label': 'Azure Virtual Machine'
          },
          'externalId': '_internal!::!749dd1d9-bb53-40ba-b81f-21ebb89eac10',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'bbe23ef1-83a6-4f8c-829d-cba3c45e8e3f',
            'label': 'Stop'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'App.Container',
            'label': 'Container'
          },
          'externalId': 'Container.Stop',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'e7992c04-56bc-4f5c-a2dd-3ace82c5ff25',
            'label': 'Suspend'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Suspend',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '5f524711-2b27-4acf-90ed-f43fe900dd17',
            'label': 'Unregister'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Machine',
            'label': 'Machine'
          },
          'externalId': 'Infrastructure.Machine.Action.Unregister',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': 'f3546093-6aad-4cb0-9c7a-2b3ae1b6879f',
            'label': 'Unregister'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Network.Network.NSX',
            'label': 'Network'
          },
          'externalId': 'Infrastructure.Network.Network.NSX.Action.Unregister',
          'resourceOperationType': 'ACTION'
        },
        {
          'approvalPolicyId': null,
          'resourceOperationRef': {
            'id': '7ed76fe2-4082-44fd-9f17-e34c0fb318bb',
            'label': 'Unregister VDI'
          },
          'active': true,
          'targetResourceTypeRef': {
            'id': 'Infrastructure.Virtual',
            'label': 'Virtual Machine'
          },
          'externalId': 'Infrastructure.Virtual.Action.UnregisterVdi',
          'resourceOperationType': 'ACTION'
        }
      ],
      'entitledServices': [
        {
          'approvalPolicyId': null,
          'active': true,
          'serviceRef': {
            'id': 'd7b4288c-7590-453b-a682-bbf776f12606',
            'label': 'Customer Environments'
          }
        },
        {
          'approvalPolicyId': null,
          'active': true,
          'serviceRef': {
            'id': '553eeb22-0b55-46e5-9353-773d2c793ebb',
            'label': 'Management Zone'
          }
        },
        {
          'approvalPolicyId': null,
          'active': true,
          'serviceRef': {
            'id': 'e9211c2e-d12f-41eb-8b9d-c15c63c7c967',
            'label': 'Operations'
          }
        },
        {
          'approvalPolicyId': null,
          'active': true,
          'serviceRef': {
            'id': '933c6be8-6a4e-4e0a-9622-4f973d15f302',
            'label': 'Testing Area'
          }
        }
      ],
      'expiryDate': null,
      'id': '1fea702c-d417-4996-ae03-f9eb13760ea7',
      'lastUpdatedBy': 'Samuel Robillard',
      'lastUpdatedDate': '2018-01-08T22:44:51.463Z',
      'name': 'ENTL-Standard',
      'organization': {
        'tenantRef': 'ycommerce',
        'tenantLabel': 'ycommerce',
        'subtenantRef': '301d2ceb-f4ba-4b89-a7c9-f6beff34cb1d',
        'subtenantLabel': 'BG-YCM'
      },
      'principals': [],
      'priorityOrder': 1,
      'status': 'ACTIVE',
      'statusName': 'Active',
      'localScopeForActions': true,
      'allUsers': true,
      'version': 1
    }
  ],
  'metadata': {
    'size': 20,
    'totalElements': 1,
    'totalPages': 1,
    'number': 1,
    'offset': 0
  }
}
module.exports = {
  all: entitlements
}
