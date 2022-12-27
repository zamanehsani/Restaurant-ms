import { itemType } from "../menu-list";
import { useContext, useState } from "react";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, PlusIcon } from '@heroicons/react/24/outline'
import { context } from "./context/Context";

const Item = (props:itemType) =>{
    const {dispatch} = useContext(context);
    const [added, setAdded] = useState(0);

    const handleIncrement = (itm:itemType)=>{
        dispatch({ type: 'increment', payload: itm.id });
        setAdded(added + 1)
    }

    const handleDecrement = (itm:itemType)=>{
        dispatch({ type: 'decrement', payload:itm.id });
        setAdded(added - 1)
    }
    
    const handleAdd = (itm:itemType)=>{
        dispatch({ type: 'add', payload: { ...itm} });
        setAdded(added+1)
    }

    return (
        <div key={props.id} className=" m-3 font-bold border border-slate-500 whitespace-normal ">
            <img src={props.image} alt={props.name} />
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
                            handleIncrement({ ...props, quantity:1})
                        }}
                        className="bg-blue-600 text-white font-bold p-2"> 
                            <ChevronDoubleUpIcon className="h-6 w-6" />
                         </span>
                        <span className=" bg-white p-2 px-4">{added}</span>
                        <span 
                        onClick={()=> {
                            handleDecrement({...props, quantity:1})
                        }}
                        className="bg-red-600 text-white font-bold p-2 "> 
                            <ChevronDoubleDownIcon className="h-6 w-6" />
                        </span>
                    </div>

                ):
        
                (<button  
                onClick={()=> {
                    handleAdd({...props, quantity:1})
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