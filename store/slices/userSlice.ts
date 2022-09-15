import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
interface userState {
  users: String[];
}

const initialState: userState = {
  users: ["Raj", "Minni"],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state: any, action) => {
      state.users = [...state.users,action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;
export const userValue = (state: RootState) => state?.user?.users;
export default userSlice.reducer;
