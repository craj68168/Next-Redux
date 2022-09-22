import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface AuthState {
  name: string | null;
}

const initialState: AuthState = {
  name: null,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.profile.name) {
        return state;
      }
      state.name = action.payload.profile.name;
    },
  },
});

export const { setProfileData } = ProfileSlice.actions;

export const selectProfile = (state: AppState) => state?.profile.name;

export default ProfileSlice.reducer;
