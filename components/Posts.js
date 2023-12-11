import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAllPost, selectPost } from "../public/src/features/postSlice";
import Post from "./Post";

/**
 * Posts component fetches and displays a list of posts.
 */
const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);

    useEffect(() => {
        // Function to fetch posts data from the API
        const fetchData = () => {
            axios
                .get("https://neu-social-service-6dff5aa08698.herokuapp.com/api/v1/post")
                .then((response) => {
                    console.log(response.data);
                    // Dispatch action to update the posts state in Redux
                    dispatch(updateAllPost(response.data));
                })
                .catch((error) => {
                    console.error("Error fetching posts:", error);
                });
        };

        fetchData();
    }, []); // Dependency array includes posts to refetch when posts data changes

    return (
        <div>
            {/* Mapping through the posts array and rendering Post components for each item */}
            {posts
                .slice()
                .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp))
                .map((post) => (
                    <Post post={post} key={post.id} />
                ))}
        </div>
    );
};

export default Posts;
