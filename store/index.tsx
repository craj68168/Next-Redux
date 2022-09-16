import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import user from "../store/slices/userSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const combineReducer = combineReducers({
  counter,
  user,
});


const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        value: state?.counter.value + action.payload.counter.value,
      },
      user: {
        users: [...action.payload.user.users, ...state?.user?.users],
      },
    };

    return nextState;
  } else {
    return combineReducer(state, action);
  }
};
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, masterReducer);

const makeStore: any = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  });
 export const persistor = persistStore(makeStore())

export const wrapper = createWrapper(makeStore, { debug: true });
export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
