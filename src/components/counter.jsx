import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

    state = {
        count : 0
    }

    render() {
        return (
            <React.Fragment>
                <span>{this.countFormat()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    countFormat() {
        const { count } = this.state;
        return (count === 0) ? 'Zero' : count;
    }
}

export default Counter;