"use client";

import { darkTheme } from "@/lib/theme";
import { Editor, type OnChange, type OnMount } from "@monaco-editor/react";

type CodeEditorProps = {
  language: "html" | "css" | "javascript";
  value: string;
  onChange: OnChange;
};

export function CodeEditor({ language, value, onChange }: CodeEditorProps) {
  // editorRef.current = editor;
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    monaco.editor.defineTheme("dark-theme", darkTheme);
    monaco.editor.setTheme("dark-theme");
  };

  return (
    <Editor
      language={language}
      onMount={handleEditorDidMount}
      value={value}
      onChange={onChange}
      options={{
        fontFamily: "var(--jet-brains-mono)",
        smoothScrolling: true,
        cursorSmoothCaretAnimation: "on",
        fixedOverflowWidgets: true,
        overviewRulerLanes: 0,
        wordWrap: "on",
        fontLigatures: true,
        lineHeight: 2,
        fontSize: 13,
        renderLineHighlightOnlyWhenFocus: true,
        stickyScroll: { enabled: true },
        scrollbar: { verticalSliderSize: 4 },
        tabSize: 2,
        cursorBlinking: "solid",
        minimap: { enabled: false },
      }}
    />
  );
}
