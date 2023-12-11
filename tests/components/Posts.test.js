import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import postReducer from '@/public/src/features/postSlice'
import Posts from '@/components/Posts'
import { addPost, addAllPost, updateAllPost } from '@/public/src/features/postSlice'

jest.mock('axios');


// Test the initial state of the postSlice.
test('should return the initial state', () => {
    expect(postReducer(undefined, {})).toEqual({ value: [] });
});



// Test adding a single post.
test('should handle a post being added to an empty list', () => {
    const previousState = { value: [] };
    const newPost = { id: 1, name: 'John Doe', timeStamp: '2023-01-01', post: 'Hello World!' };
    expect(postReducer(previousState, addPost(newPost))).toEqual({
        value: [newPost],
    });
});



// Test adding multiple posts.
test('should handle multiple posts being added', () => {
    const previousState = { value: [] };
    const newPosts = [{ id: 1, post: 'Post 1' }, { id: 2, post: 'Post 2' }];
    expect(postReducer(previousState, addAllPost(newPosts))).toEqual({
        value: newPosts,
    });
});



// Test updating all posts.
test('should handle updating all posts', () => {
    const previousState = { value: [{ id: 1, post: 'Old Post' }] };
    const updatedPosts = [{ id: 2, post: 'New Post' }];
    expect(postReducer(previousState, updateAllPost(updatedPosts))).toEqual({
        value: updatedPosts,
    });
});



// Mock axios to return fake post data and test if Posts renders the posts correctly.
test('renders posts from the API', async () => {
    const mockPosts = [
        { id: 1, name: 'John Doe', timeStamp: '2023-01-01', post: 'Hello World!' },
        // ... other mock posts
    ];

    axios.get.mockResolvedValue({ data: mockPosts });

    const store = configureStore({ reducer: { post: postReducer } });

    render(
        <Provider store={store}>
            <Posts />
        </Provider>
    );

    await waitFor(() => {
        mockPosts.forEach((post) => {
            expect(screen.getByText(post.post)).toBeInTheDocument();
        });
    });

});






