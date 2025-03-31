import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LinkState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const linkStateAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_admin', internalType: 'address', type: 'address' }],
    name: 'addCompany',
    outputs: [
      { name: '', internalType: 'contract LinkStateCompany', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'companies',
    outputs: [
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'company',
        internalType: 'contract LinkStateCompany',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'companyBeacon',
    outputs: [
      { name: '', internalType: 'contract UpgradeableBeacon', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCompanies',
    outputs: [
      {
        name: '',
        internalType: 'contract LinkStateCompany[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'companyId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCompanyById',
    outputs: [
      {
        name: '',
        internalType: 'struct LinkState.CompanyConfig',
        type: 'tuple',
        components: [
          { name: 'admin', internalType: 'address', type: 'address' },
          {
            name: 'company',
            internalType: 'contract LinkStateCompany',
            type: 'address',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_implementation', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'companyId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'company',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CompanyAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const linkStateAddress = {
  8453: '0x00F7591b9327945bc30964d8eB26967C270ca687',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const linkStateConfig = {
  address: linkStateAddress,
  abi: linkStateAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LinkStateCompany
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const linkStateCompanyAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'eas', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'ALUMNI_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'HR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isPayable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiAttest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiRevoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'revoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'AccessDenied' },
  { type: 'error', inputs: [], name: 'InsufficientValue' },
  { type: 'error', inputs: [], name: 'InvalidEAS' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidLength' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'NotPayable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LinkStateProfile
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const linkStateProfileAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'MIN_MESSAGE_PRICE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PROTOCOL_FEE_BPS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'accumulatedFees',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_uri', internalType: 'string', type: 'string' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'messageCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mintLimit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'profiles',
    outputs: [
      { name: 'cid', internalType: 'string', type: 'string' },
      { name: 'messagePrice', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toProfileId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newBaseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'profileId', internalType: 'uint256', type: 'uint256' },
      { name: 'newPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateMessagePrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'profileId', internalType: 'uint256', type: 'uint256' },
      { name: 'newCid', internalType: 'string', type: 'string' },
    ],
    name: 'updateProfile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FeesWithdrawn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'messageId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'toProfileId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'data', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'MessageSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'profileId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ProfileCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const linkStateProfileAddress = {
  8453: '0xF70bEC98A0bbcA32829C29a00C3dA129c8733778',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const linkStateProfileConfig = {
  address: linkStateProfileAddress,
  abi: linkStateProfileAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkState = /*#__PURE__*/ createUseReadContract({
  abi: linkStateAbi,
  address: linkStateAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"companies"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateCompanies = /*#__PURE__*/ createUseReadContract({
  abi: linkStateAbi,
  address: linkStateAddress,
  functionName: 'companies',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"companyBeacon"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateCompanyBeacon =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'companyBeacon',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"getCompanies"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateGetCompanies = /*#__PURE__*/ createUseReadContract(
  {
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'getCompanies',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"getCompanyById"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateGetCompanyById =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'getCompanyById',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateGetRoleAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'getRoleAdmin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateHasRole = /*#__PURE__*/ createUseReadContract({
  abi: linkStateAbi,
  address: linkStateAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadLinkStateSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteLinkState = /*#__PURE__*/ createUseWriteContract({
  abi: linkStateAbi,
  address: linkStateAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"addCompany"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteLinkStateAddCompany = /*#__PURE__*/ createUseWriteContract(
  { abi: linkStateAbi, address: linkStateAddress, functionName: 'addCompany' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteLinkStateGrantRole = /*#__PURE__*/ createUseWriteContract({
  abi: linkStateAbi,
  address: linkStateAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteLinkStateInitialize = /*#__PURE__*/ createUseWriteContract(
  { abi: linkStateAbi, address: linkStateAddress, functionName: 'initialize' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteLinkStateRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteLinkStateRevokeRole = /*#__PURE__*/ createUseWriteContract(
  { abi: linkStateAbi, address: linkStateAddress, functionName: 'revokeRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteLinkStateUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateLinkState = /*#__PURE__*/ createUseSimulateContract({
  abi: linkStateAbi,
  address: linkStateAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"addCompany"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateLinkStateAddCompany =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'addCompany',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateLinkStateGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateLinkStateInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateLinkStateRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateLinkStateRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateLinkStateUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateAbi,
    address: linkStateAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchLinkStateEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: linkStateAbi, address: linkStateAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateAbi}__ and `eventName` set to `"CompanyAdded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchLinkStateCompanyAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateAbi,
    address: linkStateAddress,
    eventName: 'CompanyAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchLinkStateInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateAbi,
    address: linkStateAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchLinkStateRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateAbi,
    address: linkStateAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchLinkStateRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateAbi,
    address: linkStateAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchLinkStateRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateAbi,
    address: linkStateAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchLinkStateUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateAbi,
    address: linkStateAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__
 */
export const useReadLinkStateCompany = /*#__PURE__*/ createUseReadContract({
  abi: linkStateCompanyAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"ALUMNI_ROLE"`
 */
export const useReadLinkStateCompanyAlumniRole =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'ALUMNI_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadLinkStateCompanyDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"HR_ROLE"`
 */
export const useReadLinkStateCompanyHrRole =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'HR_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadLinkStateCompanyGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadLinkStateCompanyHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"isPayable"`
 */
export const useReadLinkStateCompanyIsPayable =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'isPayable',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLinkStateCompanySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"version"`
 */
export const useReadLinkStateCompanyVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateCompanyAbi,
    functionName: 'version',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__
 */
export const useWriteLinkStateCompany = /*#__PURE__*/ createUseWriteContract({
  abi: linkStateCompanyAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"attest"`
 */
export const useWriteLinkStateCompanyAttest =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'attest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteLinkStateCompanyGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteLinkStateCompanyInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"multiAttest"`
 */
export const useWriteLinkStateCompanyMultiAttest =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'multiAttest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"multiRevoke"`
 */
export const useWriteLinkStateCompanyMultiRevoke =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'multiRevoke',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteLinkStateCompanyRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"revoke"`
 */
export const useWriteLinkStateCompanyRevoke =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'revoke',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteLinkStateCompanyRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateCompanyAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__
 */
export const useSimulateLinkStateCompany =
  /*#__PURE__*/ createUseSimulateContract({ abi: linkStateCompanyAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"attest"`
 */
export const useSimulateLinkStateCompanyAttest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'attest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateLinkStateCompanyGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateLinkStateCompanyInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"multiAttest"`
 */
export const useSimulateLinkStateCompanyMultiAttest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'multiAttest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"multiRevoke"`
 */
export const useSimulateLinkStateCompanyMultiRevoke =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'multiRevoke',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateLinkStateCompanyRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"revoke"`
 */
export const useSimulateLinkStateCompanyRevoke =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'revoke',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateLinkStateCompanyRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateCompanyAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateCompanyAbi}__
 */
export const useWatchLinkStateCompanyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: linkStateCompanyAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchLinkStateCompanyInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateCompanyAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchLinkStateCompanyRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateCompanyAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchLinkStateCompanyRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateCompanyAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateCompanyAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchLinkStateCompanyRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateCompanyAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfile = /*#__PURE__*/ createUseReadContract({
  abi: linkStateProfileAbi,
  address: linkStateProfileAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"MIN_MESSAGE_PRICE"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileMinMessagePrice =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'MIN_MESSAGE_PRICE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"PROTOCOL_FEE_BPS"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileProtocolFeeBps =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'PROTOCOL_FEE_BPS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"accumulatedFees"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileAccumulatedFees =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'accumulatedFees',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"baseURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileBaseUri =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'baseURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"messageCount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileMessageCount =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'messageCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"mintLimit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileMintLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'mintLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileName = /*#__PURE__*/ createUseReadContract({
  abi: linkStateProfileAbi,
  address: linkStateProfileAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileOwner = /*#__PURE__*/ createUseReadContract(
  {
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'owner',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"price"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfilePrice = /*#__PURE__*/ createUseReadContract(
  {
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'price',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"profiles"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileProfiles =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'profiles',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useReadLinkStateProfileTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfile = /*#__PURE__*/ createUseWriteContract({
  abi: linkStateProfileAbi,
  address: linkStateProfileAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"sendMessage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileSendMessage =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'sendMessage',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"updateMessagePrice"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileUpdateMessagePrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'updateMessagePrice',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"updateProfile"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileUpdateProfile =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"withdrawFees"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWriteLinkStateProfileWithdrawFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'withdrawFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"sendMessage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileSendMessage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'sendMessage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"updateMessagePrice"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileUpdateMessagePrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'updateMessagePrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"updateProfile"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileUpdateProfile =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'updateProfile',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link linkStateProfileAbi}__ and `functionName` set to `"withdrawFees"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useSimulateLinkStateProfileWithdrawFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    functionName: 'withdrawFees',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"FeesWithdrawn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileFeesWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'FeesWithdrawn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"MessageSent"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileMessageSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'MessageSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"ProfileCreated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileProfileCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'ProfileCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link linkStateProfileAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xF70bEC98A0bbcA32829C29a00C3dA129c8733778)
 */
export const useWatchLinkStateProfileTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: linkStateProfileAbi,
    address: linkStateProfileAddress,
    eventName: 'Transfer',
  })
