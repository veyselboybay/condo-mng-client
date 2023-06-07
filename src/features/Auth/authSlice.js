import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    user: {},
    authToken: '',
    msg: '',
    success: null,

}

// API URL
const api_url = 'http://localhost:3000/api/v1/login';

export const login = createAsyncThunk('auth/login', async (loginData,thunkAPI) => {
    try {
        const res = await axios.post(api_url, loginData);
        return res.data;
        
    } catch (error) {
        // console.log(error.response.data);
        return thunkAPI.rejectWithValue(error.response.data);
        
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getLocalStorageAuthData: async (state, action) => {
            const loadedData = action.payload;
            
            return {
                ...state,
                loadedData
            }
        },
        logoutUser: (state, action) => {
            localStorage.removeItem('user');
            return {...initialState}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.authToken = action.payload.auth_token;
            state.success = action.payload.success;
            state.msg = action.payload.msg;
            state.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(state));
        }).addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.success = action.payload.success;
            state.msg = action.payload.msg;
        })
    }
});


export const { logoutUser, getLocalStorageAuthData } = authSlice.actions;


export default authSlice.reducer;