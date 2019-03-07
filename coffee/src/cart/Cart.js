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
            editing: null,
        }
    }

    componentDidMount() {
        // load cart
        const cart = sessionStorage.getItem('cart');
        if (!cart)
            sessionStorage.setItem('cart', JSON.stringify(emptyCart));
        this.forceUpdate();
    }

    render() {
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        if (!cart)
            return <p>Loading cart...</p>;
        if (this.state.editing || cart.items.length === 0) {
            const item = this.state.editing ? this.state.editing : cart.items.length;
            return <NewItem currentItem={item} />;
        } else {
            return <CartList />;
        }
    }
}

// vim:st=4:sts=4:sw=4:expandtab