import React from "react";
import Sidebaritem from "./Sidebaritem";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import { useSession } from "next-auth/react";

/**
 * Sidebar component, displaying user information and various sidebar items.
 */
const Sidebar = () => {
    const { data: session } = useSession();

    return (
        <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
            {/* User information section */}
            {session.user.image ? (
                <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
                    <Image
                        src={session.user.image}
                        height={40}
                        width={40}
                        className="rounded-full cursor-pointer"
                        alt={"photo_id"}
                    />
                    <p className="hidden sm:inline-flex font-medium">
                        {session?.user.name}
                    </p>
                </div>
            ) : (
                <Sidebaritem Icon={AiOutlineUser} value={session?.user.name} />
            )}

            {/* Sidebar items */}
            <Sidebaritem Icon={ImUsers} value="Friends" />
            <Sidebaritem Icon={MdGroups} value="Groups" />
            {/* Uncomment below lines for additional sidebar items */}
            {/* <Sidebaritem Icon={AiOutlineShop} value="MarketPlace"/>
               <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch"/>
               <Sidebaritem Icon={BsStopwatch} value="Memeries"/>
               <Sidebaritem Icon={MdOutlineExpandMore} value="See more"/> */}
        </div>
    );
};

export default Sidebar;
