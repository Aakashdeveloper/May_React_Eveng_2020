//Get Initial State
//Set Initial Sstate
//Before get created
//Render
//After Get Created

import React,{Component} from 'react';

class LifeCycle extends Component {
    //1 Get Initial State
    constructor(props){
        super(props)

        console.log(">>>>>>> Inside constructor")
        //2 Set Initial State
        this.state={
            title:'React App'
        }
    }

    componentWillUpdate(){
        console.log(">>>>>>> Inside componentWillUpdate")
    }
    componentDidUpdate(){
        console.log(">>>>>>> Inside componentDidUpdate")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>>>> Inside shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //3 Before get created
    componentWillMount(){
        console.log(">>>>>>> Inside componentWillMount")
    }

    //4 Render
    render(){
        console.log(">>>>>>> Inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Somethiing else'})}}>
                    Click Me
                </div>
            </div>
           
        )
    }

    //5 After Get Created
    componentDidMount(){
        console.log(">>>>>>> Inside componentDidMount")
    }

    //5 After Get Created
    componentWillUnmount(){
        alert('Do You want to leave')
    }
}


export default LifeCycle