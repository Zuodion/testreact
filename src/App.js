import './App.css';
import AnotherComponent from './AnotherComponent';
import { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    addCount(5);
  },[])

  function addCount(value) {
    setCount(old => old+value);
  }

  return (
    <div className="App">
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => addCount(1) }>
        Натисни мене
      </button>
      <AnotherComponent count={count}/>
    </div>
  );
}

export default App;
