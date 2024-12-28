import { type ThemeDefinition, createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const light: ThemeDefinition = {
  dark: false,
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
  },
  variables: {
    'border-color': '#e8ebee',
    'carousel-control-size': 10,
    gradient: 'linear-gradient(to right, rgb(var(--v-theme-darkprimary)), rgb(var(--v-theme-primary)))',
    'card-shadow': '0 8px 24px rgba(var(--v-shadow-key-umbra-color),var(--v-shadow-opacity)),0 0 transparent,0 0 transparent',
    'sidebar-shadow': '0px 8px 24px rgba(19, 25, 32, 0.08)',
    'shadow-key-umbra-color': '#13192014',
    'high-opacity': 1,
    'medium-opacity': 0.85,
    'half-opacity': 0.5,
    'shadow-opacity': 0.08
  }
};

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases
    },
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
