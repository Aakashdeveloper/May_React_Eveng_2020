import React, {Component} from 'react';
import './Header.css';


class Header extends Component{
    constructor(props){
       super(props) 

       this.state={
           title:'React State App',
           year: this.props.year
       }  
    }


    render(){
        return (
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input/>
                </center>
                <hr/>
            </header>
          
        )
    }
}
export default Header;