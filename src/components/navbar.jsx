import React, {Component} from 'react';
import ReactDom from 'react-dom';

class NavBar extends Component {

    render() {

        return(
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Navbar
                    <span className="badge badge-pill m-1 badge-secondary">{this.props.count}</span>
                </span>
            </nav>
        );
    }
}

export default NavBar;