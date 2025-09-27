import { RiDeleteBinFill } from "react-icons/ri";
import type { ICart } from "../interface/interface";
import type { ISetCartQuantity } from "../../componens/Layout/MianLayout";

function CartItem({cart, setCarts,}: {cart: ICart;  setCarts:ISetCartQuantity;}) {

    return ( 
         <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="w-[50px]">
                    <img className="w-[50px]" src={cart.image} alt="pic" />
                    </div>
                </th>
                 <td className="px-6 py-4">
                   <span>{cart.name}</span>
                   <p>Comedy/Drama</p>
                </td>
                <td className="px-6 py-4">
                  {cart.price}
                </td>
                <td className="px-6 py-4">
                   <div className="gap-3 flex bg-gray-200 opacity-65 p-1.5 rounded-[20px] font-bold text-black justify-center">
                     <span onClick={() => setCarts(cart.quantity - 1, cart.id)} className=" cursor-pointer">-</span>
                    <span> {cart.quantity}</span>
                    <span onClick={() => setCarts(cart.quantity + 1, cart.id)} className=" cursor-pointer">+</span> 
                   
                 </div>
                </td>
                <td className="px-6 py-4">
                {cart.total}           
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-bold text-orange-600 hover:underline"><RiDeleteBinFill className="text-[20px] text-orange-600"/></a>
                </td>
            </tr>
     );
}

export default CartItem;