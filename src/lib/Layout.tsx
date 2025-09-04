import { ReactNode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import { MuiThemeProvider } from "./Theme/MuiThemeProvider";
import { PaletteModeProvider } from "./Theme/paletteModeContext";

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <PaletteModeProvider>
      <main>
        <MuiThemeProvider>
          <Box
            sx={{
              height: "100vh",
              paddingY: 2,
              overflowY: "auto",
            }}
          >
            {children}
          </Box>
        </MuiThemeProvider>
      </main>
    </PaletteModeProvider>
  );
}
