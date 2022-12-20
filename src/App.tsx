import React, { useState } from 'react';
import Menu from './components/menu';
import Header from './components/header';
import { orderContext, type } from './components/context/openOrder';

function App() {
  const [items, setItems] = useState<type[] | []>([])
  
  return (
    <orderContext.Provider value={{items, setItems}}>
      <div className='font-serif' >
        <Header />
        <div className='container mx-auto'>
          <h1 className="text-3xl mt-3 text-center font-bold">
            Menu </h1>
          <Menu></Menu>
        </div>
      </div>
    </orderContext.Provider>
  );
}

export default App;
