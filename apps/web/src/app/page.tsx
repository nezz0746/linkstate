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
  CardHeader,
  CardTitle,
} from "@cryptoresume/ui/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@cryptoresume/ui/components/ui/tabs";
import {
  Check,
  MessageSquare,
  PowerIcon,
  PowerOff,
  Share2,
} from "lucide-react";
import { NFTGallery } from "~/src/components/NftGallery";
import { TransactionHistory } from "~/src/components/TransactionHistory";
import { DomainList } from "~/src/components/DomainList";
import WalletCard from "../components/WalletCard";
import { useAccount } from "wagmi";
import { usePrivy, useUser } from "@privy-io/react-auth";
import { truncateAddress } from "../helpers";
import { ExperienceList } from "../components/ExperienceList";
import { ExperienceForm } from "../components/ExperienceForm";
import { ExperienceProvider } from "../contexts/ExperienceContext";
import LinkedProfiles from "../components/LinkedProfiles";
import Divider from "../components/Divider";

export default function ProfilePage() {
  const { address } = useAccount();
  const { user } = useUser();
  const { logout } = usePrivy();

  const [copied, setCopied] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const displayName = user?.farcaster?.displayName || truncateAddress(address);
  const pfpUrl = user?.farcaster?.pfp;
  const description = user?.farcaster?.bio;

  return (
    <ExperienceProvider>
      <div className="min-h-screen">
        <main className="md:px-4 md:py-6">
          <div className="grid gap-2 lg:grid-cols-3 lg:gap-6">
            <div className="space-y-2 lg:col-span-2  bg-white">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600" />
              <div className="relative px-6">
                {pfpUrl && (
                  <div className="absolute -top-12 flex h-24 w-24 items-center justify-center border-4 border-white bg-white">
                    <Image
                      src={pfpUrl}
                      alt="Profile"
                      width={200}
                      height={200}
                      className=""
                    />
                  </div>
                )}
                <div className="flex justify-end pt-4">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        //
                      }}
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
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => {
                        logout();
                      }}
                    >
                      <PowerIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div>
                  <h1 className="text-4xl font-extrabold">{displayName}</h1>
                  {description && <p className="text-base">{description}</p>}
                </div>
                <Divider />
                <LinkedProfiles />
                <Divider />
                <div className="grid gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold font-serif">
                        Experience
                      </h3>
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
                  <Divider />
                  <div>
                    <h3 className="text-2xl font-semibold font-serif">
                      Skills
                    </h3>
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
                  <Divider />
                </div>
              </div>
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
