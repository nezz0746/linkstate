import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@cryptoresume/ui/components/ui/dialog";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@cryptoresume/ui/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@cryptoresume/ui/components/ui/card";
import { useExperience } from "../contexts/ExperienceContext";
import WalletCard from "./WalletCard";
import { DomainList } from "./DomainList";
import { TransactionHistory } from "./TransactionHistory";
import { NFTGallery } from "./NftGallery";
import { ExperienceForm } from "./ExperienceForm";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  const { showForm, setShowForm } = useExperience();

  return (
    <div className="min-h-screen">
      <main className="md:px-4 md:py-6">
        <div className="grid gap-2 lg:grid-cols-3 lg:gap-6">
          {" "}
          <div className="space-y-2 lg:col-span-2  bg-white">{children}</div>
          <div className="space-y-2 md:space-y-4">
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
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Experience</DialogTitle>
            </DialogHeader>
            <ExperienceForm />
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

export default ProfileLayout;
