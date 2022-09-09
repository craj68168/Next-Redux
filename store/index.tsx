import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import user from "../store/slices/userSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combineReducer = combineReducers({
  counter,
  user,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
  } else {
    return combineReducer(state, action);
  }
};

const makeStore: any = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
