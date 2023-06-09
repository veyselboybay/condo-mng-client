import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./features/Auth/authSlice";
import postSlice from "./features/Posts/postSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});