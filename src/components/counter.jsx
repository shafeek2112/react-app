import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

    // In the style property, should use the camelcase for attribute.
    //Can apply style using two method, one is here or inline.
    style = {
        fontWeight : 'bold',
    }

    render() {

        // console.log(this.props);
        return (
            <div>
                <span style={this.style} className={this.getBadgeClassNames()} >{ this.countFormat() }</span> 
                
                {/* Beloe on onClick = we are passing the simple arrow function to handole the parameter, otherwise we cannot send the parameter to 'handleIncrement' function  */}
                <button style={{ fontWeight: 'bold' }} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm" >Increment</button>

                {/* React RULE - For modifying the state like delete, add, edit - should be done at the componenet where this state is presented. So below we raise the 
                    delete event and then Counters component will handle this event  
                */} 
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClassNames() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    countFormat() {
        const { value } = this.props.counter;
        return (value === 0) ? 'Zero' : value;
    }
}

export default Counter;