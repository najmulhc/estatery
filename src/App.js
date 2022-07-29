import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [realEstate, setRealEstate] = useState([]);
  useEffect(() => {
     fetch("real-estate.json").then(res=> res.json()).then(data => setRealEstate(data))
  }, [])
  console.log(realEstate)
  return (
    <div className="App">
     
      
    </div>
  );
}

export default App;
