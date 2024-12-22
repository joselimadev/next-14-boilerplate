import "./globals.css";
import Providers from "@/providers/providers";
import { cn } from "@/utils";
import { constructMetadata } from "@/utils/functions/construct-metadata";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
