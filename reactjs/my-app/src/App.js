import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';
import MyOrder from './components/MyOrder';
import Counters from './components/Counters';
import Parent from './components/Parent';
import ParentClass from './components/ParentClass';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Content/> */}
      {/* <MyOrder/> */}
      {/* <Counters/> */}
      <ParentClass/>
      <Footer/>
    </div>
  );
}

export default App;
