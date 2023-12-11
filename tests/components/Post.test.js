import Post from '@/components/Post';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Set up the test file with necessary imports and mocks
const mockPost = {
    id: '1',
    name: 'John Doe',
    timeStamp: '1 hr ago',
    post: 'Hello World!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png'
};

// Test if the Post component renders correctly with given props.
test('renders Post component with given props', () => {
    render(<Post post={mockPost} />);
    expect(screen.getByText(mockPost.name)).toBeInTheDocument();
    expect(screen.getByText(mockPost.timeStamp)).toBeInTheDocument();
    expect(screen.getByText(mockPost.post)).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', "/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6f%2FNortheastern_seal.svg%2F1200px-Northeastern_seal.svg.png&w=3840&q=75");
});


// Test if the image is conditionally rendered based on the post.image property.
test('conditionally renders image when post.image is present', () => {
    const postWithImage = {...mockPost};
    render(<Post post={postWithImage}/>);
    expect(screen.getByRole('img')).toBeInTheDocument();
});


// Test if the image is conditionally rendered based on the post.image property.
test('conditionally renders image when post.image is present', () => {
    const postWithoutImage = { ...mockPost, image: null };
    render(<Post post={postWithoutImage} />);
    expect(screen.queryByRole('img')).toBeNull();
});


// Test if the buttons for liking, commenting, and sharing are present.
test('has Like, Comment, and Share buttons', () => {
    render(<Post post={mockPost} />);
    expect(screen.getByText(/Like/i)).toBeInTheDocument();
    expect(screen.getByText(/Comment/i)).toBeInTheDocument();
    expect(screen.getByText(/Share/i)).toBeInTheDocument();
});