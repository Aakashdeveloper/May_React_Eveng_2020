import React,{Component} from 'react';
const MyContext = React.createContext();

class MyProvider extends Component{
    state={
        city:'London'
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


class City extends Component {
    render(){
        return(
            <div className="city">
                <span>This is nested child two</span>
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi To {context.state.city}</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}


function Country(){
 return(
     <div>
         <span>Thiis is nested child one</span>
         <City/>
     </div>
 )
}


class ContextComponent extends Component{
    render(){
        return(
            <MyProvider>
                <div>
                <Country/>
                </div>
            </MyProvider>
        )
    }
}

export default ContextComponent;