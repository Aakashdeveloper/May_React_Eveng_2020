import React,{Component} from 'react';
import Header from './Header';

const url = "http://localhost:8900/artists";
class ArtistDetails extends Component {
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        console.log(this.props.match.params.id)
        var data = this.state.details
        return(
            <React.Fragment>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${data.cover}.jpg')`}}/>
                        <h3>{data.name}</h3>
                        <div className="bio_text">
                            {data.bio}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
           this.setState({details:data})
        })
    }
}


export default ArtistDetails