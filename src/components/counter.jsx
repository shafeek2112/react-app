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
        
        console.log(product)

        //To change the state property we have to use setState function.
        this.setState({ count: this.state.count + 1 });
    }

    render() {

        return (
            <React.Fragment>
                <span style={this.style} className={this.getBadgeClassNames()} >{ this.countFormat() }</span> 
                
                {/* Beloe on onClick = we are passing the simple arrow function to handole the parameter, otherwise we cannot send the parameter to 'handleIncrement' function  */}
                <button style={{ fontWeight: 'bold' }} onClick={() => this.handleIncrement({id : 1})} className="btn btn-secondary btn-sm" >Increment</button>
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