import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FetchAllProducts from './components/FetchAllProducts';
import LoginForm from './components/LoginForm';
import FetchAllMobiles from './components/FetchAllMobiles';
import AddMobiles from './components/AddMobiles';

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <FetchAllProducts /> */}
      <FetchAllMobiles /> <hr/>
      <AddMobiles /> <hr/>
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
