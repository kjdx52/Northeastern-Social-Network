import React from "react";

/**
 * Sidebaritem component used to display an item in the sidebar.
 *
 * @param {{ Icon: React.ComponentType, value: string }} props - The properties of the sidebar item.
 *   - Icon: The icon component to be displayed.
 *   - value: The text value or label associated with the icon.
 */
const Sidebaritem = ({ Icon, value }) => {
    return (
        // Container for the sidebar item
        <div
            className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer"
            data-testid="MdGroups"
        >
            {/* Icon for the sidebar item */}
            <Icon className="h-8 w-8 text-red-300" />

            {/* Text value or label for the sidebar item */}
            <p className="hidden sm:inline-flex font-medium">{value}</p>
        </div>
    );
};

export default Sidebaritem;
