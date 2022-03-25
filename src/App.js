
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
