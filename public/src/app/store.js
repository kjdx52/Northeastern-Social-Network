import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";

/**
 * Configures and exports the Redux store.
 *
 * The store is configured with reducers from different slices of the application state.
 * In this case, there is a single slice for posts.
 */
export default configureStore({
    // The 'reducer' field defines how to update the state based on actions.
    reducer: {
        // The 'post' slice of state is managed by 'postReducer', imported from 'postSlice.js'.
        post: postReducer,
    },
});
