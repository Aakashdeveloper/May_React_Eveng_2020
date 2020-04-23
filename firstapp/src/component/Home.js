import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsDetails from './NewsDetails';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
       const output = this.state.news.filter((data) => {
           return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
       })
       this.setState({filtered:output})
    }
    render(){
        console.log(this.state.news)
        return (
            <React.Fragment>
                <Header userText={(userInput) => {this.filterNews(userInput)}}/>
                <NewsDetails newslist={this.state.filtered}/>
                <Footer year="2021"/>
            </React.Fragment>
        )
    }
    
}

export default Home;