import { ReactNode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import { MuiThemeProvider } from "./Theme/MuiThemeProvider";
import { PaletteModeProvider } from "./Theme/paletteModeContext";
import { LanguageProvider } from "./Language/context";
import { SiteAppBar } from "./AppBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      <SiteAppBar />
      <Box
        sx={{
          flexGrow: 1,
          paddingY: 2,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
