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
const api_url = 'http://localhost:3000';

// LOGIN FUNCTION
export const login = createAsyncThunk('auth/login', async (loginData,thunkAPI) => {
    try {
        const res = await axios.post(api_url+"/api/v1/login", loginData);
        return res.data;
        
    } catch (error) {
        // console.log(error.response.data);
        return thunkAPI.rejectWithValue(error.response.data);
        
    }
})

// SIGN UP FUNCTION
export const signUp = createAsyncThunk('auth/signUp', async (signupData,thunkAPI) => {
    try {
        const res = await axios.post(api_url+"/api/v1/signup", signupData);
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
        // LOGIN REDUCER
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
        }).addCase(signUp.pending, (state, action) => {// SIGN UP REDUCER
            state.isLoading = true;
        }).addCase(signUp.fulfilled, (state, action) => {
            state.isLoading = false;
        }).addCase(signUp.rejected, (state, action) => {
            state.isLoading = false;
            state.success = action.payload.success;
            state.msg = action.payload.msg;
        })

        // SIGN UP REDUCER

        
    }
});


export const { logoutUser, getLocalStorageAuthData } = authSlice.actions;


export default authSlice.reducer;