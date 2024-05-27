"use client";

import { usePlayground } from "@/contexts/playground-context";
import prettierTypescriptEstree from "prettier/plugins/estree";
import prettierHtmlPlugin from "prettier/plugins/html";
import prettierPostcssPlugin from "prettier/plugins/postcss";
import prettierTypescriptPlugin from "prettier/plugins/typescript";
import prettier from "prettier/standalone";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function FormatButton() {
  const { html, css, js, changeEditorValue } = usePlayground();

  const handleFormatProject = async () => {
    try {
      const htmlResult = await prettier.format(html, {
        parser: "html",
        plugins: [prettierHtmlPlugin],
      });

      const cssResult = await prettier.format(css, {
        parser: "css",
        plugins: [prettierPostcssPlugin],
      });

      const jsResult = await prettier.format(js, {
        parser: "typescript",
        plugins: [prettierTypescriptPlugin, prettierTypescriptEstree],
      });

      changeEditorValue("html", htmlResult);
      changeEditorValue("css", cssResult);
      changeEditorValue("js", jsResult);

      toast.success("Code formatted successfully!");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(`Formatting failed: ${err.message}`);
      }
    }
  };

  return (
    <Button variant="ghost" onClick={handleFormatProject}>
      😍 Format
    </Button>
  );
}
