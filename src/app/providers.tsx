"use client";

import { PlaygroundContextProvider } from "@/contexts/playground-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <PlaygroundContextProvider>{children}</PlaygroundContextProvider>;
}
