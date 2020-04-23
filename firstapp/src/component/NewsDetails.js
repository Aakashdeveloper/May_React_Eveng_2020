import React from 'react';

const NewsDisplay = (props) =>{
    console.log("newsdisplay",props);
    const renderList = props.newslist.map((data,index) => {
        return(
            <div key={index}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
                <img src={data.imageUrl} alt={data.title}/>
            </div>

        )
    })

    return(
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}

export default NewsDisplay;