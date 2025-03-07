import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FetchAllProduct from './components/product/FetchAllProduct';
import FetchProduct from './components/product/FetchProduct';
import AddProduct from './components/product/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/FetchAll' element={<FetchAllProduct/>}/>
          <Route path='/fetch/:id' element={<FetchProduct/>}/>
          <Route path='/add' element={<AddProduct/>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
