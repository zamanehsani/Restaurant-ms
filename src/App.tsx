
import Menu from './components/menu';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import { context } from './components/context/Context';
import { useReducer } from 'react';
import {reducer} from './components/context/reducer'



function App() {
  const [items, dispatch] = useReducer(reducer, []);
  return (
    <context.Provider value={{items, dispatch}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export default App;
