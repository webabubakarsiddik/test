import { GiBookmarklet } from "react-icons/gi";
import { TbCoinTaka } from "react-icons/tb";
import { RiQuillPenAiLine } from "react-icons/ri";
import { FaLockOpen } from "react-icons/fa6";

interface ListItemProps {
    title: string;
    icon: React.ReactNode;
}


const ListItem: React.FC<ListItemProps> = ({ title, icon })  => {
    return (
        <li>
            <button className=" px-3 mb-2 py-1.5 border-2 border-gray-300 flex items-center w-full rounded-md cursor-pointer hover:bg-emerald-400 shadow-md dark: text-gray-700 ">
                {icon}
                <span className="ml-3 dark:text-amber-50">{title}</span>
            </button>
        </li>
    )
}






function RigheSide() {
    return (

      <div className="p-2 border-l border-l-gray-300 w-[220px] h-full  no-scrollbar overflow-y-auto absolute right-2 top-0">
          <ListItem title="Filter On Page" icon={<FaLockOpen className=" dark: text-amber-400 shadow-md shadow-amber-600 " />} />
         <ListItem title="By name" icon={<RiQuillPenAiLine  className="dark: text-red-600  shadow-md shadow-red-300 " />} />
        <ListItem title="By ratting" icon={< GiBookmarklet className=" dark: text-amber-800 shadow-md shadow-amber-900 " />} />
        <ListItem title=" TbCoinTaka" icon={< TbCoinTaka className="dark: text-neutral-600  shadow-md shadow-neutral-400 " />} />
     
    
      </div>
    );
}

export default RigheSide;