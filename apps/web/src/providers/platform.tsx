"use client";

import { createContext, useContext, useEffect, useState } from "react";
import sdk, { Context } from "@farcaster/frame-sdk";

const PlatformContext = createContext<{
  frameContext: Context.FrameContext | null;
  isFrame: boolean;
  ready: boolean;
} | null>(null);

const PlatformProvider = ({ children }: { children: React.ReactNode }) => {
  const [context, setContext] = useState<Context.FrameContext | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const context = (await sdk.context) as Context.FrameContext & {
          client: { added: boolean };
        };

        console.log("Frame context loaded:", context);

        setContext(context);

        await sdk.actions.ready();
        console.log("Frame ready called");

        if (!context?.client?.added) {
          const token = await sdk.actions.addFrame();
          console.log("Frame token received:", token);
        }
      } catch (e) {
        console.error("Frame loading error:", e);
        setIsReady(true);
      }
    };
    if (sdk && !isReady) {
      load().then(() => setIsReady(true));
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <PlatformContext.Provider
      value={{
        frameContext: context,
        isFrame: Boolean(context),
        ready: isReady,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error("usePlatform must be used within a PlatformProvider");
  }
  return context;
};

export default PlatformProvider;
