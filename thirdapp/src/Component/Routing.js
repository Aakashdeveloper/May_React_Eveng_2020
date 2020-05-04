import React, { Fragment } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;