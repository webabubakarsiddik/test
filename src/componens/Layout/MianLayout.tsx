/* eslint-disable @typescript-eslint/no-unused-vars */

// import ProductCart from "../../Fectures/Porduct/porductCart";
import { useState } from "react";
import ProductList from "../../Fectures/Porduct/PorducteList";
// import IndexPage from "../../Pagas";
import Foodtex from "./Foodtex";
import Hearder from "./Hearder";
import LeftSidebar from "./LiftSidtex";
import type { ICart } from "../../Fectures/interface/interface";

export type ISetCartQuantity = (prop1: number, id:number) => void;

function MianLayout() {
   

    const [carts, setCarts] = useState<ICart[]>([])

    // const totolPrice =carts.reduce((total: number , cart)=> {
    //     return total + cart.price * cart.quantity;
    // },0)

    const quantityhandaler =(prop: number, id:number) => {
        const isCartExist = carts.find(cart => cart.id === id)
        if(!isCartExist) return;

        if(prop < 1 ) return;
        const quantityAbu = carts.map(cart => {
            if(cart.id === isCartExist.id){
                return {
                    ...cart,
                    quantity: prop
                }
            }else {
                return cart
            }
        })
        setCarts(quantityAbu)
    }
   
    const handleSetCarts = (cart: ICart) => {
       
        const newCart: ICart = {
            id: cart.id,
            name: cart.name,
            price: cart.price,
            image: cart.image,
            quantity: 1,
             total: 1, 
             //(){
            // return total + cart.price * cart.quantity;
            // }
            
        }
        const isCartExist = carts.find(c => c.id === cart.id)

        if(!isCartExist){
             setCarts([...carts, 
            newCart
        ]);
           
    }
 }
       
    console.log(carts);
    
    return (
     <>
        <Hearder setCarts={ quantityhandaler} carts={carts}/>
        <div className="">
                <div className="flex relative ">
                    <LeftSidebar />
                    <ProductList setCarts={handleSetCarts}></ProductList>
                    {/* <ProductCart /> */}
                    {/* <IndexPage/> */}
                    
                
                </div>
            </div>

        < Foodtex />
        
    </>
     
    );
}

export default MianLayout;
