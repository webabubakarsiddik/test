
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ProductCart = () => {
    return (
        <div className="border border-gray-300 p-1  hover:bg-gray-300 opacity-75">
           <img src="./public/image (1).jpg" alt="" />
            <h4 className="text-[14px] dark:text-white">Once Upon a Time... in Hollywood</h4>
            <span className="text-[12px] dark:text-white">Comedy/Drama</span>
            <div className="flex gap-x-1 my-3">
                <FaStar className="text-[10px] text-theme dark: text-emerald-400" />
                <FaStar className="text-[10px] text-theme dark: text-emerald-400" />
                <FaStar className="text-[10px] text-theme dark: text-emerald-400" />
                <FaStar className="text-[10px] text-theme dark: text-emerald-400" />
                <FaStar className="text-[10px] text-theme dark: text-emerald-400" />
            </div>
            <div className="flex">
                <button className=" border-2 cursor-pointer h-[35px] mr-4 w-[calc(100%-58px)] rounded-sm text-sm text-black bg-emerald-400  shadow-md ">$140 | Add to cart</button>
                <button className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center text-emerald-400 shadow-md">
                    <FaRegHeart className="dark: text-emerald-400" />
                </button>
            </div>
        </div>
    )
}

export default ProductCart;