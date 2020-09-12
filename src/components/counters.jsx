import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Counter from './counter'


class Counters extends Component {

    state = {
        counters : [
            {id: 1, value : 4},
            {id: 2, value : 0},
            {id: 3, value : 0},
            {id: 4, value : 0},
        ]
    }

    handleIncrement = counterParam => {

        // In we clone the state.counter obj  into another and then modify it will directly change the state obj,
        // so to avoid this, first clone the state ob and then clone the particular counter obj which need to
        // be changed in the same index, then it wont change the state directly.
        const counters = [...this.state.counters];
        const index = counters.indexOf(counterParam)
        counters[index] = {...counterParam} // This line is used to create different counters obj from state.
        counters[index].value++;
        console.log(counters, this.state.counters);
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        // console.log('Event handler called.',counter)
        const counters = this.state.counters.filter( (counter) =>  counter.id !== counterId);
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map( counter => {
            counter.value = 0;
            return counter;
        });
        console.log(counters, this.state.counters);
        this.setState({counters});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                { this.state.counters.map( counter =>
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}
                        selected='true' 
                    />  
                )}
            </div>
        );
    }
}

export default Counters;