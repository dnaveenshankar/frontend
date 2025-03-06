import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import AddMobile from './components/AddMobiles';
import DeleteMobile from './components/DeleteMobile';
import EditCustomer from './components/EditCustomer';
import EditMobile from './components/EditMobile';
import FetchMobileDetails from './components/FetchMobileDetails';
import GetAllCustomers from './components/GetAllCustomers';
import GetAllMobiles from './components/GetAllMobiles';
import GetCustomerById from './components/GetCustomerById';
import NavBar from './components/NavBar';
import AddItemToCart from './components/AddItemToCart';
import PlaceOrder from './components/PlaceOrder';
import ViewOrder from './components/ViewOrder';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <div className="container mt-4">
        <Routes>

          {/* Mobile Controllers */}
          <Route path='/mobile/add' element={<AddMobile/>}/>
          <Route path='/mobile/all' element={<GetAllMobiles/>}/>
          <Route path='/mobile/details/:id' element={<FetchMobileDetails />} />
          <Route path='/mobile/edits/:id' element={<EditMobile />} />
          <Route path='/mobile/delete/:id' element={<DeleteMobile />} />

          {/* Customer Controllers */}
          <Route path='/customer/add' element={<AddCustomer />} />
          <Route path='/customer/all' element={<GetAllCustomers />} />
          <Route path='/customer/view/:id' element={<GetCustomerById />} />
          <Route path='/customer/edit/:id' element={<EditCustomer />} />
          <Route path='/customer/delete/:id' element={<DeleteCustomer />} />

          {/* Cart Controllers */}
          <Route path='/cart/add' element={<AddItemToCart />} />

          {/* Order Controller */}
          <Route path='/order/checkout' element={<PlaceOrder/>}/>
          <Route path='/order/view' element={<ViewOrder/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
