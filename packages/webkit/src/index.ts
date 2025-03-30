import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Deposit = {
  __typename?: 'Deposit';
  amount: Scalars['BigInt']['output'];
  chainId: Scalars['Int']['output'];
  claimed: Scalars['Boolean']['output'];
  claimedAt?: Maybe<Scalars['BigInt']['output']>;
  contractType: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  recipient?: Maybe<Scalars['Bytes']['output']>;
  reclaimableAfter?: Maybe<Scalars['BigInt']['output']>;
  requiresMFA: Scalars['Boolean']['output'];
  senderAddress: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  tokenAddress: Scalars['Bytes']['output'];
  tokenDecimals?: Maybe<Scalars['Int']['output']>;
  tokenId: Scalars['BigInt']['output'];
  tokenName?: Maybe<Scalars['String']['output']>;
  tokenSymbol?: Maybe<Scalars['String']['output']>;
  tokenTotals: DepositTotals;
};

export type DepositEvent = {
  __typename?: 'DepositEvent';
  _amount: Scalars['BigInt']['output'];
  _contractType: Scalars['Int']['output'];
  _index: Scalars['BigInt']['output'];
  _senderAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DepositEvent_Filter = {
  _amount?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _contractType?: InputMaybe<Scalars['Int']['input']>;
  _contractType_gt?: InputMaybe<Scalars['Int']['input']>;
  _contractType_gte?: InputMaybe<Scalars['Int']['input']>;
  _contractType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _contractType_lt?: InputMaybe<Scalars['Int']['input']>;
  _contractType_lte?: InputMaybe<Scalars['Int']['input']>;
  _contractType_not?: InputMaybe<Scalars['Int']['input']>;
  _contractType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _index?: InputMaybe<Scalars['BigInt']['input']>;
  _index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _index_not?: InputMaybe<Scalars['BigInt']['input']>;
  _index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _senderAddress?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  _senderAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  _senderAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<DepositEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DepositEvent_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DepositEvent_OrderBy {
  Amount = '_amount',
  ContractType = '_contractType',
  Index = '_index',
  SenderAddress = '_senderAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type DepositTotals = {
  __typename?: 'DepositTotals';
  chainId: Scalars['Int']['output'];
  decimals?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  tokenAddress: Scalars['Bytes']['output'];
  totalClaimed: Scalars['BigInt']['output'];
  totalDeposists: Scalars['BigInt']['output'];
  totalDeposited: Scalars['BigInt']['output'];
};

export type DepositTotals_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositTotals_Filter>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<DepositTotals_Filter>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  totalClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposists?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposists_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposists_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposists_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposists_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposists_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposists_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposists_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposited?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposited_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposited_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposited_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDeposited_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposited_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposited_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DepositTotals_OrderBy {
  ChainId = 'chainId',
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  TokenAddress = 'tokenAddress',
  TotalClaimed = 'totalClaimed',
  TotalDeposists = 'totalDeposists',
  TotalDeposited = 'totalDeposited'
}

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainId_gt?: InputMaybe<Scalars['Int']['input']>;
  chainId_gte?: InputMaybe<Scalars['Int']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chainId_lt?: InputMaybe<Scalars['Int']['input']>;
  chainId_lte?: InputMaybe<Scalars['Int']['input']>;
  chainId_not?: InputMaybe<Scalars['Int']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  claimed?: InputMaybe<Scalars['Boolean']['input']>;
  claimedAt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimed_not?: InputMaybe<Scalars['Boolean']['input']>;
  claimed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contractType?: InputMaybe<Scalars['Int']['input']>;
  contractType_gt?: InputMaybe<Scalars['Int']['input']>;
  contractType_gte?: InputMaybe<Scalars['Int']['input']>;
  contractType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contractType_lt?: InputMaybe<Scalars['Int']['input']>;
  contractType_lte?: InputMaybe<Scalars['Int']['input']>;
  contractType_not?: InputMaybe<Scalars['Int']['input']>;
  contractType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reclaimableAfter?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimableAfter_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimableAfter_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimableAfter_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reclaimableAfter_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimableAfter_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimableAfter_not?: InputMaybe<Scalars['BigInt']['input']>;
  reclaimableAfter_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  requiresMFA?: InputMaybe<Scalars['Boolean']['input']>;
  requiresMFA_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  requiresMFA_not?: InputMaybe<Scalars['Boolean']['input']>;
  requiresMFA_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  senderAddress?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  senderAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  senderAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenName?: InputMaybe<Scalars['String']['input']>;
  tokenName_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenName_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenName_gt?: InputMaybe<Scalars['String']['input']>;
  tokenName_gte?: InputMaybe<Scalars['String']['input']>;
  tokenName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenName_lt?: InputMaybe<Scalars['String']['input']>;
  tokenName_lte?: InputMaybe<Scalars['String']['input']>;
  tokenName_not?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenName_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenTotals?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_?: InputMaybe<DepositTotals_Filter>;
  tokenTotals_contains?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_gt?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_gte?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenTotals_lt?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_lte?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_not?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenTotals_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenTotals_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Deposit_OrderBy {
  Amount = 'amount',
  ChainId = 'chainId',
  Claimed = 'claimed',
  ClaimedAt = 'claimedAt',
  ContractType = 'contractType',
  Id = 'id',
  Recipient = 'recipient',
  ReclaimableAfter = 'reclaimableAfter',
  RequiresMfa = 'requiresMFA',
  SenderAddress = 'senderAddress',
  Timestamp = 'timestamp',
  TokenAddress = 'tokenAddress',
  TokenDecimals = 'tokenDecimals',
  TokenId = 'tokenId',
  TokenName = 'tokenName',
  TokenSymbol = 'tokenSymbol',
  TokenTotals = 'tokenTotals',
  TokenTotalsChainId = 'tokenTotals__chainId',
  TokenTotalsDecimals = 'tokenTotals__decimals',
  TokenTotalsId = 'tokenTotals__id',
  TokenTotalsName = 'tokenTotals__name',
  TokenTotalsSymbol = 'tokenTotals__symbol',
  TokenTotalsTokenAddress = 'tokenTotals__tokenAddress',
  TokenTotalsTotalClaimed = 'tokenTotals__totalClaimed',
  TokenTotalsTotalDeposists = 'tokenTotals__totalDeposists',
  TokenTotalsTotalDeposited = 'tokenTotals__totalDeposited'
}

export type MessageEvent = {
  __typename?: 'MessageEvent';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  message: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MessageEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MessageEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_contains?: InputMaybe<Scalars['String']['input']>;
  message_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  message_ends_with?: InputMaybe<Scalars['String']['input']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  message_gt?: InputMaybe<Scalars['String']['input']>;
  message_gte?: InputMaybe<Scalars['String']['input']>;
  message_in?: InputMaybe<Array<Scalars['String']['input']>>;
  message_lt?: InputMaybe<Scalars['String']['input']>;
  message_lte?: InputMaybe<Scalars['String']['input']>;
  message_not?: InputMaybe<Scalars['String']['input']>;
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  message_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  message_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  message_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  message_starts_with?: InputMaybe<Scalars['String']['input']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MessageEvent_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum MessageEvent_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Message = 'message',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  deposit?: Maybe<Deposit>;
  depositEvent?: Maybe<DepositEvent>;
  depositEvents: Array<DepositEvent>;
  depositTotals?: Maybe<DepositTotals>;
  depositTotals_collection: Array<DepositTotals>;
  deposits: Array<Deposit>;
  messageEvent?: Maybe<MessageEvent>;
  messageEvents: Array<MessageEvent>;
  withdrawEvent?: Maybe<WithdrawEvent>;
  withdrawEvents: Array<WithdrawEvent>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositEvent_Filter>;
};


export type QueryDepositTotalsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositTotals_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositTotals_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositTotals_Filter>;
};


export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};


export type QueryMessageEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMessageEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MessageEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MessageEvent_Filter>;
};


export type QueryWithdrawEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWithdrawEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawEvent_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  deposit?: Maybe<Deposit>;
  depositEvent?: Maybe<DepositEvent>;
  depositEvents: Array<DepositEvent>;
  depositTotals?: Maybe<DepositTotals>;
  depositTotals_collection: Array<DepositTotals>;
  deposits: Array<Deposit>;
  messageEvent?: Maybe<MessageEvent>;
  messageEvents: Array<MessageEvent>;
  withdrawEvent?: Maybe<WithdrawEvent>;
  withdrawEvents: Array<WithdrawEvent>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDepositEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDepositEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositEvent_Filter>;
};


export type SubscriptionDepositTotalsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDepositTotals_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositTotals_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositTotals_Filter>;
};


export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};


export type SubscriptionMessageEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMessageEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MessageEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MessageEvent_Filter>;
};


export type SubscriptionWithdrawEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWithdrawEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawEvent_Filter>;
};

export type WithdrawEvent = {
  __typename?: 'WithdrawEvent';
  _amount: Scalars['BigInt']['output'];
  _contractType: Scalars['Int']['output'];
  _index: Scalars['BigInt']['output'];
  _recipientAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type WithdrawEvent_Filter = {
  _amount?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  _amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _contractType?: InputMaybe<Scalars['Int']['input']>;
  _contractType_gt?: InputMaybe<Scalars['Int']['input']>;
  _contractType_gte?: InputMaybe<Scalars['Int']['input']>;
  _contractType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _contractType_lt?: InputMaybe<Scalars['Int']['input']>;
  _contractType_lte?: InputMaybe<Scalars['Int']['input']>;
  _contractType_not?: InputMaybe<Scalars['Int']['input']>;
  _contractType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _index?: InputMaybe<Scalars['BigInt']['input']>;
  _index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _index_not?: InputMaybe<Scalars['BigInt']['input']>;
  _index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _recipientAddress?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  _recipientAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  _recipientAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<WithdrawEvent_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<WithdrawEvent_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum WithdrawEvent_OrderBy {
  Amount = '_amount',
  ContractType = '_contractType',
  Index = '_index',
  RecipientAddress = '_recipientAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type DepositTotalsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type DepositTotalsQuery = { __typename?: 'Query', depositTotals?: { __typename?: 'DepositTotals', id: string, tokenAddress: any, name?: string | null, symbol?: string | null, decimals?: number | null, totalDeposited: any, totalDeposists: any, totalClaimed: any, chainId: number } | null };

export type DepositTotals_CollectionQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositTotals_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositTotals_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type DepositTotals_CollectionQuery = { __typename?: 'Query', depositTotals_collection: Array<{ __typename?: 'DepositTotals', id: string, tokenAddress: any, name?: string | null, symbol?: string | null, decimals?: number | null, totalDeposited: any, totalDeposists: any, totalClaimed: any, chainId: number }> };

export type DepositQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type DepositQuery = { __typename?: 'Query', deposit?: { __typename?: 'Deposit', id: string, amount: any, tokenAddress: any, tokenSymbol?: string | null, tokenDecimals?: number | null, tokenName?: string | null, contractType: number, claimed: boolean, claimedAt?: any | null, requiresMFA: boolean, timestamp: any, tokenId: any, senderAddress: any, recipient?: any | null, reclaimableAfter?: any | null, chainId: number, tokenTotals: { __typename?: 'DepositTotals', id: string, tokenAddress: any, name?: string | null, symbol?: string | null, decimals?: number | null, totalDeposited: any, totalDeposists: any, totalClaimed: any, chainId: number } } | null };

export type DepositsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type DepositsQuery = { __typename?: 'Query', deposits: Array<{ __typename?: 'Deposit', id: string, amount: any, tokenAddress: any, tokenSymbol?: string | null, tokenDecimals?: number | null, tokenName?: string | null, contractType: number, claimed: boolean, claimedAt?: any | null, requiresMFA: boolean, timestamp: any, tokenId: any, senderAddress: any, recipient?: any | null, reclaimableAfter?: any | null, chainId: number, tokenTotals: { __typename?: 'DepositTotals', id: string, tokenAddress: any, name?: string | null, symbol?: string | null, decimals?: number | null, totalDeposited: any, totalDeposists: any, totalClaimed: any, chainId: number } }> };

export type DepositEventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type DepositEventQuery = { __typename?: 'Query', depositEvent?: { __typename?: 'DepositEvent', id: any, _index: any, _contractType: number, _amount: any, _senderAddress: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type DepositEventsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type DepositEventsQuery = { __typename?: 'Query', depositEvents: Array<{ __typename?: 'DepositEvent', id: any, _index: any, _contractType: number, _amount: any, _senderAddress: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type MessageEventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type MessageEventQuery = { __typename?: 'Query', messageEvent?: { __typename?: 'MessageEvent', id: any, message: string, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type MessageEventsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MessageEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MessageEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type MessageEventsQuery = { __typename?: 'Query', messageEvents: Array<{ __typename?: 'MessageEvent', id: any, message: string, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type WithdrawEventQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type WithdrawEventQuery = { __typename?: 'Query', withdrawEvent?: { __typename?: 'WithdrawEvent', id: any, _index: any, _contractType: number, _amount: any, _recipientAddress: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type WithdrawEventsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WithdrawEvent_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError: _SubgraphErrorPolicy_;
}>;


export type WithdrawEventsQuery = { __typename?: 'Query', withdrawEvents: Array<{ __typename?: 'WithdrawEvent', id: any, _index: any, _contractType: number, _amount: any, _recipientAddress: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };


export const DepositTotalsDocument = gql`
    query depositTotals($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  depositTotals(id: $id, block: $block, subgraphError: $subgraphError) {
    id
    tokenAddress
    name
    symbol
    decimals
    totalDeposited
    totalDeposists
    totalClaimed
    chainId
  }
}
    `;
export const DepositTotals_CollectionDocument = gql`
    query depositTotals_collection($skip: Int, $first: Int, $orderBy: DepositTotals_orderBy, $orderDirection: OrderDirection, $where: DepositTotals_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  depositTotals_collection(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    tokenAddress
    name
    symbol
    decimals
    totalDeposited
    totalDeposists
    totalClaimed
    chainId
  }
}
    `;
export const DepositDocument = gql`
    query deposit($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  deposit(id: $id, block: $block, subgraphError: $subgraphError) {
    id
    amount
    tokenAddress
    tokenSymbol
    tokenDecimals
    tokenName
    tokenTotals {
      id
      tokenAddress
      name
      symbol
      decimals
      totalDeposited
      totalDeposists
      totalClaimed
      chainId
    }
    contractType
    claimed
    claimedAt
    requiresMFA
    timestamp
    tokenId
    senderAddress
    recipient
    reclaimableAfter
    chainId
  }
}
    `;
export const DepositsDocument = gql`
    query deposits($skip: Int, $first: Int, $orderBy: Deposit_orderBy, $orderDirection: OrderDirection, $where: Deposit_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  deposits(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    amount
    tokenAddress
    tokenSymbol
    tokenDecimals
    tokenName
    tokenTotals {
      id
      tokenAddress
      name
      symbol
      decimals
      totalDeposited
      totalDeposists
      totalClaimed
      chainId
    }
    contractType
    claimed
    claimedAt
    requiresMFA
    timestamp
    tokenId
    senderAddress
    recipient
    reclaimableAfter
    chainId
  }
}
    `;
export const DepositEventDocument = gql`
    query depositEvent($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  depositEvent(id: $id, block: $block, subgraphError: $subgraphError) {
    id
    _index
    _contractType
    _amount
    _senderAddress
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const DepositEventsDocument = gql`
    query depositEvents($skip: Int, $first: Int, $orderBy: DepositEvent_orderBy, $orderDirection: OrderDirection, $where: DepositEvent_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  depositEvents(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    _index
    _contractType
    _amount
    _senderAddress
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const MessageEventDocument = gql`
    query messageEvent($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  messageEvent(id: $id, block: $block, subgraphError: $subgraphError) {
    id
    message
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const MessageEventsDocument = gql`
    query messageEvents($skip: Int, $first: Int, $orderBy: MessageEvent_orderBy, $orderDirection: OrderDirection, $where: MessageEvent_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  messageEvents(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    message
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const WithdrawEventDocument = gql`
    query withdrawEvent($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  withdrawEvent(id: $id, block: $block, subgraphError: $subgraphError) {
    id
    _index
    _contractType
    _amount
    _recipientAddress
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const WithdrawEventsDocument = gql`
    query withdrawEvents($skip: Int, $first: Int, $orderBy: WithdrawEvent_orderBy, $orderDirection: OrderDirection, $where: WithdrawEvent_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_!) {
  withdrawEvents(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    _index
    _contractType
    _amount
    _recipientAddress
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    depositTotals(variables: DepositTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DepositTotalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DepositTotalsQuery>(DepositTotalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'depositTotals', 'query', variables);
    },
    depositTotals_collection(variables: DepositTotals_CollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DepositTotals_CollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DepositTotals_CollectionQuery>(DepositTotals_CollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'depositTotals_collection', 'query', variables);
    },
    deposit(variables: DepositQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DepositQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DepositQuery>(DepositDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deposit', 'query', variables);
    },
    deposits(variables: DepositsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DepositsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DepositsQuery>(DepositsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deposits', 'query', variables);
    },
    depositEvent(variables: DepositEventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DepositEventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DepositEventQuery>(DepositEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'depositEvent', 'query', variables);
    },
    depositEvents(variables: DepositEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DepositEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DepositEventsQuery>(DepositEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'depositEvents', 'query', variables);
    },
    messageEvent(variables: MessageEventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MessageEventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MessageEventQuery>(MessageEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'messageEvent', 'query', variables);
    },
    messageEvents(variables: MessageEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MessageEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MessageEventsQuery>(MessageEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'messageEvents', 'query', variables);
    },
    withdrawEvent(variables: WithdrawEventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WithdrawEventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WithdrawEventQuery>(WithdrawEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'withdrawEvent', 'query', variables);
    },
    withdrawEvents(variables: WithdrawEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WithdrawEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WithdrawEventsQuery>(WithdrawEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'withdrawEvents', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;