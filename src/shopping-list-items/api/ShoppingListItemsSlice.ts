import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { addShoppingListItem } from "./ShoppingListItemsAPI";

export interface ShoppingListItem {
  id: string,
  name: string,
  unit: string,
  amount: number,
}

export interface ShoppingListItemForm {
  id?: string,
  name: string,
}

export interface AddShoppingListItemParams {
  shoppingListId: string,
  form: ShoppingListItemForm,
}

export const initShoppingListItemParams = (
  shoppingListId: string,
  shoppingListItemId?: string
): AddShoppingListItemParams => {
  return {
    shoppingListId: shoppingListId,
    form: {
      id: shoppingListItemId,
      name: '',
    }
  }
}

type ShoppingListItemsState = {
  params: {
    add: AddShoppingListItemParams | null,
  },
  dialog: {
    add: {
      opened: boolean,
    }
  }
}

export const addShoppingListItemAsync = createAsyncThunk(
  "shoppingListItems/add",
  async ({shoppingListId, form}: AddShoppingListItemParams) => {
    const response = await addShoppingListItem(shoppingListId, form);

    return response.data;
  }
)

const initialState: ShoppingListItemsState = {
  params: {
    add: null,
  },
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
    setAddShoppingListItemParams: (state, {payload}) => {
      state.params.add = payload;
    },
  },
})

export const isAddShoppingListDialogOpenedGetter = (state: RootState) => state.shoppingListItems.dialog.add.opened;
export const addShoppingListItemParamsGetter = (state: RootState) => state.shoppingListItems.params.add;

export const {
  toggleAddShoppingListDialog,
  setAddShoppingListItemParams,
} = shoppingListItemsSlice.actions;

export default shoppingListItemsSlice.reducer;
