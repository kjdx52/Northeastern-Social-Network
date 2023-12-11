import { render, screen } from '@testing-library/react';
import Sidebaritem from '@/components/Sidebaritem'
import React from 'react';
import { MdGroups } from 'react-icons/md'; // Example icon import



// Test if the Sidebaritem component renders correctly with given props.
test('renders Sidebaritem with icon and value', () => {
    render(<Sidebaritem Icon={MdGroups} value="Groups" />);
    expect(screen.getByText('Groups')).toBeInTheDocument();
    // Test for the icon, assuming you have a test-id or some way to identify the icon
});



// Test if the icon is rendered correctly.
test('renders the provided icon', () => {
    render(<Sidebaritem Icon={MdGroups} value="Groups" />);
    const icon = screen.getByTestId('MdGroups'); // Add data-testid="MdGroups" to your icon in the component
    expect(icon).toBeInTheDocument();
});



// Test if the text value is rendered correctly.
test('renders the text value', () => {
    render(<Sidebaritem Icon={MdGroups} value="Groups" />);
    expect(screen.getByText('Groups')).toBeInTheDocument();
});



// Test if the Sidebaritem component matches the snapshot.
test('Sidebaritem component matches snapshot', () => {
    const { asFragment } = render(<Sidebaritem Icon={MdGroups} value="Groups" />);
    expect(asFragment()).toMatchSnapshot();
});