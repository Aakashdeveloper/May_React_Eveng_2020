import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const showGallerry = ({gdata}) => {
    if(gdata){
        return(
            <Slider {...settings}>
                {gdata.map((item) => {
                    return(
                        <Link to="/" className="slider-item" key={item.id}>
                            <div className="image"
                            style={{background:`url(/images/galleries/${item.images[0].img})`}}
                            >

                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }

}

const GalleryDisplay = (props) => {

    return(
        <div>
           
            <div className="home-gallery">
                <h2>Photo Gallery</h2>
                {showGallerry(props)}
            </div>
            
            <hr/>
        </div>
    )

}

export default GalleryDisplay