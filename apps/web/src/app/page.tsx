"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { Button } from "@cryptoresume/ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@cryptoresume/ui/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@cryptoresume/ui/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@cryptoresume/ui/components/ui/tabs";
import { Check, MessageSquare, Share2 } from "lucide-react";
import { NFTGallery } from "~/src/components/NftGallery";
import { TransactionHistory } from "~/src/components/TransactionHistory";
import { DomainList } from "~/src/components/DomainList";
import WalletCard from "../components/WalletCard";
import { useAccount } from "wagmi";
import { useLinkAccount, usePrivy, useUser } from "@privy-io/react-auth";
import { truncateAddress } from "../helpers";
import { DomainVerification } from "../components/DomainVerification";
import { FarcasterIcon } from "../components/Icons";
import { useEnsVerification } from "../hooks/useEnsVerification";
import { ExperienceList } from "../components/ExperienceList";
import { ExperienceForm } from "../components/ExperienceForm";
import { ExperienceProvider } from "../contexts/ExperienceContext";

export default function ProfilePage() {
  const { address } = useAccount();
  const [copied, setCopied] = useState(false);
  const { user, refreshUser } = useUser();
  const { unlinkFarcaster } = usePrivy();
  const { linkFarcaster } = useLinkAccount({
    onSuccess: () => {
      refreshUser();
    },
  });
  const { ensVerifiedInPast30Days, customMetadata } = useEnsVerification();
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const copyProfileLink = () => {
    navigator.clipboard.writeText(
      "https://decentralink.xyz/profile/vitalik.eth",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayName = user?.farcaster?.displayName || truncateAddress(address);
  const pfpUrl = user?.farcaster?.pfp;
  const description = user?.farcaster?.bio;

  return (
    <ExperienceProvider>
      <div className="min-h-screen bg-slate-50">
        <main className="container px-4 py-6">
          <div className="grid gap-2 lg:grid-cols-3 lg:gap-6">
            <div className="space-y-6 lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600" />
                <div className="relative px-6">
                  {pfpUrl && (
                    <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white">
                      <Image
                        src={pfpUrl}
                        alt="Profile"
                        width={200}
                        height={200}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <div className="flex justify-end pt-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyProfileLink}
                      >
                        {copied ? (
                          <Check className="mr-2 h-4 w-4" />
                        ) : (
                          <Share2 className="mr-2 h-4 w-4" />
                        )}
                        {copied ? "Copied" : "Reference"}
                      </Button>
                      <Button size="sm">
                        <MessageSquare className="md:mr-2 h-4 w-4" />
                        <p className="hidden md:block">Send Paid Message</p>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="pt-4">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-2xl">{displayName}</CardTitle>
                  </div>
                  {description && (
                    <CardDescription className="text-base">
                      {description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <Card className="mb-6 p-0 border-none flex flex-col gap-4">
                    <CardHeader className="p-0">
                      <CardTitle>Profiles</CardTitle>
                      <CardDescription>
                        Verify your web3 profiles to enhance your credibility
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                                  <Image
                                    src="/ens.png"
                                    alt="ENS"
                                    width={20}
                                    height={20}
                                  />
                                </div>
                                <div>
                                  <h4 className="font-medium">ENS</h4>
                                  <p className="text-xs text-muted-foreground">
                                    Ethereum Name Service
                                  </p>
                                </div>
                              </div>
                              {ensVerifiedInPast30Days && (
                                <Badge
                                  variant="outline"
                                  className="flex items-center gap-1 border-green-500 text-green-600"
                                >
                                  <Check className="h-3 w-3" />
                                  {customMetadata?.ens}
                                </Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <DomainVerification />
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                                  <FarcasterIcon className="h-5 w-5" />
                                </div>
                                <div>
                                  <h4 className="font-medium">Farcaster</h4>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={() => {
                                if (user?.farcaster) {
                                  if (user?.farcaster?.fid) {
                                    unlinkFarcaster(user?.farcaster?.fid);
                                  }
                                } else {
                                  linkFarcaster();
                                }
                              }}
                            >
                              {user?.farcaster
                                ? "Unlink Farcaster"
                                : "Link Farcaster"}
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid gap-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowExperienceForm(true)}
                        >
                          Add Experience
                        </Button>
                      </div>
                      <ExperienceList />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Skills</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Blockchain</Badge>
                        <Badge variant="secondary">Cryptography</Badge>
                        <Badge variant="secondary">Smart Contracts</Badge>
                        <Badge variant="secondary">Solidity</Badge>
                        <Badge variant="secondary">Consensus Algorithms</Badge>
                        <Badge variant="secondary">Decentralized Systems</Badge>
                        <Badge variant="secondary">Governance</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <WalletCard />
              <Card>
                <CardHeader>
                  <CardTitle>Digital Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="domains">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="domains">Domains</TabsTrigger>
                      <TabsTrigger value="transactions">
                        Transactions
                      </TabsTrigger>
                      <TabsTrigger value="nfts">NFTs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="domains" className="mt-4">
                      <DomainList />
                    </TabsContent>
                    <TabsContent value="transactions" className="mt-4">
                      <TransactionHistory />
                    </TabsContent>
                    <TabsContent value="nfts" className="mt-4">
                      <NFTGallery />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
          <Dialog
            open={showExperienceForm}
            onOpenChange={setShowExperienceForm}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Experience</DialogTitle>
              </DialogHeader>
              <ExperienceForm />
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </ExperienceProvider>
  );
}
