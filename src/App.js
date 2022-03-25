
import { useEffect, useState } from 'react';
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  return (
    <div className="App">
      <h1 className='text-center my-3'>Ring Chooser</h1>
      <div className='container d-flex justify-content-center my-3'>
        <div className='row d-flex justify-content-between'>
          <div className='col-md-8'>
            <div className='row'>
              {
                products.map(product => <Shop product={product} key={product.id}></Shop>)
              }
            </div>
          </div>
          <div className='cart-container col-md-3 d-flex justify-content-end'>
            <div className='bg w-100 text-center p-3'>
              <h4 className='fw-bold'>Selected Rings: </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
