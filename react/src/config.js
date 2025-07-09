// ==============================|| THEME CONSTANT ||============================== //

export const APP_DEFAULT_PATH = '/dashboard';
export const HORIZONTAL_MAX_ITEM = 6;
export const DRAWER_WIDTH = 280;
export const MINI_DRAWER_WIDTH = 0;
export const HEADER_HEIGHT = 74;
export const GRID_COMMON_SPACING = { xs: 2, md: 2.5 };

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/react/default'
export const APP_BASE_NAME = '/react/free';

// ==============================|| THEME CONFIG ||============================== //

const config = {
  fontFamily: `Inter var`,
  i18n: 'en',
  menuOrientation: 'vertical',
  menuCaption: true,
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr',
  themeContrast: false
};

export default config;
