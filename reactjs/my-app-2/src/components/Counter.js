import { useState } from "react";
import "./Home.css"; 

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment} className="btn btn-primary">+</button>
      <button onClick={decrement} className="btn btn-danger">-</button>
      <hr/>
    </div>
  );
}

export default Counter;
