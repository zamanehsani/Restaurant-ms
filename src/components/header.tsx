import SlideOver from "./SlideOver";
import { useState,useContext } from "react";
import { orderContext } from "./context/openOrder";

const Header= ()=>{
    const {items} = useContext(orderContext);

    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="bg-slate-500">
            <SlideOver open={isOpen} click={setisOpen}/>
            <div className="container mx-auto p-2 py-5 text-white text-right" >
                <button onClick={()=>setisOpen(!isOpen)}
                className="p-2 px-5 m-2 rounded-full bg-amber-400">{items.length}</button>
            </div>
        </div>
    )
}

export default Header;