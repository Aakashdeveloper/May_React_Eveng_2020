import React, { Fragment } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import ArtistDetails from './ArtistDetails';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route exact path="/artist/:id" component={ArtistDetails}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;