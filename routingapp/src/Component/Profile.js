import React,{Component} from 'react';


class Profile extends Component {
    render(){
        return(
            <div className="panel panel-warning">
            <div className="panel-heading">
                Profile
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h3>Profile</h3>
                    <p>Profile is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
    
            </div>
        </div>
        )
    }

    componentDidMount(){
       const search =this.props.location.search;
       const params = new URLSearchParams(search); 
       const code = params.get('code');
       var data ={
        client_id:"2df707f0ee3875437ed2",
        client_secret:"fb903897ff74dc58940666a7d0ac078d68dd23bf",
        code:code
       }
       console.log(data)
       fetch("https://github.com/login/oauth/access_token",
       {method:'POST',
       mode: 'no-cors',
        headers:{
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "https://github.com/login/oauth/access_token"
        },
        body:data
    }).then(function (response) {
        if (!response.ok) {
           return response.text().then(result => Promise.reject(new Error(result)));
        }
    
        console.log(response.json())
    })
       
    }
    
}

export default Profile;