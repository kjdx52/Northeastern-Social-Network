import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

/**
 * RightSidebar component displays the contacts section with various interaction options.
 */
const RightSidebar = () => {
    return (
        <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
            {/* Header section with title and interaction icons */}
            <div className="flex items-center text-gray-500">
                <p className="flex text-lg font-semibold flex-grow">Contacts</p>
                <div className="flex space-x-1 px-2">
                    {/* Icons for additional functionalities like video add, search, and more */}
                    <div
                        className="rounded-full p-2 hover:bg-gray-200 cursor-pointer"
                        data-testid="RiVideoAddFill"
                    >
                        <RiVideoAddFill />
                    </div>
                    <div
                        className="rounded-full p-2 hover:bg-gray-200 cursor-pointer"
                        data-testid="BiSearch"
                    >
                        <BiSearch />
                    </div>
                    <div
                        className="rounded-full p-2 hover:bg-gray-200 cursor-pointer"
                        data-testid="CgMoreAlt"
                    >
                        <CgMoreAlt />
                    </div>
                </div>
            </div>

            {/* List of contacts */}
            {/* Each Contacts component represents an individual contact item */}
            <Contacts
                name="friend_1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
                status="online"
            />
            <Contacts
                name="friend_2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
                status="offline"
            />
            <Contacts
                name="friend_3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
                status="online"
            />
        </div>
    );
};

export default RightSidebar;
