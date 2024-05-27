import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jet-brains-mono",
});

export const metadata: Metadata = {
  title: "Online Code Playground | CodePlay",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
