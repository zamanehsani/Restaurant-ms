// import { useReducer, createContext, useContext } from 'react';
// interface Item {
//     id: number;
//     name: string;
//   }
// type Action = { type: 'add'; payload: Item } | { type: 'remove'; payload: number };


export const a = 0;
// const reducer = (state: Item[], action: Action) => {
//   switch (action.type) {
//     case 'add':
//       return [...state, action.payload];
//     case 'remove':
//       return state.filter(item => item.id !== action.payload);
//     default:
//       return state;
//   }
// };

// export const UseReducerHook: React.FC = () => {
//   const [items, dispatch] = useReducer(reducer, []);

//   const handleAdd = () => {
//     dispatch({
//       type: 'add',
//       payload: { id: items.length + 1, name: 'new item' },
//     });
//   };

//   const handleRemove = (id: number) => {
//     dispatch({ type: 'remove', payload: id });
//   };

//   return (
//     <>
//       <button className='bg-purple-600 rounded-lg px-4 py-1 text-white' onClick={handleAdd}>Add item</button>
//       <ul>
//         {items.map(item => (
//           <li className='my-2' key={item.id + item.name}>
//             {item.name}{' '}
//             <button className='bg-red-600 px-4 py-1 rounded-lg text-white' onClick={() => handleRemove(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };




// useContext react hook

// interface Item {
//   id: number;
//   name: string;
// }

// interface Context {
//   items: Item[];
//   addItem: (item: Item) => void;
//   removeItem: (id: number) => void;
// }

// const context = createContext<Context>({
//   items: [],
//   addItem: () => {},
//   removeItem: () => {},
// });

// export const UseContxtHook: React.FC = () => {
//   const { items, addItem, removeItem } = useContext(context);

//   const handleAdd = () => {
//     addItem({ id: items.length + 1, name: 'new item' });
//   };

//   const handleRemove = (id: number) => {
//     removeItem(id);
//   };

//   return (
//     <>
//       <button onClick={handleAdd}>Add Item</button>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name}{' '}
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
