import React, {Component} from 'react';
import './Header.css';


class Header extends Component{
    constructor(props){
       super(props) 

       this.state={
           title:'React State App',
           year: this.props.year,
           keyword:'User Text Here'
       }  
    }

    inputChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }


    render(){
        console.log(">>>>>in render<<<<")
        return (
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input onChange={this.inputChange} />
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </header>
          
        )
    }
}
export default Header;