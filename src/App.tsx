import { useState } from 'react';

import { Stars } from './components/Stars';

import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  
  const increasing = () => {
    if (count < 5) {
      setCount((prev) => (prev + 1));
    }
  }    
  const decreasing = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="buttons">
        <button className="btn" onClick={increasing}>+</button>
        <button className="btn" onClick={decreasing}>-</button>
      </div>
      <Stars count={count} />
    </>
  )
};

export default App;
