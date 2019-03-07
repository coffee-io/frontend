import React, { Component } from 'react';
import NewItem from './NewItem';
import CartList from './CartList';

const emptyCart = {
    items: [],
    deliveryCost: 0.0,
    taxCost: 0.0,
    total: 0.0,
}

export default class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stage: 'cart',   // possible values: cart, new_item, finalizing
        }
    }

    componentDidMount() {
        // load cart
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        if (!cart) {
            cart = {...emptyCart};
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
        console.log(cart);

        // if there are no items in the cart, start stage
        this.setState({ stage: (cart.items.length === 0) ? 'new_item' : 'cart' });
    }

    addNewItem = () => {
        this.setState({ stage: 'new_item' });
    }

    recalculateValues(cart) {
        // TODO
    }

    addItemToCart = (item) => {
        // TODO - is it the same as some other item?
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        cart.items.push(item);
        this.recalculateValues(cart);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        
        console.log("Item added to cart.");
        console.log(item);
        this.setState({ stage: 'cart' });
    }

    removeItemFromCart = (i) => {
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        cart.items.splice(i, 1);
        this.recalculateValues(cart);
        sessionStorage.setItem('cart', JSON.stringify(cart));

        console.log("Item " + (i+1) + " removed from cart.");
        this.setState({ stage: 'cart' });
    }

    finalizePurchase = () => {
        // TODO
    }

    render() {
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        if (!cart)
            return <p>Loading cart...</p>;
        switch (this.state.stage) {
            case 'new_item':
                return <NewItem addItemToCart={this.addItemToCart} />;
            case 'cart':
                return <CartList 
                            cart={cart} 
                            addNewItem={this.addNewItem} 
                            removeItemFromCart={this.removeItemFromCart}
                            finalizePurchase={this.finalizePurchase} />;
            case 'finalizing':
                return <p>TODO</p>;  // TODO
            default:
                throw Error("Invalid stage value '" + this.state.stage + "'");
        }
    }
}

// vim:st=4:sts=4:sw=4:expandtab