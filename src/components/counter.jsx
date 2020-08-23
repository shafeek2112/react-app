import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

    state = {
        count : 0
    }

    // In the style property, should use the camelcase for attribute.
    //Can apply style using two method, one is here or inline.
    style = {
        fontWeight : 'bold',
    }

    render() {
        return (
            <React.Fragment>
                <span style={this.style} className="badge badge-primary m-2" >{ this.countFormat() }</span> 
                <button style={{ fontWeight: 'bold' }} className="btn btn-secondary btn-sm" >Increment</button>
            </React.Fragment>
        );
    }

    countFormat() {
        const { count } = this.state;
        return (count === 0) ? 'Zero' : count;
    }
}

export default Counter;