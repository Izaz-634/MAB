import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props.cart);
    const totalPrice = props.cart.reduce((total,pd)=>total+pd.price,0)
    const tax = totalPrice*0.05;
    let shipping = 0;
    if(totalPrice>500){
        shipping = 0;
    }else if(totalPrice > 250){
        shipping = 10;
    }else if(totalPrice>0){
        shipping = 20;
    }else{
        shipping = 0;
    }

    const total = tax+totalPrice+shipping;
    function fixValue(val){
        return val.toPrecision(4);
    }
    return (
        <div>
            <h3 style={{textAlign:'center'}}>Order Summary</h3>
            <div className="row">
                <h4>Items Ordered: </h4>
                <h4>{props.cart.length}</h4>
            </div>
            <div className="row">
                <p>Items: </p>
                <p>${fixValue(totalPrice)}</p>
            </div>
            <div className="row">
                <p>Shipping and Handling: </p>
                <p>${shipping}</p>
            </div>
            <div className="row">
                <p>Total before tax: </p>
                <p>${fixValue(totalPrice)+shipping}</p>
            </div>
            <div className="row">
                <p>Estimated Tax: </p>
                <p>${fixValue(tax)}</p>
            </div>
            <div className="row">
                <h4>Order Total: </h4>
                <h4>${fixValue(total)}</h4>
            </div>
            <button className='btn'>Review Your Order</button>
        </div>
    );
};

export default Cart;