import React,{Component} from 'react';
import "./Header.css";

class Header extends Component{
    constructor(){
        super()
        this.state={
            title:'React App',
            keyword:'User Text'
        }
    }

    inputChanges = (event) => {
        this.setState({keyword:event.target.value?event.target.value:'User Text'}) 
        this.props.userText(event.target.value)                                                                                    
    }

    render(){
        return(
            <header>
                <p className="logo">{this.state.title}</p>
                <center>
                    <input onChange={this.inputChanges}/>
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;