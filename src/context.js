import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext ();
//Provider

class ProductProvider extends Component {
        state = { 
            products: storeProducts,
            detailProduct: detailProduct
         };

    handleDetail = () => {
        console.log("Details")
    };
    addToCart = () => {
        console.log("addd to cart")
    };

    tester = () => {
        console.log('state products :', this.state.products[0].inCart);
        console.log('data products :', storeProducts[0].inCart);
        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true;
        this.setState ( () => {
            return {products: tempProducts}
        }, () => {
            console.log('state products :', this.state.products[0].inCart);
            console.log('data products :', storeProducts[0].inCart);
        })
    }

    render() { 
        return ( 
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                    }}>
                    <button onClick={this.tester}>Test me</button>
                    {this.props.children}
            </ProductContext.Provider>
         );
    }
}

const ProductConsumer = ProductContext.Consumer;
 
export {ProductProvider, ProductConsumer};