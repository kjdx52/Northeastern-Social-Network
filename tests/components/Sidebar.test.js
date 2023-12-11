import { render, screen } from '@testing-library/react';
import Sidebar from '@/components/Sidebar'
import React from 'react';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react');


// Test the rendering of the sidebar when the user is logged in.
test('renders Sidebar with user session', () => {
    const mockSession = {
        user: {
            name: 'John Doe',
            image: null
        }
    };
    useSession.mockReturnValue({ data: mockSession, status: 'authenticated' });

    render(<Sidebar />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();

});



// Test the rendering when the user's profile image is not available.
test('renders Sidebar with user name and default icon when image is not available', () => {
    const mockSessionWithoutImage = {
        user: {
            name: 'Jane Doe'
        }
    };
    useSession.mockReturnValue({ data: mockSessionWithoutImage, status: 'authenticated' });

    render(<Sidebar />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
});



// Test if the sidebar items are displayed correctly.
test('displays sidebar items correctly', () => {
    const mockSession = {
        user: {
            name: 'John Doe',
            image: 'https://example.com/john-doe.jpg'
        }
    };
    useSession.mockReturnValue({ data: mockSession, status: 'authenticated' });

    render(<Sidebar />);
    expect(screen.getByText('Friends')).toBeInTheDocument();
    expect(screen.getByText('Groups')).toBeInTheDocument();
    // Test for the presence of other Sidebaritem components
});



// Test if the Sidebar component matches the snapshot for consistency over time.
test('Sidebar component matches snapshot', () => {
    const mockSession = {
        user: {
            name: 'John Doe',
            image: 'https://example.com/john-doe.jpg'
        }
    };
    useSession.mockReturnValue({ data: mockSession, status: 'authenticated' });

    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
});
