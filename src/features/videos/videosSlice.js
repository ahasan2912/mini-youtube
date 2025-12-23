import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi";

// InitialSate
const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

// create asyncThank
export const fetchVideo = createAsyncThunk('fetch/videos', async () => {
    const videos = await getVideos();
    return videos;
})

const videoSlice = createSlice({
    name: 'video',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            // pending
            .addCase(fetchVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            // fulfilled
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })

            // rejected
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.videos = [];
                state.error = action.error?.message;
            });
    },
});

export default videoSlice.reducer;