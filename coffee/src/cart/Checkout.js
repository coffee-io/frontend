import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import OrderList from './OrderList';

const mapStateToProps = state => {
    return { cart: state.cart };
}

class Checkout extends Component {
    finalizePurchase = (e) => {
        // TODO - submit address
        // TODO - redirect
        //e.preventDefault();
    }

    render() {
        /*
        if (this.props.cart.items.length === 0)
            return <Redirect to='/cart' />;
        */

        return (
            <div className="container">
                <div className="py-5 text-center">
                    <p className="lead">Please fill out the details below in order to check out.</p>
                </div>
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                        </h4>
                        <OrderList cart={this.props.cart} />
                    </div>
                </div>

                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Delivery address</h4>

                    <form>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="validationDefault01">Name</label>
                          <input type="text" className="form-control" id="validationDefault01" placeholder="Mark" required />
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="validationDefaultUsername">E-mail</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            </div>
                            <input type="text" class="form-control" id="validationDefaultUsername" placeholder="you@example.com" required />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-12 mb-3">
                          <label htmlFor="validationDefault02">Address</label>
                          <input type="text" className="form-control" id="validationDefault02" placeholder="1234 Main St" required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="validationDefault03">City</label>
                          <input type="text" className="form-control" id="validationDefault03" placeholder="Los Angeles" required />
                        </div>
                        <div className="col-md-3 mb-2">
                          <label htmlFor="validationDefault04">State</label>
                          <input type="text" className="form-control" id="validationDefault04" placeholder="CA" required />
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="validationDefault05">Zip</label>
                          <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" required defaultChecked />
                          <label className="form-check-label">
                            Save this address for future purchases
                          </label>
                        </div>
                      </div>
                      <button className="btn btn-primary mb-5" type="submit" onClick={e => this.finalizePurchase(e)}>Submit form</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Checkout);

// vim:st=4:sts=4:sw=4:expandtab
