import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';
import MyOrder from './components/MyOrder';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Content/> */}
      
      <MyOrder/>
      <Footer/>

    </div>
  );
}

export default App;
