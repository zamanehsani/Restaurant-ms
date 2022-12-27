import React, {useReducer} from 'react'

type stateType = {
    id:number,
    name:string,
    surname:string,
}

type ActionType         = {type:string,payload:stateType}
const actions           = {INC: 'inc', DEC: 'dec'}


function reducer (state:stateType[], action:ActionType){
    switch(action.type){
        case actions.INC:
            return [action.payload]
        case actions.DEC:
            return [action.payload]
        default :
            return [action.payload]
    }
}
const ini = {id:0,name:'a', surname:'b'}
export default function Tst() {
    const [st, dispatch] = useReducer(reducer, [{...ini}])
    console.log(st)
  return (
    <div className="container p-2 text-center text-6xl">
        <h3>the state</h3>
        <div className="contianer rounded-lg text-center border border-purple-500">
            <p></p> <p></p> <p></p>
        </div> <br />

        <hr  className=' border border-purple-700'/>

        <form  onSubmit={(e)=>{e.preventDefault()}} >
            <input type="text"
            onChange={(
                e:React.FocusEvent<HTMLInputElement>)=>dispatch(
                {type:"inc", payload: {id: 1, surname: 'sd', name:e.currentTarget.value} }
                )}
            />
            <br  className='my-3'/>
            <input type="text"
            onChange={(
                e:React.FocusEvent<HTMLInputElement>)=>dispatch(
                {type:'dec', payload: {id:1, name:'sd', surname:e.currentTarget.value} }
                )}
            />
        </form>

        <br /><br />

        <hr />
        <br />
        

    </div>
  )
}

