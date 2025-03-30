import "@cryptoresume/ui/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import RootProvider from "../providers/root";
import { Toaster } from "@cryptoresume/ui/components/ui/toaster";
import PlatformProvider from "../providers/platform";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"] });

const appUrl = "https://warptext.fun";

const frame = {
  version: "next",
  // Has to be the right aspect ratio
  imageUrl: `${appUrl}/preview.jpeg`,
  button: {
    title: "Send Tokens",
    action: {
      type: "launch_frame",
      name: "Warptext",
      url: appUrl,
      splashImageUrl: `${appUrl}/icon-trans.png`,
      splashBackgroundColor: "#ffffff",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Warptext",
    openGraph: {
      title: "Warptext",
      description: "Warptext - Frame",
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
    <html lang="en">
      <body className={montserrat.className}>
        <main className="min-h-screen">
          <PlatformProvider>
            <RootProvider>
              {children}
              <Toaster />
            </RootProvider>
          </PlatformProvider>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
