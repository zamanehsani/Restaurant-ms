import userEvent from "@testing-library/user-event"
import { type } from "@testing-library/user-event/dist/type"
import React from "react"
import { isPropertySignature } from "typescript"

// simple props
type propsType ={
    name:string
}
export const Greeting = (props:propsType)=>{
    return (
        <>
            <h1>Welcome, {props.name}</h1>
        </>
    )
}


// object props
type ObjType ={
    id:number,
    name:string,
    is_active: boolean
}
export const Objects =(props:ObjType)=>{
    return (
        <>
            <h1>this is object: {props.id}, {props.name}, {props.is_active}</h1>
        </>
    )
}

// array props
type ArrType = {
    ar:number[]
}
export const Arr =(props:ArrType)=>{
    return (
        <>
        <h1> Array: {props.ar}</h1>
        </>
    )
}

// object type
type Obj1Type = {
    obj:{
        id:number,
        name:string,
        comments:string[]
    }[]
}

export const ObjArr = (props:Obj1Type)=>{
    return (
        <>
        <h1>
            {props.obj.map((i)=>(
                <p key={i.id}>id: {i.id} ---- name: {i.name} --- comments: {i.comments.map((j)=>(<>j:{j}</>))}</p>
            ))}
        </h1>
        </>
    )
}

// function props

type FuncType ={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=> void
}

export const Button =(props:FuncType)=>{
    return (
        <button 
        onClick={props.handleClick}
        className=" p-2 px-4 bg-slate-400 "
        >
        Click me
        </button>
    )
}

type InptChnge ={
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Inchnge=(props:InptChnge)=>{
    return (
        <input 
        onChange={props.handleChange}
        type="text"
         />
    )
}
// function props and events

type userType = {
    user: string | null,
    setUser: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const InChange = (props:userType) => {
    return (
        <>
            <h1>user name: {props.user}</h1>
    
            <input 
            type="text" 
            onChange={props.setUser}
            placeholder="enter name" 
            />
        </>
    )
}