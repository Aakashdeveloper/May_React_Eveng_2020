import React, {Component} from 'react';
import UserDisplay from './userdetails';

const url = "http://localhost:5000/api/auth/users";

class User extends Component {
    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        return(
            <div>
                <UserDisplay userData={this.state.users}/>
            </div>
        )
    }

    componentWillMount(){
        fetch(url,{Method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                users:data
            })
        })
    }
}

export default User;