// ==============================|| THEME CONSTANT  ||============================== //

export const APP_DEFAULT_PATH = '/dashboard';
export const HORIZONTAL_MAX_ITEM = 6; // Pro Version
export const DRAWER_WIDTH = 280;
export const MINI_DRAWER_WIDTH = 0; // Pro Version
export const HEADER_HEIGHT = 74;

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/react/default'
export const APP_BASE_NAME = '/react/free';

// ==============================|| THEME CONFIG  ||============================== //

const config = {
  fontFamily: `Inter var`, // Pro Version
  menuOrientation: 'vertical', // Pro Version
  menuCaption: true, // Pro Version
  miniDrawer: false, // Pro Version
  container: true, // Pro Version
  mode: 'light', // Pro Version
  presetColor: 'default', // Pro Version
  themeDirection: 'ltr', // Pro Version
  themeContrast: false // Pro Version
};

export default config;
