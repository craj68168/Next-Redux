import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import ProfileReducer from "./slices/profile";
import logger from 'redux-logger'
import { Action } from "redux";

const makeStore = () =>
  configureStore({
    reducer: {
      profile: ProfileReducer,
      // middleware: (getDefaultMiddleware:any) => getDefaultMiddleware().concat(logger),
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
