import { ReactNode } from "react";
import { LanguageProvider } from "./src/lib/Language/context";
import { MuiThemeProvider } from "./src/lib/Theme/MuiThemeProvider";
import { PaletteModeProvider } from "./src/lib/Theme/paletteModeContext";

export function wrapPageElement({ element }: { element: ReactNode }) {
  return (
    <PaletteModeProvider>
      <LanguageProvider>
        <MuiThemeProvider>{element}</MuiThemeProvider>
      </LanguageProvider>
    </PaletteModeProvider>
  );
}
