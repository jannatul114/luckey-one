import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const { img, name } = cart;

    return (
        <div>
            <div className='row d-flex align-items-center bg-light my-3 m-2 p-2 border border-secondary rounded-3 gy-2'>
                <div className='col-md-5'>
                    <img className='w-100 rounded' src={img} alt="" />
                </div>
                <div className='col-md-5'>
                    <h6>{name}</h6>
                </div>
                <div className='col-md-2'>
                    <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default Cart;