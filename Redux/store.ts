import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import orderReducer from "./OrderDataSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    order: orderReducer,
  },
});

// ✅ Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
