import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ShoppingListItem {
  id: string,
  name: string,
  unit: string,
  amount: number,
}

type ShoppingListItemsState = {
  dialog: {
    add: {
      opened: boolean,
    }
  }
}

const initialState: ShoppingListItemsState = {
  dialog: {
    add: {
      opened: false,
    }
  }
}

const shoppingListItemsSlice = createSlice({
  name: "shoppingListItems",
  initialState,
  reducers: {
    toggleAddShoppingListDialog: (state) => {
      state.dialog.add.opened = !state.dialog.add.opened;
    },
  }
})

export const isAddShoppingListDialogOpenedGetter = (state: RootState) => state.shoppingListItems.dialog.add.opened;

export const {
  toggleAddShoppingListDialog,
} = shoppingListItemsSlice.actions;

export default shoppingListItemsSlice.reducer;
