import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
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

const ContentByLanguage = {
  en: {
    title: "Neighborhood",
    lettersToTheBoard: "Letters",
    houseValue: "House Value",
  },
  es: {
    title: "Vecindario",
    lettersToTheBoard: "Cartas",
    houseValue: "Valor de la Casa",
  },
};

const activeLinkStyle = {
  textDecoration: "underline",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "20px 8px",
};

export function SiteAppBar() {
  const { paletteModeIsDark, togglePaletteMode } = usePaletteModeContext();
  const { language, setLanguage } = useLanguageContext();
  const PaletteModeIcon = paletteModeIsDark ? DarkModeIcon : LightModeIcon;
  const content = ContentByLanguage[language];

  return (
    <AppBar position="sticky" color="secondary" variant="elevation">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            alignItems="center"
            spacing={{
              xs: 1,
              sm: 2,
            }}
          >
            <InternalLink
              to="/"
              color="inherit"
              underline="none"
              activeStyle={activeLinkStyle}
            >
              {content.title}
            </InternalLink>
            <InternalLink
              to="/spring-st-3335/lettersToTheBoard"
              color="inherit"
              underline="none"
              activeStyle={activeLinkStyle}
              partiallyActive
            >
              {content.lettersToTheBoard}
            </InternalLink>
            <InternalLink
              to="/spring-st-3335/HouseValue/"
              color="inherit"
              underline="none"
              activeStyle={activeLinkStyle}
              partiallyActive
            >
              {content.houseValue}
            </InternalLink>
          </Stack>
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
