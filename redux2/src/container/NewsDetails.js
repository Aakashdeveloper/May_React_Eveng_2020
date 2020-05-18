import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import { selectedNews, clearSelectedNews} from '../actions';
import LikeCounter from './Like_Counter';

class NewsDetails extends Component {
    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    renderNews = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div>
                        <div classsName="tags">
                            <span>
                                <i className="fa fa-eye">
                                    {data.views}
                                </i>
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up">
                                    {data.likes[0]}
                                </i>
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down">
                                    {data.likes[1]}
                                </i>
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article bY: {data.author}</span>
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                            <div>
                                <LikeCounter
                                articleId={data.id}
                                likes={data.likes[0]}
                                dislikes={data.likes[1]}/>
                            </div>
                            
                        </div>
                    </div>
                )
            })
        }

    }

    render(){
        return(
            <div className="news_container">
               {this.renderNews(this.props.details)}
            </div>
        )
    }

    componentWillUnmount(){
        this.props.dispatch(clearSelectedNews())
    }
}


function mapStateToProps(state){
    return{
        details:state.articles
    }
}

NewsDetails.protoTypes = {
    dispatch: PropsTypes.func
}

export default connect(mapStateToProps)(NewsDetails)