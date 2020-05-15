import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews,articleNews,galleryNews } from '../actions';
import LatestDisplay from '../component/Home/latest_display';
import ArticleDisplay from '../component/Home/article_display';
import GalleryDisplay from '../component/Home/gallery_display';

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestdata}/>
                <ArticleDisplay adata={this.props.datalist.articledata}/>
                <GalleryDisplay gdata={this.props.gallist.gallerydata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        gallist:state.gallery
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}


export default connect(mapStateToProps)(Home);