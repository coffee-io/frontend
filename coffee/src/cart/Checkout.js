import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import OrderList from './OrderList';
import { changeAddress } from '../state/actions';

const mapStateToProps = state => {
    return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
    return {
        changeAddress: address => dispatch(changeAddress(address)),
    };
}

class Checkout extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            saveForm: true,
            submitted: false,
        };
    }

    finalizePurchase = (e) => {
        // change address
        this.props.changeAddress({
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        });

        // TODO - save address
        // TODO - submit cart
        // TODO - redirect
        e.preventDefault();
        console.log("xxx");
    }

    // TODO - addresses already used

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        if (this.state.submitted)
            return <Redirect to='/cart/finalized' />;

        if (this.props.cart.items.length === 0)
            return <Redirect to='/cart' />;

        return (
            <div className="container">
                <div className="py-5 text-center">
                    <p className="lead">Please fill out the details below in order to check out.</p>
                </div>
                <div className="row">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                    </h4>
                    <OrderList cart={this.props.cart} />
                </div>

                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Delivery address</h4>

                    <form onSubmit={e => this.finalizePurchase(e)}>
                      <div className="form-row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="validationDefault01">Name</label>
                          <input 
                              type="text" 
                              name="name" 
                              value={this.state.name} 
                              onChange={this.handleInputChange}
                              className="form-control" 
                              id="validationDefault01" 
                              placeholder="John Smith" 
                              required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="validationDefaultEmail">E-mail</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="inputGroupPrepend2">@</span>
                            </div>
                            <input 
                                type="text" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleInputChange}
                                className="form-control" 
                                id="validationDefaultEmail" 
                                placeholder="you@example.com" 
                                required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-12 mb-3">
                          <label htmlFor="validationDefault02">Address</label>
                          <input 
                              type="text"
                              name="address"
                              value={this.state.address}
                              onChange={this.handleInputChange}
                              className="form-control"
                              id="validationDefault02"
                              placeholder="1234 Main St"
                              required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="validationDefault03">City</label>
                          <input
                              type="text"
                              name="city"
                              value={this.state.city}
                              onChange={this.handleInputChange}
                              className="form-control"
                              id="validationDefault03"
                              placeholder="Los Angeles"
                              required
                          />
                        </div>
                        <div className="col-md-3 mb-2">
                          <label htmlFor="validationDefault04">State</label>
                          <input
                              type="text"
                              name="state"
                              value={this.state.state}
                              onChange={this.handleInputChange}
                              className="form-control"
                              id="validationDefault04"
                              placeholder="CA"
                              required
                          />
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="validationDefault05">Zip</label>
                          <input 
                              type="text"
                              name="zip"
                              value={this.state.zip}
                              onChange={this.handleInputChange}
                              className="form-control"
                              id="validationDefault05"
                              placeholder="Zip"
                              required 
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                checked={this.state.saveForm}
                                onChange={this.handleInputChange}
                                name="saveForm" 
                                type="checkbox"
                            />
                          <label className="form-check-label">
                            Save this address for future purchases
                          </label>
                        </div>
                      </div>
                      <button className="btn btn-primary mb-5" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

// vim:st=4:sts=4:sw=4:expandtab
