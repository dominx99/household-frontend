import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchGroup, fetchGroups } from "./GroupAPI";

export interface Group {
  id: string,
  name: string,
}

export interface GroupState {
  groups: Group[],
  selectedGroup: Group | null,
  loading: {
    fetch: boolean,
    fetchSelectedGroup: false
  },
}

const initialState: GroupState = {
  groups: [],
  selectedGroup: null,
  loading: {
    fetch: true,
    fetchSelectedGroup: false
  },
}

export const fetchGroupsAsync = createAsyncThunk(
  "groups/fetch",
  async () => {
    const response = await fetchGroups();

    return response.data;
  }
)

export const fetchSelectedGroupAsync = createAsyncThunk(
  "groups/find",
  async (id: string) => {
    const response = await fetchGroup(id);

    return response.data;
  }
);

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
      .addCase(fetchSelectedGroupAsync.fulfilled, (state, action) => {
        state.loading.fetchSelectedGroup = false;
        state.selectedGroup = action.payload;
      })
  }
})

export const selectGroups = (state: RootState) => state.groups.groups;
export const selectFetchGroupsLoading = (state: RootState) => state.groups.loading.fetch;
export const selectedGroupGetter = (state: RootState) => state.groups.selectedGroup;

export default groupSlice.reducer;
