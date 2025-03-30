"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { Button } from "@cryptoresume/ui/components/ui/button";
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
import { Check, MessageSquare, Share2, User, Wallet } from "lucide-react";
import { NFTGallery } from "~/src/components/NftGallery";
import { TransactionHistory } from "~/src/components/TransactionHistory";
import { DomainList } from "~/src/components/DomainList";
import WalletCard from "../components/WalletCard";

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);

  const copyProfileLink = () => {
    navigator.clipboard.writeText(
      "https://decentralink.xyz/profile/vitalik.eth",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/network"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Network
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Jobs
            </Link>
            <Link
              href="/messaging"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Messaging
            </Link>
            <Link
              href="/notifications"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Notifications
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Wallet className="h-5 w-5" />
              <span className="sr-only">Wallet</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container px-4 py-6 md:px-6 md:py-12">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6 lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600" />
              <div className="relative px-6">
                <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
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
                  <CardTitle className="text-2xl">Vitalik Buterin</CardTitle>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 border-green-500 text-green-600"
                  >
                    <Check className="h-3 w-3" />
                    ENS Verified
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>vitalik.eth</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                    Online
                  </span>
                </div>
                <CardDescription className="text-base">
                  Co-founder of Ethereum. Working on crypto research,
                  decentralized governance, and digital identity solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Experience</h3>
                    <div className="mt-2 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Ethereum"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Co-founder</h4>
                          <p className="text-sm text-muted-foreground">
                            Ethereum Foundation
                          </p>
                          <p className="text-sm text-muted-foreground">
                            2014 - Present
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Bitcoin Magazine"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Writer</h4>
                          <p className="text-sm text-muted-foreground">
                            Bitcoin Magazine
                          </p>
                          <p className="text-sm text-muted-foreground">
                            2011 - 2014
                          </p>
                        </div>
                      </div>
                    </div>
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
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
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
      </main>
    </div>
  );
}
