export type SupportedChainConfig<T> = {
  chain: T;
  sugraphURL: string;
};

export type Constants<
  SupportedChains extends { id: string | number | symbol },
> = {
  supportedChains: SupportedChainConfig<SupportedChains>[];
  subgraphURLs: Record<SupportedChains["id"], string>;
};

export interface TokenList {
  name: string;
  description: string;
  logoURI?: string;
  keywords?: any[];
  tokens: [Token, ...Token[]];
}

export interface Version {
  major: number;
  minor: number;
  patch: number;
}

export interface Token {
  address: `0x${string}`;
  name: string;
  symbol: string;
  logoURI: string;
  chainId: number;
  decimals: number;
  isNative?: boolean;
}
