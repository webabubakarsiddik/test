
// import ProductCart from "../../Fectures/Porduct/porductCart";
import ProductList from "../../Fectures/Porduct/PorducteList";
// import IndexPage from "../../Pagas";
import Foodtex from "./Foodtex";
import Hearder from "./Hearder";
import LeftSidebar from "./LiftSidtex";
import RigheSide from "./righeSit";

function MianLayout() {
    return (
     <>
        <Hearder/>
        <div className="">
                <div className="flex relative h-[calc(100vh-100px)]">
                    <LeftSidebar />
                    <ProductList></ProductList>
                    {/* <ProductCart /> */}
                    {/* <IndexPage/> */}
                         <RigheSide />
                
                </div>
            </div>
 

        < Foodtex />
        
    </>
     
    );
}

export default MianLayout;
