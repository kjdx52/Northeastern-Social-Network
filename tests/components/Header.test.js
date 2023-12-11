import { render, screen } from '@testing-library/react';
import Header from '@/components/Header'
import React from 'react';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
}));


// Test the rendering of the header when the user is logged in.
test('renders Header with user session', () => {
    const mockSession = {
        user: {
            name: 'John Doe',
            image: null
        }
    };
    useSession.mockReturnValue({ data: mockSession, status: 'authenticated' });

    render(<Header />);
    expect(screen.getByText('John')).toBeInTheDocument();

});



// Test the rendering of the header when the user's profile image is not available.
test('renders Header with default icon when user image is not available', () => {
    const mockSessionWithoutImage = {
        user: {
            name: 'Jane Doe'
        }
    };
    useSession.mockReturnValue({ data: mockSessionWithoutImage, status: 'authenticated' });

    render(<Header />);
    expect(screen.getByText('Jane')).toBeInTheDocument();
    // Test for default icon here, assuming you have a test-id or some way to identify it
});



