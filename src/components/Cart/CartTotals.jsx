import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './PaypalButton';

function CartTotals (props){
    
        let value = props.value;
        let history = props.history;

        const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to="/">
                                <button 
                                    className="btn btn-outline-danger text-uppercase mb-3 pc-5" 
                                    type="button"
                                    onClick={() => clearCart()}>
                                    Clear Cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                    subTotal
                                </span>
                                <strong>$ {cartSubTotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    cartTax
                                </span>
                                <strong>$ {cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    Total
                                </span>
                                <strong>$ {cartTotal}</strong>
                            </h5>
                            <PaypalButton 
                                total = {cartTotal}
                                clearCart = {clearCart}
                                history = {history}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
}
 
export default CartTotals;