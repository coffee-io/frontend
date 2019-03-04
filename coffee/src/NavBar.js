import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const imageStyle = {
    marginRight: "8px",
}

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
                <Link className="navbar-brand" to="/">
                    <FontAwesomeIcon icon={faCoffee} size="lg" style={imageStyle} className="d-inline-block align-middle" />
                    <span className="navbar-brand mb-0 h1">mycoffee</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/order">Place new order</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/delivery">Delivery</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/admin">Admin</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/architecture">Application architecture</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

// vim:st=4:sts=4:sw=4:expandtab
