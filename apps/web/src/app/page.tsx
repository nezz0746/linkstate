"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@cryptoresume/ui/components/ui/badge";
import { Button } from "@cryptoresume/ui/components/ui/button";
import { MessageSquare, PowerIcon } from "lucide-react";
import { useAccount } from "wagmi";
import { usePrivy, useUser } from "@privy-io/react-auth";
import { truncateAddress } from "../helpers";
import { ExperienceList } from "../components/ExperienceList";
import LinkedProfiles from "../components/LinkedProfiles";
import Divider from "../components/Divider";

export default function HomePage() {
  const { address } = useAccount();
  const { user } = useUser();
  const { logout } = usePrivy();

  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const displayName = user?.farcaster?.displayName || truncateAddress(address);
  const pfpUrl = user?.farcaster?.pfp;
  const description = user?.farcaster?.bio;

  return (
    <>
      <div className="h-40 bg-gradient-to-b from-black to-white" />
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
            {/* <Button
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
                    </Button> */}
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
      <div className="p-2 md:p-4 flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-extrabold">{displayName}</h1>
          {description && <p className="text-base">{description}</p>}
        </div>
        <Divider />
        <LinkedProfiles />
        <Divider />
        <div className="grid gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold font-serif">Experience</h3>
            </div>
            <ExperienceList />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowExperienceForm(true)}
            >
              Add Experience
            </Button>
          </div>
          <Divider />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold font-serif">Skills</h3>
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
    </>
  );
}
