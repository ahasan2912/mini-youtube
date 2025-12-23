import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags: [],
    search: "",
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectedTags: (state, action) => {
            state.tags.push(action.payload);
        },
        removedTags: (state, action) => {
            const removeIndex = state.tags.indexOf(action.payload);
            if (removeIndex !== -1) {
                state.tags.splice(removeIndex, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
            console.log(state.search);
        }
    }
});

export default filterSlice.reducer;
export const { selectedTags, removedTags, searched } = filterSlice.actions;
