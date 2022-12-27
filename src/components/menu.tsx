import React, { useContext, useState, } from "react";
import { category, menuList} from "../menu-list";
import Header from "./header";
import Item from "./Menuitems";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { context } from "./context/Context";

const Menu:React.FC = () =>{
    const {items} = useContext(context)
    const [cate, setCate] = useState<number | null>(null)

    return (
        <div className="text-center">
            <Header/>
            <div className="flex">
                {/* this is the right side nav for the category section */}
                <div className="w-12 md:w-40 h-screen bg-slate-400 md:transition-all">
                    <ul>
                        {category.map((i)=>(
                            <li key={i.id}
                            onClick={()=>setCate(i.id)}
                            className= {`rounded-full md:transition-all my-2 mx-1 p-1 md:mx-2 md:p-2 md:px-6 
                                flex md:text-lg bg-slate-100 cursor-pointer`} >
                               <CheckCircleIcon className=" w-8 h-8 md:mr-2 md:w-6 md:h-6"/>
                               <span className="hidden md:block"> {i.name}</span>
                           </li>
                        ))}
                    </ul>
                </div>

                {/* this is the for the menu items list */}
                <div className=" bg-slate-100 flex-1"> 
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center">
                        {/* if the cate is null, apply no filters. */}
                        {cate ?
                            menuList.filter((i)=> i.category === cate).map((itm)=>(
                                <Item key={itm.id} {...itm}/>
                            ))
                        :
                        menuList.map((itm)=>(
                            <Item key={itm.id} {...itm}/>
                        ))
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;