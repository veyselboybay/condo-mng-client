import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./features/Auth/authSlice";
import postSlice from "./features/Posts/postSlice";
import parkingSlice from "./features/Parking/parkingSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        parking: parkingSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});