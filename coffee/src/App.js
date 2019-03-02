import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    componentDidMount() {
        fetch('https://4zdnxxpky3.execute-api.us-east-1.amazonaws.com/prod/ingredients')
            .then(response => response.json())
            .then(data => this.setState({ value: data.value }));
    }

    render() {
        return (
            <p>Hello {this.state.value}!</p>
        );
    }
}

export default App;

// vim:st=4:sts=4:sw=4:expandtab
