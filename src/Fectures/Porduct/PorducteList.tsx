
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { products as productsData } from "./data";
import ProductCart from "./porductCart";


export type HandleSetPductCarort = (prop1: number) => void;

const ProductList = ({ setCarts }: { setCarts: any }) => {

    const menupulatedProducts = productsData.map(product => {
        return {
            ...product,
            isFavorite: false,
        }
    })

    const [products, setProducts] = useState(menupulatedProducts)



    const handleSetProductCart: HandleSetPductCarort = (prop1: number) => {

        const isProductExist = products.find(product => product.id === prop1);

        if (!isProductExist) return;

        const updateProducts = products.map(product => {
            if (product.id === isProductExist.id) {
                return {
                    ...product,
                    // isFavorite: product.isFavorite ? false : true,
                    isFavorite: !product.isFavorite
                }
            } else {
                return product;
            }
        })

        setProducts(updateProducts);

    }


    return (
        <div className="w-[100%]  ml-[40px]   justify-items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 overflow-y-scroll no-scrollbar">

            {products.map(product => <ProductCart setProducts={handleSetProductCart} key={product.id} product={product} setCarts={setCarts} />)}


        </div>
    );
}

export default ProductList;