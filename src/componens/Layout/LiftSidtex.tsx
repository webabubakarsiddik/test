import { IoSearchOutline } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import React from "react";
import { FiFolderPlus } from "react-icons/fi";
import { GiOldMicrophone } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";


interface ListItemProps {
    title: string;
    icon: React.ReactNode;
}


const ListItem: React.FC<ListItemProps> = ({ title, icon })  => {
    return (
        <li>
            <button className="px-3 mb-2 py-1.5 border-2 border-gray-300 flex items-center w-full rounded-md cursor-pointer hover:bg-emerald-400 shadow-md dark: text-gray-700 ">
                {icon}
                <span className="ml-3 dark:text-amber-50">{title}</span>
            </button>
        </li>
    )
}


function LeftSidebar() {
    return (
        <div className="p-2 border-r border-r-gray-300 w-[220px] h-full absolute left-0 top-0">
            <div className=" border-2  border-gray-300  rounded-md px-2 py-1.5 relative  hover:bg-emerald-400 shadow-md dark: text-gray-700 ">
                <IoSearchOutline className="absolute top-1/2 left-[15px] text-3 -translate-1/2 dark:text-amber-50 text-black" />
                <input className="pl-[20px] focus:outline-0 text-[13px] text-gray-600" type="search" placeholder="Search book ..." />
            </div>

            <div className="mt-2">
                <ul>
                    <ListItem title="Trending" icon={<RiFireLine className=" dark: text-amber-400 shadow-md shadow-amber-600 " />} />
                    <ListItem title="New Releases" icon={<FiFolderPlus className=" dark: text-amber-800 shadow-md shadow-amber-900 " />} />
                    <ListItem title="Coming Soon" icon={<GiOldMicrophone className="dark: text-neutral-600  shadow-md shadow-neutral-400 " />} />
                    <ListItem title="Favorites" icon={<FaRegHeart className="dark: text-red-600  shadow-md shadow-red-300 " />} />
                </ul>
            </div>
        </div>
    );
}

export default LeftSidebar;