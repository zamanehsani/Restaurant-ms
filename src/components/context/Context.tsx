
import { createContext}  from "react";
import { itemType, menuList } from "../../menu-list";

export const actions={
    INCREMENT   :'increment',
    DECREMENT   : 'decrement',
    ADD         : 'add',
    REMOVE      : 'remove'
}


export type Action =
| { type: 'add';        payload: itemType }
| { type: 'increment';  payload: number }
| { type: 'decrement';  payload: number }
| { type: 'remove';     payload:number }

interface Context {
    items: itemType[];
    dispatch: React.Dispatch<Action>;
}

export const context = createContext<Context>({
    items: [],
    dispatch: () => {},
});
