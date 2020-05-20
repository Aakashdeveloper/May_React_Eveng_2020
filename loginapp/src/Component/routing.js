import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Register from './register';
import Login from './login';
import User from './user';
import Profile from './profile';
import Header from './Header';
import Footer from './Footer';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                    <Route exact path="/" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/user" component={User}/>
                <Footer/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;