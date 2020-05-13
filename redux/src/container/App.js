import React, {Component} from 'react';
import { moviesList } from '../action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DisplayList from '../component/DisplayList';


class App extends Component {
    componentDidMount(){
        this.props.moviesList()
    }

    render(){
        return(
            <div>
                <h1>Redux App</h1>
                <DisplayList datalist={this.props.mydata}/>

            </div>
        )
    }

}

//Get State from the store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }

}

//Dispatch Action
function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App)