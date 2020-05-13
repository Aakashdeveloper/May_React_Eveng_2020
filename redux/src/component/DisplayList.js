import React from 'react';

const ListFile = (props) => {

    const renderView = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    }
    return(
        <div>
            <h2>hiii</h2>
            {renderView(props)}
        </div>
    )
}

export default ListFile;