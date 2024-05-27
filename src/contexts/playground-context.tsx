import { createContext, useContext, useEffect, useState } from "react";

type Editor = "html" | "css" | "js";

type PlaygroundContext = {
  html: string;
  css: string;
  js: string;
  srcDoc: string;
  changeEditorValue: (type: Editor, value: string) => void;
};

const PlaygroundContext = createContext<PlaygroundContext | null>(null);

export function PlaygroundContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const changeEditorValue = (type: Editor, value: string) => {
    switch (type) {
      case "html":
        setHtml(value);
        break;
      case "css":
        setCss(value);
        break;
      case "js":
        setJs(value);
        break;
      default:
        throw new Error("Invalid editor type");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>`);
    }, 800);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const value = {
    html,
    css,
    js,
    srcDoc,
    changeEditorValue,
  };

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
}

export function usePlayground() {
  const context = useContext(PlaygroundContext);

  if (!context) {
    throw new Error(
      "usePlayground must be used within a PlaygroundContextProvider"
    );
  }

  return context;
}
