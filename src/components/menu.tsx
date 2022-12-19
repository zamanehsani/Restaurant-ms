import React from "react";
import Item from "./item";

const Menu:React.FC = () =>{
    const ls:number[] = [1,2,3,4,5,6,7,8,9]

    return (
        <div className="container flex flex-column space-x-5 shadow shadow-md rounded-lg">
            {ls.map((i:number)=>{
                return <Item />
            })}
        </div>
    )
}

export default Menu;