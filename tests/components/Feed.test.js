// Feed.test.js

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { createStore } from "redux";

// Mock reducers
const mockReducer = () => ({
    post: {
        value: [], // Initial value
    },
});

// Create mock store
const mockStore = createStore(mockReducer);

const mockSession = {
    user: {
        // mock user
    },
    expires: Date.now() + 999999,
};

import Feed from "../../components/Feed";

describe("Feed", () => {
    it("renders CreatePost component", () => {
        render(
            <Provider store={mockStore}>
                <SessionProvider session={mockSession}>
                    <Feed />
                </SessionProvider>
            </Provider>
        );

        // Find CreatePost component and test it
    });
});
