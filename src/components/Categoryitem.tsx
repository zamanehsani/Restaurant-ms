import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type PropType={
    id:number,
    name:string
}
export const CategoryItemList = (props:PropType)=>{
    
    return (
        <li className= {`rounded-full md:transition-all my-2 mx-1 p-1 md:mx-2 md:p-2 md:px-6 
         flex md:text-lg bg-slate-100 cursor-pointer`} >
            <CheckCircleIcon className=" w-8 h-8 md:mr-2 md:w-6 md:h-6"/>
            <span className="hidden md:block"> {props.name}</span>
        </li>
    )
}