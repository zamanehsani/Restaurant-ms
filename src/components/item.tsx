import { itemType } from "../menu-list";

const Item = (props:itemType) =>{
    return (
        <div className=" m-3 font-bold border border-slate-500 whitespace-normal ">
            <img src={props.image} />
            <div className="container text-center p-3">
                <h3 className="font-black text-2xl">{props.name}</h3>
                <p className="text-slate-500">{props.details}</p>
                <span className="p-2 px-6 text-xl font-black">{props.price}</span>
                <br />
                <button className="px-12 bg-slate-500 p-3 my-1 text-white"> ADD</button>
            </div>
        </div>
    )
}

export default Item;