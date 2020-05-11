import React, {Component, Fragment} from 'react';
class custList extends Component{
    constructor(){
        super()
        this.state={
            custName:'',
            custList: []
        }
    }
    addName() {
        let { custName, custList} = this.state;
        if (custName && custName.trim()) {
            custList = [
                ...custList,
                custName
            ];
            this.setState({custList});
            this.setState({custName: ''});
        }
    }
    handleChangeName=(event)=>{
        this.setState({custName: event.target.value})
    }
    handleClick = () => {
        this.addName();
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.addName();
        }
    }
    render(){
        return(
            <Fragment>
                 <label className="app-title">Add Customer: </label>
                 <input className="app-input" placeholder="name"
                 type="text"
                 value={this.state.custName}
                 onKeyPress={this.handleKeyPress}
                 onChange={this.handleChangeName}/>
                 <button className="submit-button"
                  onClick={this.handleClick}>Add cust</button>
                  <ul>
                      {this.state.custList.map((item,i) => {
                          return <li key={i}>{item}</li>
                      })}
                  </ul>
            </Fragment>
        )
    }
}
export default custList;
