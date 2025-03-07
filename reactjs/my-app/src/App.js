import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';
import MyOrder from './components/MyOrder';
import Counters from './components/Counters';
import Parent from './components/Parent';
import ParentClass from './components/ParentClass';
import Home from './components/Home';
import MailBox from './components/MailBox';
import UserHome from './components/UserHome';
import FetchAllCustomers from './components/FetchAllCustomer';
import ComponentA from './components/ComponentA';
import { createContext } from 'react';



export const myContext = createContext();

function App() {

  const loggedInUser =  {name:'Naveen', role : 'admin' }


  return (
    <div className="App">

      <myContext.Provider value={loggedInUser}>
      <Header />
      {/* <Content /> */}
      {/* <MyOrder /> */}
      {/* <Counters /> */}
      {/* <ParentClass /> */}
      {/* <FetchAllMobiles /> */}
      {/* <Home />   */}
      {/* <MailBox /> */}
      {/* <ComponentA user = {loggedInUser}/> */}

      <ComponentA/>
      <UserHome />
      <Footer />
      </myContext.Provider>
    </div>
  );
}

export default App;
