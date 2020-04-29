import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

//Functional
class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }

    }
    render(){
        return(
            <React.Fragment>
                <Header year="2020"/>
                <NewsDisplay datalist={this.state.news}/>
                <Footer year="2020" title="Nareshit"/>
            </React.Fragment>
        )
    }
    
}

export default Home;




