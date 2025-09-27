/* eslint-disable prefer-const */



import type { ISetCartQuantity } from "../../componens/Layout/MianLayout";
import type { ICart } from "../interface/interface";
import CartList from "./CartList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CartPorpup({isscrollY,carts, setCarts, }: {isscrollY: () => void; carts: ICart[];  setCarts: ISetCartQuantity;}) {
  let isindex = carts. length > 0 ? true : false;
    return (
         <div className="w-full h-screen fixed top-0 left-0 bg-white/30 backdrop-blur-md  flex z-10 justify-center items-center">
             <div className="w-[920px] h-[450px] overflow-hidden bg-white rounded-md border-1 border-b-gray-400 shadow-md shadow-gray-400 opacity-65 ">
                     <h2 className="text-center text-2xl font-bold mt-3 mb-[60px]">Your Cart</h2>
                   {!isindex && <div className="flex justify-center items-center h-[300px]">
                    <h2 className="text-2xl font-bold">NO YOUR DATA FOUND</h2>
                   </div>}
                        <span  onClick={() => isscrollY()} className=" flex justify-center mb-[30px] text-2xl font-bold bg-emerald-400 py-2 rounded-[100%]">FOR YOUR CART BUTTON </span>
                      
    <div className="flex gap-2">
  {/* Left side - Table */}
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[640px] h-[300px] overflow-y-scroll ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
        <tr>
          <th scope="col" className="px-6 py-3">Product name</th>
          <th scope="col" className="px-6 py-3">Product Time</th>
          <th scope="col" className="px-6 py-3">Price</th>
          <th scope="col" className="px-6 py-3">Quantity</th>
          <th scope="col" className="px-6 py-3">Total</th>
        </tr>
      </thead>
      <tbody>
        {/*  row */}
     < CartList setCarts={ setCarts} carts={carts}/>
         
      </tbody>
    </table>
  </div>

  {/* Right side - Order summary */}
  <div className="w-[250px] bg-neutral-300 py-8 px-6 rounded-md">
    <div className="border-b border-gray-400 mb-6">
      <span className="font-bold ml-10">Order summary</span>
    </div>
    <div className="flex justify-between mb-3">
      <span>Shipping</span>
      <span>$300</span>
    </div>
    <div className="flex justify-between mb-8">
      <span>Subtotal</span>
      <span className="text-emerald-400">Free</span>
    </div>
    <div className="flex justify-between bg-gray-400 px-5 py-2 rounded-[8px] mb-3">
      <span>Total</span>
      <span>$500</span>
    </div>
    <button  className="w-full bg-emerald-400 py-2 rounded-[8px] font-bold hover:bg-emerald-800">
      Checkout
    </button>
</div>
</div>



      </div>
 </div>


     );

}

export default CartPorpup;





      