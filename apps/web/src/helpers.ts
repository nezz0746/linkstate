import { constants } from "../../../packages/common/dist";
import { Address, Chain } from "viem";
import { base } from "viem/chains";

export const formatAmount = (
  amount: string,
  options: {
    decimalsUnderOne?: number;
  } = {
    decimalsUnderOne: 8,
  },
) => {
  const num = parseFloat(amount);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2).replace(/\.00$/, "") + "m";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2).replace(/\.00$/, "") + "k";
  }
  if (num < 1) {
    return num.toFixed(options.decimalsUnderOne).replace(/0+$/, "");
  }
  return num.toFixed(2).replace(/\.00$/, "");
};

export const truncateAddress = (address?: string | null, length?: number) => {
  if (!address) return "";
  return `${address.slice(0, length || 6)}...${address.slice(-4)}`;
};

export const getExplorerLink = (
  data: Address | string | undefined | null,
  path: "tx" | "address",
  chain?: Chain,
) => {
  if (!data) return "";
  return `${chain?.blockExplorers?.default?.url}/${path}/${data}`;
};

export const getTokenImageURL = (tokenAddress: string, chainId: string) => {
  return `https://assets.smold.app/api/tokens/${chainId}/${tokenAddress}/logo.svg`;
};
export const getChainImageURL = (chainId: string) => {
  return `https://assets.smold.app/api/chain/${chainId}/logo-128.png`;
};

export const getChainName = (chainId: string) => {
  return constants.supportedChains.find(
    (chain) => chain.chain.id.toString() === chainId,
  )?.chain.name;
};

export const _getLocalLink = (str?: string) => {
  if (!str) return "";
  if (Array.isArray(str)) return str[0];
  return str;
};

export const _getSupportedChainIds = () => {
  return constants.supportedChains.map(({ chain }) => chain.id);
};

export const _getSupportedChain = (chainId: number) => {
  return (
    constants.supportedChains.find(({ chain }) => chain.id === chainId)?.chain
      .id ?? base.id
  );
};
