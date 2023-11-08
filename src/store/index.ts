import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./reducers/auth";
// import serviceReducer from "./serviceSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // service: serviceReducer,
  },

  middleware: (getDefaultMiddleware: any) => {
    if (process.env.NODE_ENV !== "production") {
      return getDefaultMiddleware().concat(logger);
    }
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
