import { RootLayout } from "#/components/RootLayout";
import { Metadata } from "next";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import * as React from "react";

export const metadata: Metadata = {
  title: `MEV Scanner`,
  description: "Check how much funds you could have saved with MEV Blocker",
  twitter: {
    images: "https://have-i-been-mevd.bleu.fi/assets/preview-image.png",
  },
  openGraph: {
    images: "https://have-i-been-mevd.bleu.fi/assets/preview-image.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background flex h-full flex-col font-sans font-normal text-foreground border-foreground">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
