import './App.css';
import Counter from './components/Counter';
import FetchAllProducts from './components/FetchAllProducts';
import LoginForm from './components/LoginForm';
import FetchAllMobiles from './components/FetchAllMobiles';
import AddMobiles from './components/AddMobiles';
import MobileForm from './components/MobileForm';
import Home from './components/Home';
import FetchMobileDetails from './components/FetchMobileDetails';
import EditMobile from './components/EditMobile';
import DeleteMobile from './components/DeleteMobile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import GetAllCustomers from './components/GetAllCustomers';
import GetCustomerById from './components/GetCustomerById';
import EditCustomer from './components/EditCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import Navbar from './components/NavBar';
import GetAllMobiles from './components/GetAllMobiles';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path='/counter/' element={<Counter />} />
          <Route path='/GetAllMobiles' element={<GetAllMobiles/>}/>

          {/* Mobile Controllers */}
          <Route path='/mobile/all' element={<FetchAllMobiles />} />
          <Route path='/mobile/add' element={<AddMobiles />} />
          <Route path='/mobile/details/:id' element={<FetchMobileDetails />} />
          <Route path='/mobile/update/:id' element={<EditMobile />} />
          <Route path='/mobile/delete/:id' element={<DeleteMobile />} />

          {/* Customer Controllers */}
          <Route path='/customer/add' element={<AddCustomer />} />
          <Route path='/customer/all' element={<GetAllCustomers />} />
          <Route path='/customer/view/:id' element={<GetCustomerById />} />
          <Route path='/customer/edit/:id' element={<EditCustomer />} />
          <Route path='/customer/delete/:id' element={<DeleteCustomer />} />

          {/* Home Page */}
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
