import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <div>
            <div className="col-md-7 p-lg-5 mx-auto my-5">
                <h1 className="display-6 font-weight-bold mb-4">The best cup of coffee, anywhere.</h1>
                <p className="lead font-weight-normal mb-4">
                    Customize your cup of coffee and have it delievered to your home or office, fast!
                </p>
                <Link className="btn btn-lg btn-primary" to="/order">Place your order</Link>
              </div>
        </div>
    );
}

// vim:st=4:sts=4:sw=4:expandtab
