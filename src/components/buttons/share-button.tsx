"use client";

import { usePlayground } from "@/contexts/playground-context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

export function ShareButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { html, css, js } = usePlayground();

  const handleCopyShareLink = () => {
    // update search params
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    html ? current.set("html", html) : current.delete("html");
    css ? current.set("css", css) : current.delete("css");
    js ? current.set("js", js) : current.delete("js");

    const search = current.toString();
    router.push(`${pathname}?${search}`);

    //copy the url to the clipboard
    try {
      navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(`Failed to copy link: ${err.message}`);
      }
    } finally {
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <Button variant="ghost" onClick={handleCopyShareLink}>
      🔗 Share
    </Button>
  );
}
