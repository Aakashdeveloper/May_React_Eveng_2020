import React, { Fragment } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import ArtistDetails from './ArtistDetails';
import FormsComponent from './FormComponent';

const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                <Route exact path="/artist/:id" component={ArtistDetails}/>
                <Route exact path="/forms" component={FormsComponent}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;