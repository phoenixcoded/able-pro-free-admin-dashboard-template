import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  openItem: ['dashboard'],
  selectedID: null,
  drawerOpen: false
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeID(state, action) {
      state.selectedID = action.payload;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    }
  }
});

export default menu.reducer;

export const { activeItem, openDrawer, activeID } = menu.actions;
