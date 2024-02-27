import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const DefaultTheme: ThemeTypes = {
  name: 'DefaultTheme',
  dark: false,
  variables: {
    'border-color': '#e8ebee',
    'carousel-control-size': 10,
    gradient: 'linear-gradient(to right, #3F78FF, #4680FF)',
    'card-shadow': '0px 8px 24px rgba(19, 25, 32, 0.08)'
  },
  colors: {
    primary: '#4680FF',
    secondary: '#5B6B79',
    info: '#3ec9d6',
    success: '#2ca87f',
    warning: '#e58a00',
    error: '#dc2626',
    lightprimary: '#E9F0FF',
    lightsecondary: '#F8F9FA',
    lightsuccess: '#c0e5d9',
    lightinfo: '#c5eff3',
    lighterror: '#f5bebe',
    lightwarning: '#f7dcb3',
    darkText: '#1D2630',
    lightText: '#5B6B79',
    darkprimary: '#3F78FF',
    darksecondary: '#3E4853',
    darkinfo: '#30bccc',
    darksuccess: '#21976c',
    darkwarning: '#de7700',
    darkerror: '#d31c1c',
    borderLight: '#e8ebee',
    inputBorder: '#BEC8D0',
    containerBg: '#F8F9FA',
    surface: '#fff',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#f3f5f7',
    primary200: '#b8ceff',
    secondary200: '#d8dadd',
    warning200: '#faaf00'
  }
};

export { DefaultTheme };
