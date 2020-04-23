import React from 'react';

const Footer = (props) => {
    console.log(props)
    return(
        <div>
            <hr/>
            <center>
            &copy; NareshIT {props.year}
            </center>
           

        </div>
    )
}


export default Footer;