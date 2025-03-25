// project-imports
import Default from './default';

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (presetColor, mode) => {
  switch (presetColor) {
    default:
      return Default(mode);
  }
};

export default Theme;
