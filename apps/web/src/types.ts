export type InterfaceTx = {
  id: string;
  block: number;
  category: string;
  user: {
    name: string[];
    avatar: string;
    address: string;
    formattedAddress: string;
    fullDomain: string;
    followingTotal: number;
    followersTotal: number;
    createdAt: string;
    verifiedAt: string;
    holder: boolean;
    socialNames: {
      ens: string;
      twitter: string;
    };
  };
  likes: any[];
  comments: any[];
  date: string;
  toAddress: string;
  hash: string;
  chain: {
    id: number;
    url: string;
    name: string;
    image: string;
    explorer: string;
  };
  share: {
    url: string;
    title: string;
    image: string;
  };
  protocol: {
    name: string;
    image: string;
    url: string;
  };
  method: {
    name: string;
    suffix: string;
  };
  tokens: {
    address: string;
    chainId: number;
    image: string;
    name: string;
    symbol: string;
    amount: [string, number];
    amountUsd: [string, number];
    isPositive: boolean;
    decimals: number;
  }[];
  gallery: any[];
  copies: any[];
};

export type CustomMetadata = {
  ens?: string;
  ensVerifiedAt?: string;
};

export type DomainsReturnType = {
  domains: {
    name: string;
    registration: {
      expiryDate: string;
    } | null;
  }[];
};

export type ExperienceClaim = {
  user: string; // wallet address
  companyAddress: number;
  title: string;
  startDate: number; // unix timestamp
  endDate: number; // unix timestamp
  description: string;
  claimHash: string; // hash of content
  signature: string; // EIP-191 signature
};

export interface LinkedAccount {
  id: string | null;
  address?: string;
  type: string;
  verifiedAt: string;
  firstVerifiedAt: string;
  latestVerifiedAt: string;
  chainType?: string;
  chainId?: string;
  walletClientType?: string;
  connectorType?: string;
  fid?: number;
  ownerAddress?: string;
  displayName?: string;
  username?: string;
  bio?: string;
  pfp?: string;
}

export interface User {
  id: string;
  createdAt: string;
  isGuest: boolean;
  customMetadata?: {
    ens?: string;
    ensVerifiedAt?: string;
  };
  linkedAccounts: LinkedAccount[];
  wallet: LinkedAccount;
  farcaster?: LinkedAccount;
}

export interface UsersResponse {
  users: User[];
}
