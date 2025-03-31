import {
  useReadLinkStateProfileBalanceOf,
  useWriteLinkStateProfileMint,
} from "@cryptoresume/contracts";
import { useAccount } from "wagmi";
import useWaitForTransactionSuccess from "../hooks/useWaitForTransactionSuccess";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@cryptoresume/ui/components/ui/card";
import Image from "next/image";
import { Button } from "@cryptoresume/ui/components/ui/button";

const MintProfile = ({ children }: { children: React.ReactNode }) => {
  const { address } = useAccount();
  const {
    data: balance,
    isLoading,
    refetch,
  } = useReadLinkStateProfileBalanceOf({
    args: address ? [address] : undefined,
  });

  const {
    writeContract: mint,
    isPending: mintPending,
    data: mintData,
  } = useWriteLinkStateProfileMint();

  const { isLoading: mintLoading } = useWaitForTransactionSuccess(
    mintData,
    () => {
      refetch();
    },
  );

  const writeLoading = mintPending || mintLoading;
  const writeDisabled = writeLoading || !address;

  if (isLoading) return <div></div>;

  if (balance && balance > 0) return <div>{children}</div>;

  return (
    <div className="flex justify-center p-4 items-center flex-col">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Create Your Profile
          </CardTitle>
          <CardDescription>
            Mint your LinkState profile to start connecting with others
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative w-32 h-32 mx-auto overflow-hidden border-2">
            <Image
              src="/profile.png"
              alt="Profile NFT"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Your profile is an NFT that lets you:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Connect with other professionals</li>
                <li>• Receive messages from recruiters</li>
                <li>• Build your on-chain reputation</li>
              </ul>
            </div>
            <Button
              onClick={() => {
                if (address) {
                  mint({
                    args: [address],
                  });
                }
              }}
              loading={writeLoading}
              disabled={writeDisabled}
              className="w-full"
            >
              {writeLoading ? "Minting..." : "Mint Profile"}
            </Button>
            <p className="text-xs text-gray-500">
              Free to mint • Gas fees apply
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MintProfile;
