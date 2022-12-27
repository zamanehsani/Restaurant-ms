import React, { useState } from "react";

type IDType ={
    id:number,
    firstName:string,
    sureName: string
}

const initialState:IDType = {
    id:12,
    firstName: "",
    sureName: ""
}


const Test:React.FC = () => {
    const [N, setID] = useState<IDType>(initialState)
    
    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const saveFirstName = (e:React.FormEvent<HTMLInputElement>)=>{
        setID({...N,firstName:e.currentTarget.value})
    }
    const saveSurName = (e:React.FormEvent<HTMLInputElement>) =>{
        setID({...N,sureName:e.currentTarget.value})
    }

    return (
        <div className="container p-5 text-center">
            <div className="container p-2 border-2 border-purple-500 rounded-xl">
                <p className="text-7xl">ID: {N.id}</p>
                <p className="text-7xl">Name: 
                <span className="text-purple-500">{N.firstName}</span>
                </p>
                <p className="text-7xl">Surename: 
                <span className="text-purple-500">{N.sureName}</span></p>
            </div>

            <form className="m-3"
            onSubmit={submit}
            >
            <input className="text-7xl" type="text" value={N.firstName}  onChange={saveFirstName}
            placeholder="Your first name here"
             /> 

            <br className="my-5" />
            <input className="text-7xl" type="text" value={N.sureName} onChange={saveSurName}
            placeholder="Your sure name here"
            />
            </form>
        </div>
    )
}

export default Test;