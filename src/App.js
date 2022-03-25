
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
  const [products, setProduct] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  const cartProduct = (product) => {
    const newCart = [...carts, product];
    console.log(newCart);
    setCarts(newCart);
  }
  return (
    <div className="App">
      <h1 className='text-center my-3'>Ring Chooser</h1>
      <div className='container d-flex justify-content-center my-3'>
        <div className='row d-flex justify-content-between'>
          <div className='col-md-8'>
            <div className='row'>
              {
                products.map(product => <Shop product={product} key={product.id} cartProduct={cartProduct}></Shop>)
              }
            </div>
          </div>
          <div className='cart-container col-md-4 d-flex justify-content-center'>
            <div className='bg w-100 text-center p-3'>
              <h4 className='fw-bold'>Selected Rings: </h4>
              <button className='bg-none border-2 border-primary p-2 rounded-3 m-2'>Choose 1 for me</button>
              <button className='bg-none border-2 border-danger p-2 rounded-3'>Choose Again</button>
              {
                carts.map(cart => <Cart cart={cart} key={cart.id}></Cart>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
