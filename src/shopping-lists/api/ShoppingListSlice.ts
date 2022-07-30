import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ShoppingListItem } from "../../shopping-list-items/api/ShoppingListItemsSlice";
import { fetchShoppingListsByGroup } from "./ShoppingListsAPI";
import { shoppingListTransformer } from "./transformer/ShoppingListTransformer";

export interface ShoppingList {
  id: string,
  name: string,
  items: ShoppingListItem[],
}

type ShoppingListState = EntityState<ShoppingList> & {
  loading: {
    fetchAll: boolean,
  },
}

export interface ShoppingListResponse {
  id: string,
  name: string,
  shopping_list_items: ShoppingListItem[],
}

const shoppingListAdapter = createEntityAdapter<ShoppingList>();

const initialState: ShoppingListState = shoppingListAdapter.getInitialState({
  loading: {
    fetchAll: true,
  },
})

export const fetchShoppingListsByGroupAsync = createAsyncThunk(
  "shoppingLists/fetch",
  async (groupId: string) => {
    const response = await fetchShoppingListsByGroup(groupId);

    return response.data;
  }
)

const shoppingListSlice = createSlice({
  name: "shoppingLists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingListsByGroupAsync.fulfilled, (state, action) => {
        state.loading.fetchAll = false;
        shoppingListAdapter.setAll(state, shoppingListTransformer(action.payload));
      })
  },
})

export const shoppingListsSelectors = shoppingListAdapter.getSelectors<RootState>(
  (state: RootState) => state.shoppingLists
)

export const shoppingListsGetter = (state: RootState) => shoppingListsSelectors.selectAll(state);
export const shoppingListsFetchAllLoadingGetter = (state: RootState) => state.shoppingLists.loading.fetchAll;

export default shoppingListSlice.reducer;
