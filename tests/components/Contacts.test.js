import React from "react";
import { render, screen } from "@testing-library/react";
import Contacts from "../../components/Contacts";

describe("Contacts Component", () => {
    it("renders without crashing", () => {
        render(<Contacts
            name="friend_1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
            status="online"
        />);
    });

    // Test for rendering the component with required props
    it("renders the Contacts component with name and image", () => {
        render(
            <Contacts
                name="John Doe"
                src="/path/to/image.jpg"
                status="online"
            />
        );
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        // Since Next.js Image is difficult to test directly, we might check for alt text or other attributes if you have them.
    });

    // Test for online status indicator
    it("shows online status when status is online", () => {
        render(
            <Contacts
                name="John Doe"
                src="/path/to/image.jpg"
                status="online"
            />
        );
        // const statusIndicator = screen.getByTestId("status-indicator-online");
        const statusIndicator = screen.getByTestId("status-indicator-online");
        expect(statusIndicator).toBeInTheDocument();
    });

    // Test for offline status indicator
     it("shows offline status when status is offline", () => {
        render(
            <Contacts
                name="Jane Doe"
                src="/path/to/image.jpg"
                status="offline"
            />
        );
        const statusIndicator = screen.getByTestId("status-indicator-offline");
        expect(statusIndicator).toBeInTheDocument();
    });
});
