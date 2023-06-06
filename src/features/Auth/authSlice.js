import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: {
        firstName: 'Veysel',
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
});


export default authSlice.reducer;