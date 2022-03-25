
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
      <div className='container d-flex justify-content-center my-3'>
        <div className='row d-flex justify-content-between'>
          <div className='col-md-9'>
            <div className='row'>
              {
                products.map(product => <Shop product={product} key={product.id}></Shop>)
              }
            </div>
          </div>
          <div className='cart-container col-md-3'>
            <p> this is a cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
