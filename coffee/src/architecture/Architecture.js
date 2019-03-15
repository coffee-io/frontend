import React from 'react';
import architecture from './architecture.png';

export default function Architecture(props) {
    return (
        <div className="container-fluid">
            <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                <h3>Application architecture</h3>
                <a href={architecture}>
                    <img src={architecture} alt="Cloud architecture" className="img-fluid" />
                </a>
                <p><i>Click on the image to increase the size.</i></p>
            </main>
        </div>
    );
}

// vim:st=4:sts=4:sw=4:expandtab
