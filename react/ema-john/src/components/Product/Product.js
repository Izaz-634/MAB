import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Features from './Features';


const Product = (props) => {
    const { img, name, seller, price, stock,features } = props.product;
    // console.log(features);
    return (
        <div className='product'>
            <div className='left'>
                <img src={img} alt="" />
            </div>
            <div className='right'>
                <h4>{name}</h4>
                <p>By: {seller}</p>
                <div className="row1">
                    <div>
                        <p>${price}</p>
                        <p>Only {stock} left in stock - order soon</p>
                        <button className='btn' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    </div>
                    <div className='col'>

                        <h5>Features:</h5>
                        <Features features={features}></Features>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;