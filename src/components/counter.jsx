import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {

    state = {
        value : this.props.value,
        tags  : ['tag1','tag2', 'tag3'],
    }

    // In the style property, should use the camelcase for attribute.
    //Can apply style using two method, one is here or inline.
    style = {
        fontWeight : 'bold',
    }

    //constructor for given this to this 'handleIncrement' function.
    /*constructor() {

        super();
        // console.log('constructor this -> ', this)
        this.handleIncrement = this.handleIncrement.bind(this) // 1st method.
    } */

    //***********************  'this' keyword wont be available inside the normal function, even that function inside the class. So they  are two ways to do this.
    //*********************** One is use the constructor and the bind method.
    //*********************** Other one is change the 'handleIncrement' below method to arrow function.
    /*handleIncrement() {

        console.log("Increment Clicked ", this)
    }*/

    //2nd method - use arrow function
    handleIncrement = (product) => {

        //To change the state property we have to use setState function.
        this.setState({ value: this.state.value + 1 });
    }

    render() {

        console.log(this.props);
        return (
            <div>
                <span style={this.style} className={this.getBadgeClassNames()} >{ this.countFormat() }</span> 
                
                {/* Beloe on onClick = we are passing the simple arrow function to handole the parameter, otherwise we cannot send the parameter to 'handleIncrement' function  */}
                <button style={{ fontWeight: 'bold' }} onClick={() => this.handleIncrement({id : 1})} className="btn btn-secondary btn-sm" >Increment</button>

                {/* React RULE - For modifying the state like delete, add, edit - should be done at the componenet where this state is presented. So below we raise the 
                    delete event and then Counters component will handle this event  
                */} 
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClassNames() {
        let classes = "badge m-2 ";
        classes += (this.state.value === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    countFormat() {
        const { value } = this.state;
        return (value === 0) ? 'Zero' : value;
    }
}

export default Counter;