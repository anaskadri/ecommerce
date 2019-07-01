import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CartTotals extends Component {
    constructor(props) {
        super(props);
        this.value = props.value;
        this.state = {  }
    }
    render() { 
        const {cartSubTotal, cartTax, cartTotal, clearCart} = this.value;
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
                                    Clear CArt
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CartTotals;