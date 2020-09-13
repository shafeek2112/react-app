import React, {Component} from 'react';
import ReactDom from 'react-dom';

//Instead of class we can also use the stateless functional component & we using argument destructing
const NavBar = ({count}) => {
    return(
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Navbar
                <span className="badge badge-pill m-1 badge-secondary">{count}</span>
            </span>
        </nav>
    );
}

export default NavBar;