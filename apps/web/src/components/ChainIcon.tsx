import { Network } from "alchemy-sdk";
import { mainnet, base, optimism } from "viem/chains";
import Image from "next/image";

const ethPath = "/chains/eth.svg";
const basePath = "/chains/base.png";
const optPath = "/chains/op.png";

const alchemyToChainPath: Partial<Record<Network, string>> = {
  [Network.ETH_MAINNET]: ethPath,
  [Network.BASE_MAINNET]: basePath,
  [Network.OPT_MAINNET]: optPath,
};

const chainIdToPath: Partial<Record<number, string>> = {
  [mainnet.id]: ethPath,
  [base.id]: basePath,
  [optimism.id]: optPath,
} as const;

const ChainIcon = ({
  chainId,
  alchemyNetwork,
}: {
  chainId?: number;
  alchemyNetwork?: Network;
}) => {
  const chainPath = (() => {
    if (alchemyNetwork) {
      return alchemyToChainPath[alchemyNetwork];
    }

    if (chainId) {
      return chainIdToPath[chainId];
    }

    return null;
  })();

  if (!chainPath) {
    return null;
  }

  return (
    <Image src={chainPath} alt="Chain Icon" fill className="object-cover" />
  );
};

export default ChainIcon;
