import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FetchAllProduct from './components/product/FetchAllProduct';
import FetchProduct from './components/product/FetchProduct';
import AddProduct from './components/product/AddProduct';
import FetchAllPosts from './components/posts/FetchAllPost'
import FetchPost from './components/posts/FetchPost';
import AddPost from './components/posts/AddPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Product Service */}
          <Route path='product/all' element={<FetchAllProduct/>}/>
          <Route path='product/view/:id' element={<FetchProduct/>}/>
          <Route path='product/add' element={<AddProduct/>}/>
          {/* Post Service */}
          <Route path='post/all' element={<FetchAllPosts/>}/>
          <Route path='post/view/:id' element={<FetchPost/>}/>
          <Route path='post/add' element={<AddPost/>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
