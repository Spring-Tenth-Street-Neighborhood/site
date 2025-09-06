import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { InternalLink } from "./Links";
import { usePaletteModeContext } from "./Theme/paletteModeContext";
import { DarkModeIcon } from "./Icons/DarkModeIcon";
import { LightModeIcon } from "./Icons/LightModeIcon";
import { useLanguageContext } from "./Language/context";

const DARK_MODE_COLOR = "#aaa";
const LIGHT_MODE_COLOR = "#cc0";

export function SiteAppBar() {
  const { paletteModeIsDark, togglePaletteMode } = usePaletteModeContext();
  const { language, setLanguage } = useLanguageContext();
  const PaletteModeIcon = paletteModeIsDark ? DarkModeIcon : LightModeIcon;

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <InternalLink to="/" color="inherit" underline="none">
            Spring Tenth Neighborhood
          </InternalLink>
          <Box flexGrow={1} />
          <Box display="flex" gap={0.5} alignItems="center">
            <Tooltip
              title="Pick Language (English/Espanol)"
              placement="bottom-start"
            >
              <Button
                color="inherit"
                aria-label="Pick Language"
                aria-controls="pick-language"
                onClick={() => {
                  setLanguage(language === "en" ? "es" : "en");
                }}
                endIcon={<LanguageIcon />}
              >
                <span>{language === "en" ? "English" : "Español"}</span>
              </Button>
            </Tooltip>
            <Tooltip title="Toggle Palette Mode" placement="bottom-start">
              <IconButton
                sx={{
                  color: paletteModeIsDark ? DARK_MODE_COLOR : LIGHT_MODE_COLOR,
                }}
                aria-label="Toggle Palette Mode"
                aria-controls="toggle-palette-mode"
                onClick={() => togglePaletteMode()}
              >
                <PaletteModeIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
