import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type PropType={
    id:number,
    name:string
}
export const CategoryItemList = (props:PropType)=>{
    
    return (
        <li className= {`rounded-full mx-2 my-3 p-2 px-6 
         flex text-lg bg-slate-100 cursor-pointer`} >
            
            <CheckCircleIcon className="w-6 h-6 mr-2 "/>
            
            {props.name}
        </li>
    )
}