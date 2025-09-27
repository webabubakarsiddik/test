/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
 import PorductDatalsPorpup from "./porductDatelsPopup";
import { useState } from "react";
import type { IProduct } from "./data";
import type { HandleSetPductCarort } from "./PorducteList";
import { GiEternalLove } from "react-icons/gi";

const ProductCart = ({product,setCarts, setProducts}: {product: IProduct; setCarts:any;  setProducts: HandleSetPductCarort; }) => {
    console.log(product);
    
      
    const [  isCartPorpup, setIsCartPorpup] =  useState(false);
    const setIsCart = () => {
        setIsCartPorpup(!isCartPorpup)
    }
   
    return (

        <div className="border border-gray-300 p-1">
           <img onClick={() => setIsCartPorpup(!isCartPorpup)} className="w-full cursor-pointer" src={product.image} alt="pic" />
            <h4 className="text-[14px] dark:text-white hover:text-emerald-400">{product.name}</h4>
            <span className="text-[12px] dark:text-white hover:text-emerald-400">{product.category}</span>
            <div className="flex gap-x-1 mb-1">

                    {Array(product.rating).fill(null).map((_, i) =>     <FaStar key={i} className="text-[10px] text-theme dark: text-amber-300" />)}
          
            </div> 
        

            <div className="flex">
                <button onClick={() => setCarts(product)} className=" border-2 cursor-pointer h-[35px] mr-4 w-[calc(100%-58px)] rounded-sm text-sm text-black bg-emerald-400  shadow-md ">{product.price} | Add to cart</button>
                <button onClick={() => setProducts(product.id)} className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center text-emerald-400 shadow-md">
                    {product.isFavorite ?
                    <GiEternalLove className=" text-emerald-400"/>
                    :<FaRegHeart className="dark: text-emerald-400" />}

                </button>
        
                 {isCartPorpup && <PorductDatalsPorpup setProducts={setProducts} setCarts={setCarts} isporduct = {product} isPorductDatalsPorpup = {setIsCart}/> }
            </div> 
        </div>

       
    )
}
export default ProductCart;
