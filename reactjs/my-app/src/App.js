import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';
import MyOrder from './components/MyOrder';
import Counters from './components/Counters';
import Parent from './components/Parent';
import ParentClass from './components/ParentClass';
import FetchAllMobiles from './components/FetchAllMobiles';
import Home from './components/Home';
import MailBox from './components/MailBox';
import UserHome from './components/UserHome';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
      {/* <MyOrder /> */}
      {/* <Counters /> */}
      {/* <ParentClass /> */}
      {/* <FetchAllMobiles /> */}
      {/* <Home />   */}
      {/* <MailBox /> */}

      <UserHome />
      <Footer />
    </div>
  );
}

export default App;
