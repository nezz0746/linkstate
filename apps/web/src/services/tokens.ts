import {
  SupportedChainsIds,
  Token,
  TokenList,
} from "../../../../packages/common/dist";
import { Address, getAddress, zeroAddress } from "viem";

export const getTokenImageURL = (address: Address) => {
  const blobStoreBaseURL =
    "https://74uo5vxwtwd6nfci.public.blob.vercel-storage.com/tokens";
  return `${blobStoreBaseURL}/${getAddress(address)}.png`;
};

export const tokens: Record<SupportedChainsIds, TokenList> = {
  "11155111": {
    name: "Sepolia",
    description: "Curated list of tokens on Sepolia",
    tokens: [
      {
        name: "ETH",
        symbol: "ETH",
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        decimals: 18,
        isNative: true,
        chainId: 11155111,
        logoURI:
          "https://assets.smold.app/api/token/10/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/logo-128.png",
      },
      {
        name: "USDC",
        symbol: "USDC",
        address: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
        decimals: 6,
        chainId: 11155111,
        logoURI:
          "https://assets.smold.app/api/token/10/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85/logo-128.png",
      },
    ],
  },
  "10": {
    name: "Optimism",
    description: "A curated list of common tokens on Optimism",
    tokens: [
      {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        isNative: true,
        name: "Ethereum",
        symbol: "ETH",
        logoURI:
          "https://assets.smold.app/api/token/10/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/logo-128.png",
        chainId: 10,
        decimals: 18,
      },
      {
        address: "0x4200000000000000000000000000000000000042",
        name: "Optimism",
        symbol: "OP",
        logoURI:
          "https://assets.smold.app/api/token/10/0x4200000000000000000000000000000000000042/logo-128.png",
        chainId: 10,
        decimals: 18,
      },
      {
        address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        name: "USD Coin",
        symbol: "USDC",
        logoURI:
          "https://assets.smold.app/api/token/10/0x7F5c764cBc14f9669B88837ca1490cCa17c31607/logo-128.png",
        chainId: 10,
        decimals: 6,
      },
      {
        address: "0x4200000000000000000000000000000000000006",
        name: "Wrapped Ether",
        symbol: "WETH",
        logoURI:
          "https://assets.smold.app/api/token/10/0x4200000000000000000000000000000000000006/logo-128.png",
        chainId: 10,
        decimals: 18,
      },
      {
        address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        name: "Tether USD",
        symbol: "USDT",
        logoURI:
          "https://assets.smold.app/api/token/10/0x94b008aA00579c1307B0EF2c499aD98a8ce58e58/logo-128.png",
        chainId: 10,
        decimals: 6,
      },
      {
        address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        name: "Dai Stablecoin",
        symbol: "DAI",
        logoURI:
          "https://assets.smold.app/api/token/10/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo-128.png",
        chainId: 10,
        decimals: 18,
      },
    ],
  },
  "137": {
    name: "Polygon",
    description: "A curated list of common tokens on Polygon",
    tokens: [
      {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        name: "Matic",
        symbol: "MATIC",
        isNative: true,
        logoURI:
          "https://assets.smold.app/api/token/137/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/logo-128.png",
        chainId: 137,
        decimals: 18,
      },
      {
        address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        name: "Wrapped Ether",
        symbol: "WETH",
        logoURI:
          "https://assets.smold.app/api/token/137/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo-128.png",
        chainId: 137,
        decimals: 18,
      },
      {
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        name: "USD Coin (PoS)",
        symbol: "USDC",
        logoURI:
          "https://assets.smold.app/api/token/137/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo-128.png",
        chainId: 137,
        decimals: 6,
      },
      {
        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        name: "(PoS) Tether USD",
        symbol: "USDT",
        logoURI:
          "https://assets.smold.app/api/token/137/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo-128.png",
        chainId: 137,
        decimals: 6,
      },
      {
        address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        name: "(PoS) Dai Stablecoin",
        symbol: "DAI",
        logoURI:
          "https://assets.smold.app/api/token/137/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063/logo-128.png",
        chainId: 137,
        decimals: 18,
      },
    ],
  },
  "8453": {
    name: "Base",
    description: "A curated list of common tokens on Base",
    tokens: [
      {
        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        name: "USD Coin",
        symbol: "USDC",
        logoURI:
          "https://assets.smold.app/api/token/8453/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913/logo-128.png",
        chainId: 8453,
        decimals: 6,
      },
      {
        address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
        name: "DEGEN",
        symbol: "DEGEN",
        logoURI:
          "https://74uo5vxwtwd6nfci.public.blob.vercel-storage.com/tokens/0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed.png",
        chainId: 8453,
        decimals: 18,
      },
      {
        address: zeroAddress,
        isNative: true,
        name: "Ethereum",
        symbol: "ETH",
        logoURI:
          "https://assets.smold.app/api/token/8453/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/logo-128.png",
        chainId: 8453,
        decimals: 18,
      },
      {
        address: "0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe",
        name: "HIGHER",
        symbol: "HIGHER",
        logoURI:
          "https://74uo5vxwtwd6nfci.public.blob.vercel-storage.com/tokens/0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe.png",
        chainId: 8453,
        decimals: 18,
      },
    ],
  },
  "42161": {
    name: "Arbitrum",
    description: "A curated list of common tokens on Arbitrum",
    tokens: [
      {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        name: "Ethereum",
        symbol: "ETH",
        logoURI:
          "https://assets.smold.app/api/token/42161/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/logo-128.png",
        chainId: 42161,
        decimals: 18,
      },
      {
        address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        name: "Wrapped Ether",
        symbol: "WETH",
        logoURI:
          "https://assets.smold.app/api/token/42161/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/logo-128.png",
        chainId: 42161,
        decimals: 18,
      },
      {
        address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        name: "USD Coin (Arb1)",
        symbol: "USDC",
        logoURI:
          "https://assets.smold.app/api/token/42161/0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8/logo-128.png",
        chainId: 42161,
        decimals: 6,
      },
      {
        address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        name: "Tether USD",
        symbol: "USDT",
        logoURI:
          "https://assets.smold.app/api/token/42161/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo-128.png",
        chainId: 42161,
        decimals: 6,
      },
      {
        address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        name: "Dai Stablecoin",
        symbol: "DAI",
        logoURI:
          "https://assets.smold.app/api/token/42161/0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1/logo-128.png",
        chainId: 42161,
        decimals: 18,
      },
    ],
  },
  "324": {
    name: "ZKSync",
    description:
      "A curated list of popular tokens from all the token lists on tokenlistooor.",
    tokens: [
      {
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        isNative: true,
        name: "Ethereum",
        symbol: "ETH",
        logoURI:
          "https://assets.smold.app/api/token/1/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE/logo-128.png",
        chainId: 324,
        decimals: 18,
      },
      {
        address: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",
        name: "USDC",
        symbol: "USDC",
        logoURI:
          "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
        chainId: 324,
        decimals: 6,
      },
    ],
  },
};

const baseUSDC = tokens[8453].tokens.find(
  (token) => token.symbol === "USDC",
) as Token;

const degen = tokens[8453].tokens.find(
  (token) => token.symbol === "DEGEN",
) as Token;

export const usdcTippingChoices: {
  token: Token;
  amount: number;
}[] = [
  {
    token: baseUSDC,
    amount: 1,
  },
  {
    token: baseUSDC,
    amount: 5,
  },
  {
    token: baseUSDC,
    amount: 10,
  },
];

export const degenTippingChoices: {
  token: Token;
  amount: number;
}[] = [
  {
    token: degen,
    amount: 500,
  },
  {
    token: degen,
    amount: 1500,
  },
  {
    token: degen,
    amount: 3000,
  },
];
