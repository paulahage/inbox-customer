import { configureStore } from "@reduxjs/toolkit";
import ticket from "./reducers/ticket";

export const store = configureStore({
  reducer: {
    ticket
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;