import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import BottomMessage from './BottomMessage';
import Home from './Home';
import Cart from './cart/Cart';
import Delivery from './Delivery';
import Admin from './Admin';
import Architecture from './Architecture';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/cart' component={Cart}/>
                        <Route exact path='/delivery' component={Delivery}/>
                        <Route exact path='/admin' component={Admin}/>
                        <Route exact path='/architecture' component={Architecture}/>
                    </Switch>
                    <BottomMessage />
                </div>
            </BrowserRouter>
        );
    }

}

export default App;

// vim:st=4:sts=4:sw=4:expandtab
