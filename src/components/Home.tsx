import React, { useState } from 'react';
import Menu from './menu';
import Header from './header';
import { orderContext } from './context/openOrder';
import { itemType } from '../menu-list';

function Home() {
  const [items, setItems] = useState<itemType[] | []>([])
  
  return (
    <orderContext.Provider value={{items, setItems}}>
      <div className='font-serif' >
        <Header />
        <div className='container mx-auto'>
          <h1 className="text-3xl mt-3 text-center font-bold">
            HOME 
          </h1>
        </div>
      </div>
    </orderContext.Provider>
  );
}

export default Home;
