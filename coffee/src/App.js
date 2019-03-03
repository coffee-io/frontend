import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <p>Hello!</p>
                <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-danger">
                    <span className="navbar-text">
                        IMPORTANT! This is not a real website, it serves as my portfolio for web development on cloud.
                        See more about the <Link to="/architecture">serverless cloud architecture</Link> used on this website.
                    </span>
                </nav>
            </div>
        );
    }

}

export default App;

// vim:st=4:sts=4:sw=4:expandtab
