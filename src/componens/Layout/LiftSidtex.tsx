import { IoSearchOutline } from "react-icons/io5";
import { RiFireLine, RiQuillPenAiLine } from "react-icons/ri";
import React, { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { GiBookmarklet, GiOldMicrophone } from "react-icons/gi";
import { FaLockOpen, FaRegHeart } from "react-icons/fa";
import SearchBox from "../../Fectures/search/Search";
import { TbCoinTaka } from "react-icons/tb";


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

    const [isWpenAbu, setIsSearchSho] = useState(false);

    const setIsSearch = () => {
        setIsSearchSho(!isWpenAbu)
    }

    return (
        <div className="  p-2 border-r border-r-gray-300 sm:w-[220px] h-full absolute left-0 top-0  sm:static hidden sm:block ">
            <div onClick={() => setIsSearchSho(!isWpenAbu) } className=" border-2  border-gray-300  rounded-md px-2 py-1.5 relative  hover:bg-emerald-400 shadow-md dark: text-gray-700 ">
                <IoSearchOutline className="absolute top-1/2 left-[15px] text-3 -translate-1/2 dark:text-amber-50 text-black" />
                <span className="pl-[20px] focus:outline-0 text-[13px] text-gray-600">Search book ...</span>
            </div>

            <div className="mt-2">
                <ul>
                    <ListItem title="Trending" icon={<RiFireLine className=" dark: text-amber-400 shadow-md shadow-amber-600 " />} />
                    <ListItem title="New Releases" icon={<FiFolderPlus className=" dark: text-amber-800 shadow-md shadow-amber-900 " />} />
                    <ListItem title="Coming Soon" icon={<GiOldMicrophone className="dark: text-neutral-600  shadow-md shadow-neutral-400 " />} />
                    <ListItem title="Favorites" icon={<FaRegHeart className="dark: text-red-600  shadow-md shadow-red-300 " />} />
                     <ListItem title="Filter On Page" icon={<FaLockOpen className=" dark: text-amber-400 shadow-md shadow-amber-600 " />} />
                      <ListItem title="By name" icon={<RiQuillPenAiLine  className="dark: text-red-600  shadow-md shadow-red-300 " />} />
                     <ListItem title="By ratting" icon={< GiBookmarklet className=" dark: text-amber-800 shadow-md shadow-amber-900 " />} />
                     <ListItem title=" TbCoinTaka" icon={< TbCoinTaka className="dark: text-neutral-600  shadow-md shadow-neutral-400 " />} />
                         
                </ul>
            </div>
             {isWpenAbu && <SearchBox isSearchBox = { setIsSearch} />}
        </div>
    );
}

export default LeftSidebar;