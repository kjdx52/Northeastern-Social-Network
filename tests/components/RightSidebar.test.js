import { render, screen } from '@testing-library/react';
import RightSidebar from '@/components/RightSidebar'
import React from 'react';

// Test if the RightSidebar component renders without crashing.
test('renders RightSidebar component', () => {
    render(<RightSidebar />);
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
});



// Test if the icons (RiVideoAddFill, BiSearch, CgMoreAlt) are displayed.
test('displays video, search, and more icons', () => {
    render(<RightSidebar />);
    expect(screen.getByTestId('RiVideoAddFill')).toBeInTheDocument();
    expect(screen.getByTestId('BiSearch')).toBeInTheDocument();
    expect(screen.getByTestId('CgMoreAlt')).toBeInTheDocument();
});


// Test if the Contacts component is rendered for each friend.
test('renders contacts for each friend', () => {
    render(<RightSidebar />);
    expect(screen.getByText('friend_1')).toBeInTheDocument();
    expect(screen.getByText('friend_2')).toBeInTheDocument();
    expect(screen.getByText('friend_3')).toBeInTheDocument();
});



// Verify that the correct images are rendered for each contact.
test('renders correct images for contacts', () => {
    render(<RightSidebar />);
    const images = screen.getAllByRole('img');
    images.forEach(img => {
        expect(img).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6f%2FNortheastern_seal.svg%2F1200px-Northeastern_seal.svg.png&w=96&q=75');
    });
});
