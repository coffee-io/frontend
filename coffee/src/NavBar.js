import React from 'react';

export default function NavBar(props) {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">coffee.io</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> 
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#">Features</a>
                </div>
            </div>
        </nav>
    );
}

// vim:st=4:sts=4:sw=4:expandtab
