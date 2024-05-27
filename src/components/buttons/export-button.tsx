"use client";

import { usePlayground } from "@/contexts/playground-context";
import { outputHtmlTemplate } from "@/lib/utils";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { Button } from "../ui/button";

const HTML_FILENAME = "index.html";
const CSS_FILENAME = "style.css";
const JS_FILENAME = "main.js";

export function ExportButton() {
  const { html, css, js } = usePlayground();

  const handleExportProject = () => {
    const zip = new JSZip();

    const src = zip.folder("src");
    src?.file(HTML_FILENAME, html);
    src?.file(CSS_FILENAME, css);
    src?.file(JS_FILENAME, js);

    const dist = zip.folder("dist");
    dist?.file(
      HTML_FILENAME,
      outputHtmlTemplate(html, {
        cssFilename: CSS_FILENAME,
        jsFilename: JS_FILENAME,
      })
    );
    dist?.file(CSS_FILENAME, css);
    dist?.file(JS_FILENAME, js);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "export.zip");
    });
  };

  return <Button onClick={handleExportProject}>Download</Button>;
}
