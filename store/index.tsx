import { configureStore } from "@reduxjs/toolkit";
import user from "../store/slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'user',
  storage,
}
const persistedUser = persistReducer(persistConfig, user);
export const store =  configureStore({
  reducer: persistedUser,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
export const persistor = persistStore(store)

