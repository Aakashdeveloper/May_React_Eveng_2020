import React, {Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo"

class Profile extends Component {
    constructor(){
        super()

        this.state={
            user:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('_Utt')
        sessionStorage.removeItem('0_R')
        this.props.history.push('/login')
    }

    render(){
        if(sessionStorage.getItem('_Utt') == null){
            this.props.history.push('/login')
        }
        sessionStorage.setItem('0_R',this.state.user.role)
        return(
        <div>
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your Email id is {this.state.user.email}</h2>
                    <h2>Your role is {this.state.user.role}</h2>
                </div>

                <button className="btn btn-danger"
                onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
        </div>
        )
    }

    componentDidMount(){
        fetch(url, {
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('_Utt')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }

}

export default Profile;