import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHandBackFist } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { themModeHeanDiler } from "../../Utils/themModeHeanDiler";

function Hearder() {

    const [ theme,setTheme ] = useState("dark-mode");
    // console.log(theme, setTheme);
 
    const ClickHeanDiler = () => {
        // themModeHeanDiler("dark-mode");\
        setTheme((abu) => {
            if(abu == "dark-theme") {
                return "light-theme"
            }else{
                return "dark-theme"
            }
        })
    }

    useEffect(() => {
        themModeHeanDiler(theme) 
    }, [theme])
        
    
    return ( 
        <header className="py-3 border-b border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <samp className="font-bold text-2xl dark:text-emerald-400">BOOK SELL {theme}</samp>
        
            <div className="flex gap-x-2">
                    <button onClick={ClickHeanDiler} className="p-2 border border-gray-300 cursor-pointer rounded-md"><MdOutlineLightMode className="dark:text-emerald-400"/></button>
                
                    <button className="p-2 border border-gray-300 cursor-pointer rounded-md"><MdOutlineShoppingCart  className=" dark:text-emerald-400"/></button>
            
                    <button className="p-2 border border-gray-300 cursor-pointer rounded-md"><FaRegHandBackFist  className="dark:text-emerald-400"/></button>
    
            </div>
        </div> 
        </header>
     );
}

export default Hearder;