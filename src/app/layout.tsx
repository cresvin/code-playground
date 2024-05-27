import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import Providers from "./providers";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jet-brains-mono",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: {
    default: "Online Code Playground | CodePlay",
    template: "%s | CodePlay",
  },
  description:
    "HTML, CSS, and JavaScript with automatic live-preview is an indispensable tool for programmers and web development enthusiasts. CodePlay is perfect for experimenting with code in real-time, facilitating learning and skill development in programming.",
  keywords: [
    "coding",
    "sandbox",
    "code playground",
    "codepen",
    "programming",
    "codesandbox",
    "dev",
    "develop",
    "html",
    "css",
    "javascript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-zinc-950 text-white dark",
          sourceSans3.className,
          JetBrainsMono.variable
        )}
      >
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
        <Analytics />
        <Toaster position="top-center" theme="dark" />
      </body>
    </html>
  );
}
