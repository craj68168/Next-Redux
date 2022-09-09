import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import user from "../store/slices/userSlice";
import { createWrapper } from "next-redux-wrapper";

const combineReducer = combineReducers({
  counter,
  user,
});

const makeStore: any = ()=> configureStore({
  reducer: combineReducer,
});

export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
