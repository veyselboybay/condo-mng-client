import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./features/Auth/authSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});