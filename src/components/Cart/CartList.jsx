import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
    constructor(props) {
        super(props);
        this.value = props.value;
    }
    render() { 
        const {cart} = this.value;
        return ( 
            <div className="container-fluid">
                {cart.map(item => {
                    return <CartItem 
                                key={item.id} 
                                item={item}
                                value={this.value}
                            />;
                })}
            </div>
         );
    }
}
 
export default CartList;