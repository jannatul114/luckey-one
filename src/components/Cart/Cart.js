import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const { img, name } = cart;
    console.log(cart.name);
    return (
        <div>
            <div className='row d-flex align-items-center bg-light my-3 m-2 p-2 border border-secondary rounded-3'>
                <div className='col-md-8'>
                    <h5>{name}</h5>
                </div>
                <div className='col-md-4'>
                    <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Cart;