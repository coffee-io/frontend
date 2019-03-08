import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './general/NavBar';
import BottomMessage from './general/BottomMessage';
import Home from './Home';
import Cart from './cart/Cart';
import NewItem from './cart/NewItem';
import Delivery from './delivery/Delivery';
import Admin from './admin/Admin';
import Architecture from './architecture/Architecture';
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
                        <Route exact path='/cart/newitem' component={NewItem}/>
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
