import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../state/actions';

const mapStateToProps = state => {
    return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
    return {
        removeItem: i => dispatch(removeItem(i)),
    };
}

class Cart extends Component {

    removeItem = (i) => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            this.props.removeItem(i);
        }
    }

    render() {
        let rows = [];

        for (let i = 0; i < this.props.cart.items.length; ++i) {
            const func = () => this.removeItem(i);
            const item = this.props.cart.items[i];
            rows.push(
                <tr key={'item_' + i}>
                    <th scope="row" className="text-right">{i+1}</th>
                    <td>{item.recipeName ? item.recipeName : item.description}</td>
                    <td className="text-right">${item.totalCost.toFixed(2)}</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-danger btn-sm" onClick={func}>
                            X
                        </button>
                    </td>
                </tr>
            );
        }

        return (
            <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
                <table className="table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th scope="col" className="text-right">#</th>
                            <th scope="col" className="w-50 text-left">Item</th>
                            <th scope="col" className="text-right">Price</th>
                            <th scope="col" className="text-center">Delete item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <th scope="row">Total</th>
                            <th className="text-right" scope="row">${this.props.cart.total.toFixed(2)}</th>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>

                <div className="btn-group">
                    <Link className="btn btn-primary" to="/cart/newitem">Add a new item</Link>
                    <button type="button" className="btn btn-success" onClick={this.props.finalizePurchase}>Finalize purchase</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// vim:st=4:sts=4:sw=4:expandtab
