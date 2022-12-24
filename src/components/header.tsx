import SlideOver from "./SlideOver";
import { useState,useContext } from "react";
import { orderContext } from "./context/openOrder";
 import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Header= ()=>{
    const {items} = useContext(orderContext);
    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="bg-slate-300">
            <SlideOver open={isOpen} click={setisOpen}/>
            <div className="container mx-auto p-2 py-5 text-white text-right" >
                
                <button onClick={()=>setisOpen(!isOpen)}
                className="p-3 rounded-full bg-blue-600"
                >
                    <ShoppingBagIcon className="h-4 w-4"
                    />
                    <span 
                    className="absolute bg-red-500 
                    rounded-full px-2 -mt-9 border border-slate-300 "
                    >{items.length}</span>
                </button>
            </div>
        </div>
    )
}

export default Header;