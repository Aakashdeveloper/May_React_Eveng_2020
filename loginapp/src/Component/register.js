import React, {Component } from 'react';

const url = "http://localhost:5000/api/auth/register";

class Register extends Component {

    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }
    handleChangeEmail=(event) =>{
        this.setState({email:event.target.value})
    }
    handleChangePassWord=(event)=>{
        this.setState({password:event.target.value})
    }
    handleSubmit=()=>{
        var data ={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }

        fetch(url, {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Register Forms
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"
                                value={this.state.name}
                                onChange={this.handleChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control"
                                value={this.state.email}
                                onChange={this.handleChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control"
                                value={this.state.password}
                                onChange={this.handleChangePassWord}/>
                            </div>
                            <button className="btn btn-success"
                            onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Register;