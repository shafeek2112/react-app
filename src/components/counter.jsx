import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

    state = {
        count : 0,
        tags  : ['tag1','tag2', 'tag3']
    }

    // In the style property, should use the camelcase for attribute.
    //Can apply style using two method, one is here or inline.
    style = {
        fontWeight : 'bold',
    }

    render() {

        return (
            <React.Fragment>
                <span style={this.style} className={this.getBadgeClassNames()} >{ this.countFormat() }</span> 
                <button style={{ fontWeight: 'bold' }} className="btn btn-secondary btn-sm" >Increment</button>
                <ul>
                    {/* Below li tag we used 'key' because in react each iterative line need unique key, then only react can update that particular element if any changes in DOM */}
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
                </ul>
            </React.Fragment>
        );
    }

    getBadgeClassNames() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    countFormat() {
        const { count } = this.state;
        return (count === 0) ? 'Zero' : count;
    }
}

export default Counter;