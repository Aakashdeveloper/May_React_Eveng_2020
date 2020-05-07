import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Link to="/">Home Page</Link>
            <Link to="/forms">Forms Page</Link>
        </header>
    )
}
