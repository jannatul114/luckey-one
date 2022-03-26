
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';


// document.getElementById('choose-btn').style.display = 'none';
// document.getElementById('delete-btn').style.display = 'none';
function App() {
  // const d = document.querySelector('#choose-btn').style.display = 'none';
  // console.log(d);
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
      if (carts.length >= 4) {
        alert("You can't add cart more then 4 product")
      }
      else {
        const newCart = [...carts, product];
        setCarts(newCart);
      }

    }

  }

  const [random, setRandom] = useState([]);
  const randomProduct = () => {
    let item = carts[Math.floor(Math.random() * carts.length)];

    if (item) {
      if (carts.length > 1) {
        setRandom(item)
        // document.querySelector('#choose-btn').style.display = 'block';
      }
      else {
        alert('please choose more for get rangom')
        // document.querySelector('.buttons').style.display = 'none';

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
      <h1 className='text-center my-3 text-primary'>Ring Chooser</h1>
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


              <div className=' border border-primary bg-light rounded-3'>
                <h5 className='p-2 text-primary'>Choosed for you:</h5>
                <div className='row d-flex align-items-center  my-3 m-2 p-2 gy-2'>
                  <div className='col-md-5'>
                    <img className='w-100 rounded' src={random.img} alt="" />
                  </div>
                  <div className='col-md-7'>
                    <h6 className='text-dark' placeholder='choosed item'>{random.name}</h6>
                  </div>

                </div>
              </div>



              <button id='choose-btn' className='buttons bg-none border-2 border-primary p-2 rounded-3 m-2 btn btn-outline-primary' onClick={randomProduct}>Choose 1 for me</button>

              <button id='delete-btn' className='buttons bg-none border-2 border-danger p-2 rounded-3 btn btn-outline-danger' onClick={clearCart}>Choose Again</button>
              {
                carts.map(cart => <Cart cart={cart} key={cart.id} randomProduct={randomProduct} random={random}></Cart>)
              }
            </div>
          </div>
        </div>
      </div>


      <div className='my-4'>
        <h2 className='text-center fw-bold my-3'>Questions</h2>
        <div className='container d-flex justify-content-center'>
          <div className='w-75'>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h4> How React Works?</h4>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    First, React creates a virtual dome, also called a soft copy of the Real Dom. Virtual domes are cleaner, lighter, simpler than real domes. It is able to quickly capture changes to JavaScript code. Virtual Dome uses diff algorithm. The diff algorithm compares the virtual dome and the real dome. And lists the changes of the 2 domes. And finally it is shown in UI
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h4> Props Vs State</h4>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    some diffrence between props and state are:
                    <ul>
                      <li>State holds information about a components on the other hand, Props are use to pass data from one component to another component.</li>
                      <li>State are mutable but Props are immutable so we can't change props.</li>
                      <li>State can not make components reusable but props are diffrent. Props make components reusable..</li>
                      <li>Props are accesible by the child component on the other hand State cannot be accessed by child components.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
