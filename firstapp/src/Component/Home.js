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
            news:JSON,
            filtered:JSON
        }

    }


    filterNews(userInput){
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(userInput.toLowerCase()))>-1 || (data.feed.toLowerCase().indexOf(userInput.toLowerCase()))>-1
        })
        this.setState({filtered:output})

    }
    render(){
        return(
            <React.Fragment>
                <Header year="2020" 
                  userText={(headerdata) => this.filterNews(headerdata)}
                />
                <NewsDisplay datalist={this.state.filtered}/>
                <Footer year="2020" title="Nareshit"/>
            </React.Fragment>
        )
    }
    
}

export default Home;




