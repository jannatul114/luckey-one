
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    if (carts.indexOf(product) !== -1) {
      alert('the product have already choosen')
    }

    else {
      const newCart = [...carts, product];
      setCarts(newCart);
    }
    // if (newCart.length > 4) {
    // alert("You can't add cart more then 4 product")
    // }
    // else {
    // }
  }

  const [random, setRandom] = useState([]);
  const randomProduct = () => {
    let item = carts[Math.floor(Math.random() * carts.length)];
    if (item) {
      if (carts.length > 1) {
        setRandom(item)
      }
      else {
        alert('please choose more for get rangom')
      }
    }
  }

  const clearCart = () => {
    const removeItems = [];
    const removeRandom = [];
    setRandom(removeRandom)
    setCarts(removeItems)
  }


  return (
    <div className="App">
      <h1 className='text-center my-3'>Ring Chooser</h1>
      <div className='container d-flex justify-content-center my-3'>
        <div className='row d-flex justify-content-between'>
          <div className='col-md-8 product-container'>
            <div className='row'>
              {
                products.map(product => <Shop product={product} key={product.id} cartProduct={cartProduct}></Shop>)
              }
            </div>
          </div>
          <div className='cart-container col-md-4 d-flex justify-content-center cart-container'>
            <div className='bg w-100 text-center p-3 rounded-3'>
              <h4 className='fw-bold'>Selected Rings: </h4>
              <h5>Choosed for you:</h5>
              <div className='row d-flex align-items-center bg-light my-3 m-2 p-2 border border-secondary rounded-3 gy-2'>
                <div className='col-md-5'>
                  <img className='w-100 rounded' src={random.img} alt="" />
                </div>
                <div className='col-md-5'>
                  <h6 className='text-dark' placeholder='choosed item'>{random.name}</h6>
                </div>
                <div className='col-md-2'>
                  <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                </div>
              </div>
              <button className='bg-none border-2 border-primary p-2 rounded-3 m-2 btn btn-outline-primary' onClick={randomProduct}>Choose 1 for me</button>

              <button className='bg-none border-2 border-danger p-2 rounded-3 btn btn-outline-danger' onClick={clearCart}>Choose Again</button>
              {
                carts.map(cart => <Cart cart={cart} key={cart.id} randomProduct={randomProduct} random={random}></Cart>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
