import { defineStore } from 'pinia';
import config from '@/config';

export const useCustomizerStore = defineStore({
  id: 'customizer',
  state: () => ({
    Sidebar_drawer: config.Sidebar_drawer,
    Customizer_drawer: config.Customizer_drawer,
    mini_sidebar: config.mini_sidebar,
    setHorizontalLayout: config.setHorizontalLayout, // Horizontal layout
    actTheme: config.actTheme,
    fontTheme: config.fontTheme,
    inputBg: config.inputBg,
    boxed: config.boxed
  }),

  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.Sidebar_drawer = !this.Sidebar_drawer;
    },
    SET_MINI_SIDEBAR(payload: boolean) {
      this.mini_sidebar = payload;
    },
    SET_CUSTOMIZER_DRAWER(payload: boolean) {
      this.Customizer_drawer = payload;
    },

    SET_LAYOUT(payload: boolean) {
      this.setHorizontalLayout = payload;
    },
    SET_THEME(payload: string) {
      this.actTheme = payload;
    },
    SET_FONT(payload: string) {
      this.fontTheme = payload;
    }
  }
});
