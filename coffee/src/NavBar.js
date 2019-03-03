import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
                <Link className="navbar-brand" to="/">
                    <FontAwesomeIcon icon={faCoffee} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/order">Place new order</Link>
                        <Link className="nav-item nav-link" to="/delivery">Delivery</Link>
                        <Link className="nav-item nav-link" to="/admin">Admin</Link>
                        <Link className="nav-item nav-link" to="/architecture">Application architecture</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

// vim:st=4:sts=4:sw=4:expandtab
