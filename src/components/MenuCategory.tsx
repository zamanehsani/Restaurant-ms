import { menuList } from "../menu-list"
// import Item from "./MenuItem"
import Item from "./Menuitems"

export const CategoryItems =()=>{
    return (
        <>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center">
            {menuList.map((j)=>(<Item key={j.id} {...j}/>) )}
        </div>
            
        </>
    )
}