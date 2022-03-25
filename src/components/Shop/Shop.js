import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Shop = (props) => {
    const { product } = props;
    const { name, id, img, price } = product;
    return (
        <div className='col-md-4 col-sm-4 col-12 my-3'>
            <div className="card" style={{ width: '15rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <a href="#" className="btn btn-secondary">Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></a>
                </div>
            </div>
        </div>
    );
};

export default Shop;