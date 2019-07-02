import React, { Component } from 'react';
import CartItem from './CartItem';

function CartList (props) {

        let value = props.value;
        const {cart} = value;

        return ( 
            <div className="container-fluid">
                {
                    cart.map(item => {
                    return (
                        <CartItem 
                            key={item.id} 
                            item={item}
                            value={value}
                        />
                    );
                    
                    })
                }
            </div>
         );
    
}
 
export default CartList;