import React, { Fragment } from 'react';

const Footer = (props) => {
    console.log("footer>>>",props)
    return (
        <Fragment>
            <hr/>
            <center>
                <p>&copy;{props.title} {props.year}</p>
            </center>
        </Fragment>
    )
}

export default Footer;