import "@cryptoresume/ui/globals.css";
import type { Metadata } from "next";
import RootProvider from "../providers/root";
import { Toaster } from "@cryptoresume/ui/components/ui/toaster";
import PlatformProvider from "../providers/platform";
import { Analytics } from "@vercel/analytics/react";
import AppLayout from "../components/AppLayout";
import { inter, cormorant } from "../fonts";
import { Globe } from "@cryptoresume/ui/components/magicui/globe";
import Background from "../components/Background";

const appUrl = "https://linkstate.vercel.app";

const frame = {
  version: "next",
  imageUrl: `${appUrl}/preview.png`,
  button: {
    title: "Open Linkstate",
    action: {
      type: "launch_frame",
      name: "Linkstate",
      url: appUrl,
      splashImageUrl: `${appUrl}/icon.png`,
      splashBackgroundColor: "#ffffff",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Linkstate",
    openGraph: {
      title: "Linkstate",
      description: "Linkstate - Frame",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={inter.className}>
        <main className="min-h-screen">
          <PlatformProvider>
            <RootProvider>
              <Background>
                <AppLayout>{children}</AppLayout>
              </Background>
              <Toaster />
            </RootProvider>
          </PlatformProvider>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
