import Image from "next/image";
import React, { useState, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { addPost } from "../public/src/features/postSlice";
import { useDispatch } from "react-redux";

const CreatePost = () => {
    // Endpoint for posting data
    const NEU_SOCIAL_NETWORK_ENDPOINT = "https://neu-social-service-6dff5aa08698.herokuapp.com/api/v1/post";
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    // Function to trigger file input when photo/video icon is clicked
    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    // Function to read and set the image for posting
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (readerEvent) => {
                setImageToPost(readerEvent.target.result);
            };
        }
    };

    // Function to remove the selected image
    const removeImage = () => {
        setImageToPost(null);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        const formData = new FormData();

        formData.append("file", imageToPost);
        formData.append("post", inputRef.current.value);
        formData.append("name", session?.user.name);
        formData.append("email", session?.user.email);
        formData.append("profilePic", session?.user.image);

        // Post data to the server
        axios
            .post(NEU_SOCIAL_NETWORK_ENDPOINT, formData, {
                headers: { Accept: "application/json" },
            })
            .then((response) => {
                inputRef.current.value = "";
                dispatch(addPost(response.data));
                removeImage();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="bg-white rounded-md shadow-md text-gray-500 p-2 divide-y">
            {/* User profile image or placeholder icon */}
            <div className="flex p-4 space-x-2 items-center">
                {session.user.image ? (
                    <Image
                        src={session.user.image}
                        height={40}
                        width={40}
                        className="rounded-full cursor-pointer"
                        alt="User profile image"
                    />
                ) : (
                    <AiOutlineUser
                        size={20}
                        className="lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
                    />
                )}

                {/* Input field for creating a post */}
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
                        type="text"
                        ref={inputRef}
                        placeholder={`What's on your mind, ${session?.user.name}?`}
                    />
                    <button hidden onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>

            {/* Image preview and remove button */}
            {imageToPost && (
                <div
                    onClick={removeImage}
                    className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
                >
                    <img src={imageToPost} className="h-10 object-contain" />
                    <RiDeleteBin6Line className="h-8 hover:text-red-500" />
                </div>
            )}

            {/* Options for adding video, photos, or feelings/activities */}
            <div className="flex justify-evenly py-2">
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
                    <HiOutlineVideoCamera className="text-red-400" size={20} />
                    <p className="font-semibold text-gray-600">Live Video</p>
                </div>
                <div
                    onClick={handleClick}
                    className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md"
                >
                    <IoMdPhotos className="text-red-500" size={20} />
                    <p className="font-semibold text-gray-600">Photo/Video</p>
                    <input
                        ref={hiddenFileInput}
                        onChange={addImageToPost}
                        type="file"
                        accept="image/*"
                        hidden
                    />
                </div>
                <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
                    <BsEmojiSmile className="text-red-400" size={20} />
                    <p className="font-semibold text-gray-600">
                        Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
