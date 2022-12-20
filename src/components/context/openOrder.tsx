import { count } from "console";
import { createContext}  from "react";
export interface type{
    name:string,
    price:number,
    quantity:number
}

export const orderContext = createContext<{
    items:type[];
    setItems: (value:any)=>void;
}>({
    items:[],
    setItems:()=>{} 
});
 