// project-imports
import ThemeOption from './theme';
import { extendPaletteWithChannels, withAlpha } from 'utils/colorUtils';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

export function buildPalette(presetColor, contrast = false) {
  const lightPaletteColor = ThemeOption(presetColor);

  const commonColor = { common: { black: '#000', white: '#fff' } };

  const extendedLight = extendPaletteWithChannels(lightPaletteColor);
  const extendedCommon = extendPaletteWithChannels(commonColor);

  return {
    light: {
      mode: 'light',
      ...extendedCommon,
      ...extendedLight,
      text: {
        primary: extendedLight.secondary[800],
        secondary: extendedLight.secondary.main,
        disabled: extendedLight.secondary[400]
      },
      action: { disabled: extendedLight.secondary.light },
      divider: withAlpha(extendedLight.secondary.light, 0.65),
      background: {
        paper: commonColor.common.white,
        default: contrast ? commonColor.common.white : extendedLight.secondary.lighter
      }
    }
  };
}
