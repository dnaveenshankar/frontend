import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchAllProduct from './components/product/FetchAllProduct';
import FetchProduct from './components/product/FetchProduct';
import AddProduct from './components/product/AddProduct';
import FetchAllPosts from './components/posts/FetchAllPost'
import FetchPost from './components/posts/FetchPost';
import AddPost from './components/posts/AddPost';
import AddComment from './components/comments/AddComment';
import FetchAllComments from './components/comments/FetchAllComments';
import FetchComment from './components/comments/FetchComment';
import AddOrEditComment from './components/comments/AddorEditComment';
import DeleteComment from './components/comments/DeleteComment';
import AddOrEditPost from './components/posts/AddorEditPost';
import DeletePost from './components/posts/DeletePost';
import Home from './components/Home';
import AddOrEditProduct from './components/product/AddorEditProduct';
import DeleteProduct from './components/product/DeleteProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path='/' element={<Home />} />
          {/* Product Service */}
          <Route path='product/all' element={<FetchAllProduct />} />
          <Route path='product/view/:id' element={<FetchProduct />} />
          <Route path='product/add' element={<AddProduct />} />
          <Route path='product/edit/:id?' element={<AddOrEditProduct />} />
          <Route path='product/delete/:id' element={<DeleteProduct />} />

          {/* Post Service */}
          <Route path='post/all' element={<FetchAllPosts />} />
          <Route path='post/view/:id' element={<FetchPost />} />
          <Route path='post/add' element={<AddPost />} />
          <Route path='post/delete/:id' element={<DeletePost />} />
          <Route path='post/edit/:id?' element={<AddOrEditPost />} />
          {/* Comment Service */}
          <Route path='comment/all' element={<FetchAllComments />} />
          <Route path='comment/view/:id' element={<FetchComment />} />
          <Route path='comment/add' element={<AddComment />} />
          <Route path='comment/edit/:id?' element={<AddOrEditComment />} />
          <Route path='comment/delete/:id' element={<DeleteComment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
