"use client";

import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";
import { Button } from "@cryptoresume/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@cryptoresume/ui/components/ui/card";
import { WalletConnect } from "~/src/components/WalletConnect";
import Image from "next/image";
import { useAccount } from "wagmi";
import { FarcasterIcon } from "./Icons";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingState from "./LoadingState";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { ready, authenticated } = usePrivy();
  const { isConnected } = useAccount();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (ready) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [ready, authenticated, isConnected]);

  return (
    <AnimatePresence mode="wait">
      {!ready || !showContent ? (
        <LoadingState key="loading" />
      ) : !authenticated || !isConnected ? (
        <motion.div
          key="unauthenticated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4"
        >
          <div className="w-full max-w-md">
            <Card className="border-none shadow-lg">
              <CardHeader className="space-y-1 text-center">
                <div className="flex justify-center pb-10 flex-row items-center gap-2">
                  <Image src="/brand.png" alt="logo" width={300} height={100} />
                </div>
                <CardDescription>
                  Connect your wallet to access your decentralized professional
                  identity
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="bg-white" disabled>
                    <svg
                      className="mr-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button disabled variant="outline" className="bg-white">
                    <FarcasterIcon className="mr-2 h-4 w-4" />
                    Farcaster
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <WalletConnect />
              </CardContent>
              <CardFooter className="flex flex-col">
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  By connecting, you agree to our{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="authenticated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppLayout;
