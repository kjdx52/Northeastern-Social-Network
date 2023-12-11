import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import CreatePost from '../../components/CreatePost';

// Mock external modules
jest.mock('next-auth/react');
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('CreatePost Component', () => {
  beforeEach(() => {
    // Mocking the return value of useSession
    useSession.mockReturnValue({
      data: {
        user: {
          name: 'John Doe',
          image: '/path/to/image.jpg',
        },
      },
    });
    // Mocking the return value of useDispatch
    useDispatch.mockReturnValue(jest.fn());
  });

  it('renders without crashing', () => {
    render(<CreatePost />);
  });

  it('should display the form and input elements', () => {
    render(<CreatePost />);
    const inputElement = screen.getByPlaceholderText(/What's on your mind, John Doe\?/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should display an image upload button', () => {
    render(<CreatePost />);
    // Since the actual button is hidden and the icon acts as the button,
    // we check for the icon that's clicked for uploading images.
    const uploadIcon = screen.getByText('Photo/Video');
    expect(uploadIcon).toBeInTheDocument();
  });
});
