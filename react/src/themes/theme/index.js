// project-imports
import Default from './default';

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const Theme = (presetColor) => {
  switch (presetColor) {
    default:
      return Default();
  }
};

export default Theme;
