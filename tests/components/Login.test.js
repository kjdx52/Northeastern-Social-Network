import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../../components/Login";
import { signIn } from "next-auth/react";

// Mock the signIn function from next-auth/react
jest.mock("next-auth/react", () => ({
    signIn: jest.fn(),
}));

// Render the Login component before each test
beforeEach(() => {
    render(<Login />);
});

// Test to check if the Login component renders without crashing
test("renders Login component without crashing", () => {
    // Expect the button texts to be in the document
    expect(
        screen.getByText("Sign in with Northeastern Account")
    ).toBeInTheDocument();
    expect(screen.getByText("Guest? Sign in with Google")).toBeInTheDocument();
});

// Test to check if the Northeastern University logo renders with correct properties
test("renders Northeastern University logo with correct properties", () => {
    // Find the image and check its attributes
    const image = screen.getByAltText("Northeastern University");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
        "src",
        "/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6f%2FNortheastern_seal.svg%2F1200px-Northeastern_seal.svg.png&w=640&q=75"
    );
    expect(image).toHaveAttribute("height", "240");
    expect(image).toHaveAttribute("width", "240");
});

// Test to check if signIn function is called with 'azure-ad' argument when relevant button is clicked
test("calls signIn with azure-ad when Northeastern Account button is clicked", () => {
    const northeasternButton = screen.getByText(
        "Sign in with Northeastern Account"
    );
    fireEvent.click(northeasternButton);
    expect(signIn).toHaveBeenCalledWith("azure-ad");
});

// Test to check if signIn function is called with 'google' argument when relevant button is clicked
test("calls signIn with google when Google sign-in button is clicked", () => {
    const googleButton = screen.getByText("Guest? Sign in with Google");
    fireEvent.click(googleButton);
    expect(signIn).toHaveBeenCalledWith("google");
});

// Test to check if the Northeastern Account sign-in button has the correct styling
test("Northeastern Account sign-in button has correct styling", () => {
    const northeasternButton = screen.getByText(
        /Sign in with Northeastern Account/i
    );
    expect(northeasternButton).toHaveStyle("width: 460px");
    expect(northeasternButton).toHaveStyle("display: flex");
});
