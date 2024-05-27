import { editor } from "monaco-types";
import colors from "tailwindcss/colors";

export const darkTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    {
      token: "comment",
      foreground: colors.zinc[400],
    },
  ],
  colors: {
    "editor.foreground": "#ffffff",
    "editor.background": colors.zinc[950],
    "editor.lineHighlightBackground": colors.zinc[900],
    "editorLineNumber.foreground": colors.zinc[400],
    "editor.selectionBackground": colors.zinc[900],
    "dropdown.background": colors.zinc[950],
    "dropdown.border": colors.zinc[800],
    "editorWidget.background": colors.zinc[950],
    "editorWidget.border": colors.zinc[800],
    "input.background": colors.zinc[900],
    "input.border": colors.zinc[800],
    "scrollbarSlider.background": colors.zinc[800],
    "scrollbarSlider.hoverBackground": colors.zinc[700],
    "scrollbarSlider.activeBackground": colors.zinc[600],
  },
};
