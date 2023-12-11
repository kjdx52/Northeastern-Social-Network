import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for handling post data in the Redux store.
 *
 * Includes reducers for adding and updating post data.
 */
export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: [], // Initial state of the post slice, an empty array
    },
    reducers: {
        // Reducer for adding a single post
        addPost: (state, action) => {
            state.value.push(action.payload);
        },
        // Reducer for adding multiple posts
        addAllPost: (state, action) => {
            console.log("AddAllPost Action");
            state.value.push(...action.payload); // Spreads the posts and adds them to the state
        },
        // Reducer for updating all posts
        updateAllPost: (state, action) => {
            console.log("UpdateAllPost Action");
            state.value = action.payload; // Replaces the current post state with new data
        },
    },
});

// Action creators automatically generated for each reducer function
export const { addPost, addAllPost, updateAllPost } = postSlice.actions;

// Selector for accessing the post data from the state
export const selectPost = (state) => state.post.value;

export default postSlice.reducer;
