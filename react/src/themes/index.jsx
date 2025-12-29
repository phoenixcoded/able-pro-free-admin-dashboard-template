import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// project-imports
import { buildPalette } from './palette';
import Typography from './typography';
import CustomShadows from './custom-shadows';
import componentsOverride from './overrides';

import { HEADER_HEIGHT } from 'config';
import useConfig from 'hooks/useConfig';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  const {
    state: { presetColor, fontFamily }
  } = useConfig();

  const palette = useMemo(() => buildPalette(presetColor), [presetColor]);

  const themeTypography = useMemo(() => Typography(fontFamily), [fontFamily]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: HEADER_HEIGHT,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      shape: {
        borderRadius: 8
      },
      typography: themeTypography,
      colorSchemes: {
        light: {
          palette: palette.light,
          customShadows: CustomShadows(palette.light, 'light')
        }
      },
      cssVariables: {
        cssVarPrefix: '',
        colorSchemeSelector: 'data-color-scheme'
      }
    }),
    [palette, themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider disableTransitionOnChange theme={themes} modeStorageKey="theme-mode" defaultMode="light">
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = { children: PropTypes.node };
