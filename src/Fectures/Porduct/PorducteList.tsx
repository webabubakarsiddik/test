import ProductCart from "./porductCart";

const ProductList = () => {
    return (
         <div className="w-[900px] ml-[235px] grid grid-cols-3 gap-2 overflow-y-scroll no-scrollbar">
            <ProductCart />
                        <ProductCart />
                                    <ProductCart />      
                                          <ProductCart />
                                                      <ProductCart />
                                                                  <ProductCart />






        </div>
    );
}

export default ProductList;