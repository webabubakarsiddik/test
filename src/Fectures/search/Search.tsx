/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaSearch } from "react-icons/fa";
import { SlClose } from "react-icons/sl";

const SearchBx = () => {
    return(
           <div className="flex px-[30px] bg-emerald-400 p/2 mb-3">
                <div className="w-[50px]">
                    <img className="w-[50px]" src="./public/image (1).jpg" alt="" />
                </div>
                <div className="ml-[30px]">
                    <strong className="text-[15px] text-background: #000000;">Lorem ipsum book name here</strong>
                    <p className="text-[10px] block">Lorem ipsum book name here</p>
                    <strong>BDT: 200 TK</strong>
                </div>
            </div>
    )
}

function SearchBox({isSearchBox}: any) {
    return ( 
    <div className="w-full h-screen fixed top-0 left-0 bg-white/30 backdrop-blur-md  flex z-10 justify-center ">
        <div className="w-[620px] h-[500px] py-5 bg-white rounded-md mt-[60px]  border-1 border-b-gray-400 shadow-md shadow-gray-400 opacity-65  ">
            <div className="relative px-5 border-b border-b-gray-300 pb-3">
                <FaSearch className="absolute top-1.5 "/>
                <input className="w-full pl-5  focus:outline-0" type="text" placeholder="Search book ..." />
                <SlClose onClick={() =>  isSearchBox()} className="absolute -top-3 right-2 text-lg cursor-pointer "/>
            </div>
            <div className="h-[120px] flex items-center justify-center">
            <p>No data found</p>
            </div>
        <div className="overflow-y-scroll no-scrollba h-[240px]">
            <SearchBx />
            <SearchBx />
            <SearchBx />
            <SearchBx />
            <SearchBx />
            <SearchBx />
          
          
            
        </div>
    </div> 
</div> );
}

export default SearchBox;