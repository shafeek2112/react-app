import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

    state = {
        count : 0,
        tags  : ['tag1','tag2', 'tag3'],
    }

    // In the style property, should use the camelcase for attribute.
    //Can apply style using two method, one is here or inline.
    style = {
        fontWeight : 'bold',
    }

    rederTagList() {

        if(this.state.tags.length  === 0)  return <p>There are no tags</p>

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>) 
    }

    handleIncrement() {

        console.log("Increment Clicked "+ this)// this keyword is undefined in this function. 
    }

    render() {

        return (
            <React.Fragment>
                <span style={this.style} className={this.getBadgeClassNames()} >{ this.countFormat() }</span> 
                {/* Beloe on onClick = we passed function reference, not calling that function. Also 'onClick' is case sensitive */}
                <button style={{ fontWeight: 'bold' }} onClick={this.handleIncrement} className="btn btn-secondary btn-sm" >Increment</button>
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