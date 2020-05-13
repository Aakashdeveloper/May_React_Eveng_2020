import React from 'react';

const NewsDisplay = (props) => {

    const renderList = props.datalist.map((item,index) => {
        return(
            <div key={index}>
                <p>{index}</p>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    })
    return(
        <div>
           {renderList}
        </div>
    )
}


export default NewsDisplay