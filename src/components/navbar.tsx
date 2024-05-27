import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ExportButton } from "./buttons/export-button";
import FormatButton from "./buttons/format-button";
import { ShareButton } from "./buttons/share-button";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="px-5 py-3.5 flex border-b border-b-zinc-800 items-center justify-between">
      <Link href="/">
        <Image src="/codeplay.svg" alt="CodePlay" width={36} height={36} />
      </Link>
      <nav className="space-x-2">
        <ExportButton />
        <Suspense>
          <ShareButton />
        </Suspense>
        <FormatButton />
        <Button variant="ghost" asChild>
          <a href="https://www.paypal.com/paypalme/cresvinn" target="_blank">
            💙 PayPal
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="https://github.com/cresvin/code-playground" target="_blank">
            💻 GitHub
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="mailto:oliwiertkacz1@gmail.com" target="_blank">
            📩 Contact
          </a>
        </Button>
      </nav>
    </header>
  );
}
