import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Shop = (props) => {
    const { product, cartProduct } = props;
    const { name, img, price } = product;
    return (
        <div className='col-md-4 col-sm-4 col-12 my-3 '>
            <div className="card mx-auto" style={{ width: '13rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <button className="btn btn-secondary" onClick={() => cartProduct(product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Shop;