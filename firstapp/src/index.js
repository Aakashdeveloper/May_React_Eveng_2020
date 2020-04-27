import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';

//Functional
const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>This is From React</h1>
            <h2>React APP</h2>
            <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))




