import { itemType } from "../../menu-list";
import { Action } from "./Context";

export const reducer = (state: itemType[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state,action.payload];
    
    case 'increment':
      const newState = state.map((obj)=>{
          if(obj.id === action.payload){
            return {...obj, quantity: obj.quantity + 1}
          }else{ 
            return {...obj}
          };
      });
      return newState

    case 'decrement':
      const newState1 = state.map((itm)=>{
        if(itm.id === action.payload){
          return {...itm,quantity:itm.quantity-1}
        }else{ return {...itm}}
      })
      return [...newState1.filter((i)=> i.quantity > 0)]

    case 'remove':

      return state.filter(item => item.id !== action.payload);
      
    default:
      return state;
  }
};
