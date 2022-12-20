import React from "react";
import Item from "./item";
import menuList from "../menu-list";

const Menu:React.FC = () =>{
    return (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center">
                {menuList.map((j,key)=>(<Item key={key} {...j}/>) )}
            </div>
    )
}

export default Menu;