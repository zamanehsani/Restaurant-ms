import SlideOver from "./SlideOver";
import { useState } from "react";

const Header= ()=>{
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="bg-slate-500">
            <SlideOver open={isOpen} click={setisOpen}/>
            <div className="container mx-auto p-2 py-5 text-white text-right" >
                <a onClick={()=>setisOpen(!isOpen)}
                className="p-2 px-3 m-2 rounded-full bg-amber-400 ">0</a>
            </div>
        </div>
    )
}

export default Header;