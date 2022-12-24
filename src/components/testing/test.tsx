import {Arr, Button, Greeting, InChange, Inchnge, ObjArr, Objects} from './simpleProps'
import React, { useEffect, useState } from "react";

const arrobj = [
    {
        id:1,
        name:'ali',
        comments: ['23','23','45']
    },
    {
        id:2,
        name:'jee',
        comments: ['3','3','5']
    },
    {
        id:3,
        name:'zee',
        comments: ['3','23d','sd']
    },
]

const Test:React.FC = () =>{
    const [user, setUser] = useState("no name")
    return (
        <div className="container p-5 text-center">
        < Greeting name="zaman" />
        <Objects id={12} name="zmana" is_active={false}  />
        <Arr  ar={[1,2,3,4]}/>
        {/* <ObjArr obj = {arrobj} /> */}
        
        <Button handleClick={(event)=>{console.log(event.currentTarget.value)}}/>
        <br />
        <span>{user}</span>
        <br />
        <Inchnge handleChange={(event)=> setUser(event.target.value)}/>

           
        </div>
    )
}

export default Test;