import React from "react";
import CreatePost from "./CreatePost";
import Posts from "@/components/Posts";

/**
 * The Feed component serves as a container for the social media feed.
 * It includes sections for creating a new post and displaying a list of posts.
 */
const Feed = () => {
    return (
        <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar">
            <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
                {/* Section for creating a new post. */}
                <CreatePost data-testid="create-post" />

                {/* Section for displaying a list of posts. */}
                <Posts data-testid="posts" />
            </div>
        </div>
    );
};

export default Feed;
