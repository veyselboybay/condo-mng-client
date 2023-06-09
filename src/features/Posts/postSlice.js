import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL
const baseUrl = 'http://localhost:3000/api/v1';
// INitial State
const initialState = {
    allPosts: [],
    isLoading: false,
    success: null,
    msg: ''    
}

// GET ALL POSTS FROM BACKEND API 
export const getAllPosts = createAsyncThunk('posts/all', async (authToken,thunkAPI) => {
    try {
        const res = await axios.post(baseUrl + '/posts', { auth_token: authToken });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

// CREATE A POST
export const createPost = createAsyncThunk('/post/create', async (postData, thunkAPI) => {
    try {
        const res = await axios.post(baseUrl + '/createPost', postData);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

// Create a slice
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allPosts = action.payload.posts.reverse();
            state.success = action.payload.success;
            state.msg = action.payload.msg;
        }).addCase(getAllPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.success = action.payload.success || false;
            state.msg = action.payload.msg || 'Something went wrong!';
        }).addCase(createPost.pending, (state, action) => { // create post
            state.isLoading = true;
        }).addCase(createPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.success = action.payload.success;
            state.msg = action.payload.msg;
        }).addCase(createPost.rejected, (state, action) => {
            state.isLoading = false;
            state.success = action.payload.success || false;
            state.msg = action.payload.msg || 'Something went wrong!';
        })
    }
})



export default postSlice.reducer;