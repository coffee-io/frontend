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
            editing: false,
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

        // if there are no items in the cart, start editing
        this.setState({ editing: (cart.items.length === 0) });
    }

    recalculateValues(cart) {
    }

    addItemToCart = (item) => {
        let cart = JSON.parse(sessionStorage.getItem('cart'));
        cart.items.push(item);
        this.recalculateValues(cart);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        
        console.log("Item added to cart.");
        console.log(item);
        this.setState({ editing: false });
    }

    render() {
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        if (!cart)
            return <p>Loading cart...</p>;
        if (this.state.editing) {
            return <NewItem addItemToCart={this.addItemToCart} />;
        } else {
            return <CartList />;
        }
    }
}

// vim:st=4:sts=4:sw=4:expandtab