import React, {Component} from 'react';

class Header extends Component{
    constructor(){
       super() 
    }
    render(){
        return (
            <React.Fragment>
                <center>
                    <h2>React App</h2>
                </center>
                <div>
    
                </div>
                <hr/>
            </React.Fragment>
        )
    }
}
export default Header;


/*const Header = ( ) => {
    return (
        <React.Fragment>
            <center>
                <h2>React App</h2>
            </center>
            <div>
                
            </div>
            <hr/>
        </React.Fragment>
    )
}

*var React = require('react');

function Header(){
    return (
        <div>
            <center>
                <h2>React App</h2>
            </center>
            <hr/>
        </div>
    )
}

module.exports = Header
*/