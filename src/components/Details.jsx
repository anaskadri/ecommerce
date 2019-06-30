import React, { Component } from 'react';
import {productConsumer, ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import ButtonContainer from './Button';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} 
                        =  value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*Title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue    ">
                                        <strong>
                                            price : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalized font-weight-bold mt-3 mb-0">
                                        some infor about the product
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* Buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        
                                        <ButtonContainer 
                                            cart
                                            disabled = {inCart ? true : false}
                                            onClick = { () => {
                                                value.addToCart(id)
                                            }}
                                            >
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
         );
    }
}
 
export default Details;