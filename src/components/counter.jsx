import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

    // In the style property, should use the camelcase for attribute.
    //Can apply style using two method, one is here or inline.
    style = {
        fontWeight : 'bold',
    }

    render() {

        const { counter, onIncrement, onDecrement, onIncrementDecrement, onDelete} = this.props;

        return (
            <div className="row">
                <div className="col-1 text-center">
                    <span style={this.style} className={this.getBadgeClassNames()} >{ this.countFormat() }</span> 
                </div>
                <div className="col-5">
                    {/* Beloe on onClick = we are passing the simple arrow function to handole the parameter, otherwise we cannot send the parameter to 'handleIncrement' function  */}
                    <button style={{ fontWeight: 'bold' }} onClick={() => onIncrementDecrement(counter,'increment')} className="btn btn-secondary btn-sm" >+</button>

                    <button onClick={() => onIncrementDecrement(counter,'decrement')} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? 'disabled' : ''} >-</button>

                    {/* React RULE - For modifying the state like delete, add, edit - should be done at the componenet where this state is presented. So below we raise the 
                        delete event and then Counters component will handle this event  
                    */} 
                    <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">x</button>
                </div>
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