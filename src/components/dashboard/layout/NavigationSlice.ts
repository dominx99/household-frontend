import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type NavigationDrawer = {
  opened: boolean,
}

export interface NavigationState {
  drawer: NavigationDrawer,
}

const initialState: NavigationState = {
  drawer: {
    opened: false,
  }
}

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleDrawer: (state, { payload }) => {
      state.drawer.opened = payload;
    }
  },
})

export const {
  toggleDrawer,
} = navigationSlice.actions;

export const isNavigationDrawerOpened = (state: RootState) => state.navigation.drawer.opened;

export default navigationSlice.reducer;
