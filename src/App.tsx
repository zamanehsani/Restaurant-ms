import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
function App() {

  return (
    <div className='font-serif' >
      <Header />
      <div className='container mx-auto'>
        <h1 className="text-3xl mt-3 text-center font-bold">
          Menu </h1>
        <Menu></Menu>
      </div>
    </div>
  );
}

export default App;
