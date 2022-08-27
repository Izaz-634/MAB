import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart,setCart] = useState([]);


    const handleAddProduct = (ps)=>{
        // console.log(ps);
        const newCart = [...cart,ps];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='shop-product'>
            <ul>
                {
                    products.map(pd => <Product 
                        product={pd} 
                        handleAddProduct={handleAddProduct}>
                        </Product> )
                }
            </ul>
            </div>
            <div className='shop-cart'>
                <Cart cart={cart}></Cart>
            </div>
            

        </div>
    );
};

export default Shop;