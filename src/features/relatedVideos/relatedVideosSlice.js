import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideo } from "./relatedVideoApi";

// InitialSate
const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

// create asyncThank
export const fetchRelatedVideo = createAsyncThunk('fetch/videos', async ({ tags, currentId }) => {
    const videos = await getRelatedVideo({ tags, currentId });
    return videos;
});

const videoRelatedSlice = createSlice({
    name: 'relatedVideos',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            // pending
            .addCase(fetchRelatedVideo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            // fulfilled
            .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })

            // rejected
            .addCase(fetchRelatedVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.videos = [];
                state.error = action.error?.message;
            });
    },
});

export default videoRelatedSlice.reducer;