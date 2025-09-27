import type { ISetCartQuantity } from "../../componens/Layout/MianLayout";
import type { ICart } from "../interface/interface";
import CartItem from "./CartItem";

function CartList({carts, setCarts,}: {carts: ICart[];  setCarts: ISetCartQuantity; }) {
    return ( <>
    {carts.map(carts =>  <CartItem setCarts={ setCarts} key={carts.id} cart={carts} />)}
   
    </> );
}

export default CartList;