import { itemType } from "../../menu-list";


export const reducerTypes = {
    INCREMENT   : 'increment',
    DECREMENT   : 'decrement',
    ADD         : 'add',
    REMORE      : 'remove',
}

export type actionType = { type: 'add', payload: itemType }
| { type: 'increment',  payload: number }
| { type: 'decrement',  payload: number }
| { type: 'remove',     payload:number }

export interface Context {
    items: itemType[];
    dispatch: React.Dispatch<actionType>;
}

