import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomMessage(props) {
    return (
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-danger">
            <span className="navbar-text">
                IMPORTANT! This is not a real website, it serves as my portfolio for web development on cloud.
                See more about the <Link to="/architecture">serverless cloud architecture</Link> used on this website.
            </span>
        </nav>
    );
}

// vim:st=4:sts=4:sw=4:expandtab
