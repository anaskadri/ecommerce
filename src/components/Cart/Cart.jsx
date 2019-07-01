import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return(
                                <React.Fragment>
                                    <Title name="Your" title="cart" />
                                    <CartColumns />
                                </React.Fragment>
                            );
                        }
                    }}
                    <Title name="Your" title="cart" />
                    <CartColumns />
                </ProductConsumer>
                <EmptyCart />
            </section>
         );
    }
}
 
export default Cart;