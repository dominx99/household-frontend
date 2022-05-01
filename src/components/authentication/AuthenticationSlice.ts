import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authenticate } from "./AuthenticationAPI";

export interface AuthenticationCredentials {
  email: string,
  password: string,
}

export type AuthenticatedType = {
  accessToken: string,
}

export interface AuthenticationState {
  authenticated: AuthenticatedType | null,
}

const initialState: AuthenticationState = {
  authenticated: null,
}

export const authenticateAsync = createAsyncThunk(
  "authentication/authenticate",
  async (authenticationCredentials: AuthenticationCredentials) => {
    const response = await authenticate(authenticationCredentials);

    return response.data;
  }
)

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
})

export default authenticationSlice.reducer;
