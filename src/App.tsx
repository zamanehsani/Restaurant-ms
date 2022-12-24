
import Menu from './components/menu';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Test from './components/testing/test';
import { orderContext } from './components/context/openOrder';
import { itemType } from './menu-list';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState<itemType[] | []>([])
  return (
    <orderContext.Provider value={{items, setItems}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>} />
          <Route path="/testing" element={<Test />} />
        </Routes>
      </Router>
    </orderContext.Provider>
  );
}

export default App;
