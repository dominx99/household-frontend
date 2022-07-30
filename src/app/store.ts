import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from '../components/authentication/AuthenticationSlice';
import navigationReducer from '../components/dashboard/layout/NavigationSlice';
import groupsReducer from '../components/groups/GroupSlice';
import shoppingListsReducer from '../shopping-lists/api/ShoppingListSlice';
import shoppingListItemsReducer from '../shopping-list-items/api/ShoppingListItemsSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    authentication: authenticationReducer,
    groups: groupsReducer,
    shoppingLists: shoppingListsReducer,
    shoppingListItems: shoppingListItemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
