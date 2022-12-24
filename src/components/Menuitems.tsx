import { itemType } from "../menu-list";
import { useContext, useState } from "react";
import { orderContext } from "./context/openOrder";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, PlusIcon } from '@heroicons/react/24/outline'



const Item = (props:itemType) =>{
    const {items, setItems} = useContext(orderContext);
    const [added, setAdded] = useState(0);

    const Increment = (itm:itemType)=>{
        // chose to update
            const newArr = items.map((obj)=>{
               if(obj.id === itm.id){
                    setAdded(obj.quantity + 1)
                    return {...obj, quantity: obj.quantity + 1}
                }else{ 
                    return {...obj}
                };
            });
            setItems([...newArr])
    }

    const Decrement = (itm:itemType)=>{
        const newArr = items.map((obj)=>{
            if(obj.id === itm.id){
                setAdded(obj.quantity - 1)
                return {...obj, quantity: obj.quantity - 1}
            }else{ 
                return {...obj}
            };
        });
        setItems([...newArr.filter((i)=> i.quantity > 0)])
        
    }
    
    const Update = (itm:itemType)=>{
        setItems([...items, itm])
        setAdded(added+1)
    }

    return (
        <div key={props.id} className=" m-3 font-bold border border-slate-500 whitespace-normal ">
            <img src={props.image} />
            <div className="container text-center p-3">
                <h3 className="font-black text-2xl">{props.name}</h3>
                <p className="text-slate-500">{props.details}</p>
                <span className="p-2 px-6 text-xl font-black">{props.price}</span>
                <br />
                <br />
                { (added > 0) ? (
                    <div className="flex justify-center">
                        <span 
                        onClick={()=> {
                            Increment({ ...props, quantity:1})
                        }}
                        className="bg-blue-600 text-white font-bold p-2"> 
                            <ChevronDoubleUpIcon className="h-6 w-6" />
                         </span>
                        <span className=" bg-white p-2 px-4">{added}</span>
                        <span 
                        onClick={()=> {
                            Decrement({...props, quantity:1})
                        }}
                        className="bg-red-600 text-white font-bold p-2 "> 
                            <ChevronDoubleDownIcon className="h-6 w-6" />
                        </span>
                    </div>

                ):
        
                (<button  
                onClick={()=> {
                    Update({...props, quantity:1})
                }}
                className="px-6 bg-blue-600 p-2 text-white"> 
                    <PlusIcon className="h-6 w-6 " />
                 </button>)
                }
            

            </div>
        </div>
    )
}

export default Item;