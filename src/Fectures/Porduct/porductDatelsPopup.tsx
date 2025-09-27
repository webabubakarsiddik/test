/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegHeart } from "react-icons/fa";
import { products, type IProduct } from "./data";
import { GiEternalLove } from "react-icons/gi";

import type { HandleSetPductCarort } from "./PorducteList";

function PorductDatalsPorpup({isPorductDatalsPorpup, isporduct, setCarts, setProducts}: {isPorductDatalsPorpup: () => void; isporduct: IProduct, setCarts: any, setProducts:HandleSetPductCarort}) {
    return (
         <div className="w-full h-full fixed top-0 left-0 bg- fill-black/30 backdrop-blur-md  flex z-10 justify-center items-center">
                <div className="w-[620px] h-[233px] overflow-hidden bg-white rounded-md border-1 border-b-gray-400 shadow-md shadow-gray-400 opacity-95  flex items-center">
                <div className="w-[calc(100%-160px)] p-4">
                    <h2 className="text-2xl fond-bold">
                       {isporduct.name}
                    </h2>
                    <span className="text-[12px]">
                        Comedy/Drama
                    </span>
                    <p className="text-sm mt-2 mb-3 text-gray-600 ">
                        {isporduct.description}
                    </p>

                    <div className="flex">
                            <button onClick={() => setCarts(products)} className=" border-2 cursor-pointer h-[35px] mr-4 w-[calc(100%-58px)] rounded-sm text-sm text-black bg-emerald-400  shadow-md">{isporduct.price} | Add to cart</button>
                             <button onClick={() =>  setProducts(products.id)} className="w-[35px] cursor-pointer h-[35px] border border-theme rounded-md flex justify-center items-center text-emerald-400 shadow-md">
                                 {products.isFavorite?
                                <GiEternalLove className=" text-emerald-400"/>
                                 :<FaRegHeart className="dark: text-emerald-400" />}
                              
                         </button>
                        <button onClick={() => isPorductDatalsPorpup()} className="h-[35px] px-5 bg-emerald-400 rounded-md ml-4 cursor-pointer">close</button> 
                    </div>
                 </div>
                <div className="w-[160px]">
                     <img className="w-[160px]" src={isporduct.image} alt="" />
                </div>
                
            </div>
         </div> 
    );
}

export default PorductDatalsPorpup;