import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import BottomMessage from './BottomMessage';
import Home from './Home';
import PlaceOrder from './PlaceOrder';
import Delivery from './Delivery';
import Admin from './Admin';
import Architecture from './Architecture';
import NavBar from './NavBar';

class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/order' component={PlaceOrder}/>
                    <Route exact path='/delivery' component={Delivery}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/architecture' component={Architecture}/>
                </Switch>
                <BottomMessage />
            </div>
        );
    }

}

export default App;

// vim:st=4:sts=4:sw=4:expandtab
