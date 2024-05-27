"use client";

import { usePlayground } from "@/contexts/playground-context";
import { CodeEditor } from "./code-editor";
import { PanelHeader } from "./panel-header";
import { Preview } from "./preview";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

export function Panels() {
  const { html, css, js, changeEditorValue } = usePlayground();

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          {/* html panel */}
          <ResizablePanel defaultSize={50}>
            <PanelHeader title="HTML" circle={true} circleColor="#e34c26" />
            <CodeEditor
              language="html"
              value={html}
              onChange={(value) => changeEditorValue("html", value as string)}
            />
          </ResizablePanel>
          <ResizableHandle />
          {/* js panel */}
          <ResizablePanel defaultSize={50}>
            <PanelHeader title="JS" circle={true} circleColor="#f0db4f" />
            <CodeEditor
              language="javascript"
              value={js}
              onChange={(value) => changeEditorValue("js", value as string)}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          {/* css panel */}
          <ResizablePanel defaultSize={50}>
            <PanelHeader title="CSS" circle={true} circleColor="#264de4" />
            <CodeEditor
              language="css"
              value={css}
              onChange={(value) => changeEditorValue("css", value as string)}
            />
          </ResizablePanel>
          <ResizableHandle />
          {/* preview panel */}
          <ResizablePanel className="flex flex-col" defaultSize={50}>
            <PanelHeader title="Preview" circle={true} />
            <Preview />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
