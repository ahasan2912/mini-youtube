import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getVideo from "./videoApi";

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
}

//createThank function
export const fetchVideo = createAsyncThunk('fetch/video', async (id) => {
    const video =await getVideo(id);
    return video;
});

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.pending = true;
                state.isError = false;
            })

            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.video = {};
                state.error = action.error?.message;
            })
    }
});

export default videoSlice.reducer;