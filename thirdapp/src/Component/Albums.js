import React from 'react';

const Albums = (props) => {

    const showAlbums = ({albumsdata}) => {
        if(albumsdata){
            return albumsdata.map((item,index) => {
                return(
                    <img src={`/images/albums/${item.cover}.jpg`} key={index}/>
                )
            })
        }
    }
   
    return(
        <div className="album_list">
            {showAlbums(props)}
        </div>

    )
}

export default Albums;