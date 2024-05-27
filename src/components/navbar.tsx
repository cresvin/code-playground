import Image from "next/image";
import { ExportButton } from "./buttons/export-button";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="px-5 py-3.5 flex border-b border-b-zinc-800 items-center justify-between">
      <Image src="/codeplay.svg" alt="CodePlay" width={36} height={36} />
      <nav className="space-x-2">
        <ExportButton />
        <Button variant="ghost" asChild>
          <a href="https://www.paypal.com/paypalme/cresvinn" target="_blank">
            PayPal
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="https://github.com/cresvin/code-playground" target="_blank">
            GitHub
          </a>
        </Button>
      </nav>
    </header>
  );
}
