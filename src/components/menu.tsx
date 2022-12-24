import React, { useEffect, useState } from "react";
import { category, menuList} from "../menu-list";
import Header from "./header";
import { CategoryItemList } from "./Categoryitem";
import Item from "./Menuitems";


const Menu:React.FC = () =>{

    return (
        <div className="text-center">
            <Header/>


            <div className="flex">
                {/* this is the right side nav for the category section */}
                <div className="w-40 h-screen bg-slate-400">
                    <ul>
                        {category.map((i)=>(
                            <CategoryItemList key={i.id} {...i} />
                        ))}
                    </ul>
                </div>

                {/* this is the for the menu items list */}
                <div className=" bg-slate-100 flex-1"> 
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center">
                        {menuList.map((itm)=>(
                            <Item key={itm.id} {...itm}/>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Menu;