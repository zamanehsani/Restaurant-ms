import { count } from "console";
import { createContext}  from "react";
import { itemType } from "../../menu-list";

export const orderContext = createContext<{
    items:itemType[];
    setItems: (value:any)=>void;
}>({
    items:[],
    setItems:()=>{},
});
 