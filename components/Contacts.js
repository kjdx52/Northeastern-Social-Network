import Image from "next/image";
import React from "react";

/**
 * Contacts component represents an individual contact item.
 * It displays the contact's profile picture, name, and online/offline status.
 *
 * @param {string} name - Name of the contact.
 * @param {string} src - Source URL of the contact's profile picture.
 * @param {string} status - Online/offline status of the contact.
 */
const Contacts = ({ name, src, status }) => {
    return (
        <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl cursor-pointer relative">
            {/* Profile Picture */}
            <Image
                src={src}
                height={40}
                width={40}
                className="rounded-full cursor-pointer"
                alt="Profile Picture"
            />
            {/* Contact Name */}
            <p className="hidden sm:inline-flex text-sm">{name}</p>

            {/* Online Status Indicator */}
            {status === "online" && (
                <div
                    data-testid="status-indicator-online"
                    className="bg-green-500 h-4 w-4 rounded-full absolute left-5 bottom-2 border-2"
                ></div>
            )}

            {/* Offline Status Indicator */}
            {status === "offline" && (
                <div
                    data-testid="status-indicator-offline"
                    className="bg-gray-500 h-4 w-4 rounded-full absolute left-5 bottom-2 border-2"
                ></div>
            )}
        </div>
    );
};

export default Contacts;
