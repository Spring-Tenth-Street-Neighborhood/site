import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, type Theme } from "@mui/material/styles";
import { ReactNode, useMemo } from "react";

import { usePaletteModeContext } from "./paletteModeContext";

const PRIMARY_COLOR = "#512f01"; // Deep brown
const SECONDARY_COLORS = {
  light: "#0086e6",
  dark: "#3d2812ff", // Rich brown accent
};
const TYPOGRAPHY_HEADLINE_COLORS = {
  light: "#0086e6",
  dark: "#ff9500", // Lighter brown for contrast
};
const BRIGHTEST_GRAY = "#f0f0f0";
const BACKGROUND_GRAY = "#e0e0e0";
const DARKEST_GRAY = "#000";
const BACKGROUND_BROWN = "#170d06ff"; // Very dark brown for background
const PAPER_BROWN = "#422510ff"; // Subtle brown for paper
export const DARKEST_BROWN = "#1a0e05"; // Almost black brown

type TPaletteMode = Theme["palette"]["mode"];
function getTheme(paletteMode: TPaletteMode) {
  const modeIsLight = paletteMode === "light";
  const theme = createTheme({
    typography: {
      allVariants: {
        color: modeIsLight ? PRIMARY_COLOR : BRIGHTEST_GRAY,
      },
      h1: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      h3: {
        fontSize: "1.25rem",
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      h4: {
        fontSize: "1rem",
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
    },
    palette: {
      primary: {
        main: modeIsLight ? PRIMARY_COLOR : "#4de0fdff",
      },
      secondary: {
        main: SECONDARY_COLORS[paletteMode],
      },
      warning: {
        main: "#fcb149ff",
      },
      error: {
        main: "#f00",
      },
      background: {
        default: modeIsLight ? BACKGROUND_GRAY : BACKGROUND_BROWN,
        paper: modeIsLight ? BRIGHTEST_GRAY : PAPER_BROWN,
      },
      text: {
        primary: modeIsLight ? DARKEST_GRAY : BRIGHTEST_GRAY,
        secondary: modeIsLight
          ? DARKEST_GRAY
          : TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "unset",
            fontWeight: "bold",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
        styleOverrides: {
          root: {
            fontWeight: "bold",
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
            borderColor: "rgba(255, 255, 255, 0)",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            "& a": {
              textDecoration: "underline",
            },
          },
        },
      },
    },
  });
  return theme;
}

interface Props {
  children: ReactNode;
}
export function MuiThemeProvider(props: Props) {
  const { children } = props;
  const { paletteMode } = usePaletteModeContext();
  const theme = useMemo(() => getTheme(paletteMode), [paletteMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
