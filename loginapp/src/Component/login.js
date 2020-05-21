import React, {Component } from 'react';

const url = "http://localhost:5000/api/auth/login";

class Login extends Component {

    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }

    handleChangeEmail=(event) =>{
        this.setState({email:event.target.value})
    }
    handleChangePassWord=(event)=>{
        this.setState({password:event.target.value})
    }
    handleSubmit=()=>{
        var data ={
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
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem('_Utt',data.token)
            this.props.history.push('/profile')
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Login Forms
                        </div>
                        <div className="panel-body">
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

export default Login;