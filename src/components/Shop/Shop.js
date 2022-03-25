import React from 'react';

const Shop = (props) => {
    const { product } = props;
    const { name, id, img, price } = product;
    return (
        <div className='col-md-4 col-sm-4 col-12 my-3'>
            <div className="card" style={{ width: '15rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Shop;