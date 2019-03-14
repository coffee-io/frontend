import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const imageStyle = {
    marginTop: "20px",
}

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            items: [],
        };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_BACKEND_URL + '/orders')
            .then(res => this.setState({ loaded: true, items: res, }))
            .catch(error => { throw(error); });
    }

    renderData() {
        if (!this.state.loaded)
            return <FontAwesomeIcon icon={faSpinner} style={imageStyle} size="4x" className="d-inline-block align-middle" pulse />;
        return (
            <div>
                Not implemented.
            </div>
        );
        // https://getbootstrap.com/docs/4.0/components/collapse/
    }

    render() {
        return (
            <div>
                <div className="py-5 text-center">
                    <p className="lead">List of requests ordered today.</p>
                    {this.renderData()}
                </div>
            </div>
        );
    }
}

export default Admin;

// vim:st=4:sts=4:sw=4:expandtab
