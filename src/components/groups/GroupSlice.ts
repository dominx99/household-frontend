import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchGroups } from "./GroupAPI";

export interface Group {
  id: string,
  name: string,
}

export interface GroupState {
  groups: Group[],
  loading: {
    fetch: boolean,
  },
}

const initialState: GroupState = {
  groups: [],
  loading: {
    fetch: true
  },
}

export const fetchGroupsAsync = createAsyncThunk(
  "groups/fetch",
  async () => {
    const response = await fetchGroups();

    return response.data;
  }
)

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroupsAsync.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.groups = action.payload;
      })
  }
})

export const selectGroups = (state: RootState) => state.groups.groups;
export const selectFetchGroupsLoading = (state: RootState) => state.groups.loading.fetch;

export default groupSlice.reducer;
