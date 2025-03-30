import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultChain } from "../env";
import { SupportedChainsIds } from "../../../../packages/common/dist";
import { useAccount, useConnect } from "wagmi";
import { usePlatform } from "../providers/platform";
import farcasterFrame from "@farcaster/frame-wagmi-connector";
import { NewUser } from "@cryptoresume/database";

const ChainContext = createContext<{
  chainId: SupportedChainsIds;
  setChainId: (chain: SupportedChainsIds) => void;
}>({
  chainId: defaultChain.id,
  setChainId: () => {},
});

export const ChainProvider = ({ children }: { children: React.ReactNode }) => {
  const [chainId, setChainId] = useState<SupportedChainsIds>(defaultChain.id);
  const { isConnected } = useAccount();
  const { connect } = useConnect();
  const { isFrame, ready, frameContext } = usePlatform();
  const { address } = useAccount();

  const putUser = useCallback(async (u: Partial<NewUser>) => {
    await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify({
        fid: u.fid,
        pfp_url: u.pfp_url,
        username: u.username,
        address: u.address,
      }),
    }).then((res) => {
      console.log("====== USER UPSERTED ======", res);
    });
  }, []);

  useEffect(() => {
    // Call DB on frame load
    if (ready && address) {
      putUser({
        address,
        fid: frameContext?.user.fid.toString(),
        pfp_url: frameContext?.user.pfpUrl,
        username: frameContext?.user.username,
      });
    }
  }, [ready, address, putUser]);

  useEffect(() => {
    if (!isConnected && isFrame) {
      connect({ connector: farcasterFrame() });
    }
  }, [isConnected, isFrame]);

  return (
    <ChainContext.Provider value={{ chainId, setChainId }}>
      {children}
    </ChainContext.Provider>
  );
};

export const useExplorerChain = () => {
  const { chainId, setChainId } = useContext(ChainContext);

  return { chainId, setChainId };
};
