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
        if(sessionStorage.getItem('_Utt') == null){
            this.props.history.push('/login')
        }
        if(sessionStorage.getItem('_Utt') !== null && sessionStorage.getItem('0_R') !== 'admin'){
            this.props.history.push('/profile')
        }
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