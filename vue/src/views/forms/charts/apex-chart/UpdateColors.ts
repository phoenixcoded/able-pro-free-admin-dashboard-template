import { computed } from 'vue';
import * as themeColors from '@/theme/LightTheme';

const getPrimary = computed(() => {
  return themeColors.DefaultTheme.colors.primary;
});

const getSuccess = computed(() => {
  return themeColors.DefaultTheme.colors.success;
});

const getdarkPrimary = computed(() => {
  return themeColors.DefaultTheme.colors.darkprimary;
});

const getdarkSecondary = computed(() => {
  return themeColors.DefaultTheme.colors.darksecondary;
});

const getLightBorder = computed(() => {
  return themeColors.DefaultTheme.colors.borderLight;
});

const getLightPrimary = computed(() => {
  return themeColors.DefaultTheme.colors.primary200;
});

const getSecondary = computed(() => {
  return themeColors.DefaultTheme.colors.secondary;
});

const getLightSecondary = computed(() => {
  return themeColors.DefaultTheme.colors.secondary200;
});

const getError = computed(() => {
  return themeColors.DefaultTheme.colors.error;
});

const getDarkText = computed(() => {
  return themeColors.DefaultTheme.colors.darkText;
});

const getLightText = computed(() => {
  return themeColors.DefaultTheme.colors.lightText;
});

export {
  getPrimary,
  getSecondary,
  getdarkPrimary,
  getLightPrimary,
  getLightSecondary,
  getLightBorder,
  getDarkText,
  getLightText,
  getError,
  getSuccess,
  getdarkSecondary
};
