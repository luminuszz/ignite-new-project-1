import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "@app/store/reducer";

const Store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
