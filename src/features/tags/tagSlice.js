import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getTags from "./tagApi";

// initialState
const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}

// thank function
export const fetchTags = createAsyncThunk('fetch/tags', async () => {
    const tags = await getTags();
    return tags;
})

// create tags slice
const tagSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
            //pending
            .addCase(fetchTags.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })

            //fulfilled
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            })

            //rejected
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.tags = [];
                state.error = action.error?.message;
            })
    }
});

export default tagSlice.reducer;