import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationReducer from '../components/authentication/AuthenticationSlice';
import navigationReducer from '../components/dashboard/layout/NavigationSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    authentication: authenticationReducer,
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
