import { useReducer, useContext, createContext, useState } from 'react';

interface Item {
  id: number;
  name: string;
}

type Action =
  | { type: 'add'; payload: Item }
  | { type: 'remove'; payload: number }
  | { type: 'reset' };

const reducer = (state: Item[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(item => item.id !== action.payload);
    case 'reset':
      return [];
    default:
      return state;
  }
};

interface Context {
  items: Item[];
  dispatch: React.Dispatch<Action>;
}

const context = createContext<Context>({
  items: [],
  dispatch: () => {},
});

export const Example: React.FC = () => {
  const [items, dispatch] = useReducer(reducer, []);
  return (
    <context.Provider value={{ items, dispatch }}>
      <ItemList />
      <ItemForm />
      <ResetButton />
    </context.Provider>
  );
};

const ItemList: React.FC = () => {
  const { items } = useContext(context);
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const ItemForm: React.FC = () => {
  const { dispatch } = useContext(context);
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({ type: 'add', payload: { id: Date.now(), name } });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

const ResetButton: React.FC = () => {
  const { dispatch } = useContext(context);
  return <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>;
};
