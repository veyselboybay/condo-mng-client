import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/v1';

const initialState = {
    parking: [],
    cars: [],
    isLoading: false,
    success: null,
    msg: '' 
}

// GET ALL THE PARKING INFO
export const getParkings = createAsyncThunk('parking/getAllParking', async (authToken,thunkAPI) => {
    try {
        const res = await axios.post(baseUrl + "/parking", { auth_token: authToken });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

const parkingSlice = createSlice({
    name: 'parking',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getParkings.pending, (state) => {
            state.isLoading = true;
        }).addCase(getParkings.fulfilled, (state, action) => {
            const { parkings, cars, success, msg } = action.payload;
            state.isLoading = false;
            state.success = success;
            state.msg = msg;
            state.cars = cars;
            state.parking = parkings;
        }).addCase(getParkings.rejected, (state, action) => {
            const { success, msg } = action.payload;
            state.isLoading = false;
            state.success = success;
            state.msg = msg;
        })
    }
})


export default parkingSlice.reducer;