import { configureStore } from "@reduxjs/toolkit";
import { chucknorrisApi } from "./api/chucknorrisApi";

export const store = configureStore({
  reducer: {
    [chucknorrisApi.reducerPath]: chucknorrisApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(chucknorrisApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
