import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

	state = {
		counters : [
			{id: 1, value : 4},
			{id: 2, value : 0},
			{id: 3, value : 0},
			{id: 4, value : 0},
		]
	}

	//React - lifecycle hooks
	/*
	--------------------------------------- Mounting Phase ----------------------------------
	1. Constructor, 
		When componut instance is created this is the first method called. So its a good place to set the state
		Here is we should directly set the state without using setState method. Becas setState method will be 
		assessable only component is fully mounted.
		Need to pass the parameter 'props' in construtor n super to access the this.props.

	2. Render
		This is second method called after the construtor. Note: in this time, all the child component will be
		render recursivly.

	3. ComponentDidMount
		This is the last method called when component if fully mounted.
		This is the perfect place for put AJAX call and change the state according to server response.

	--------------------------------------- Updating Phase ----------------------------------
	1. Render
		Render method will be called when any update in dom. Then it will render all the child component
		based on the change. Only update the changed element in dom.
		React will compare changed dom with previous dom and then change only the affected one.

	2. ComponentDidUpdate
		This will be called after the changes done. In this method we can access previous state n props via 
		prevProps and prevState parameter. Usin these we can compare with the new state n props then 
		make AJAX call only if needed. This is the optimazion techinique
	
	--------------------------------------- Updating Phase ----------------------------------
	1. ComponentWillUnMount
		This will be called when component is going to remove from dom.
		This is good place to cleanup actions.
	*/

	//When componut instance is created this is the first method called. So its a good 
	// constructor(props) {
	// 	super(props);
	// 	console.log(this.props)
	// }
	
	handleIncrementDecrement = (counterParam,type) => {
	
		// In we clone the state.counter obj  into another and then modify it will directly change the state obj,
		// so to avoid this, first clone the state ob and then clone the particular counter obj which need to
		// be changed in the same index, then it wont change the state directly.
		const counters = [...this.state.counters];
		const index = counters.indexOf(counterParam);
		counters[index] = {...counterParam}; // This line is used to create different counters obj from state.
		(type == 'increment') ? counters[index].value++ : counters[index].value-- ;
		console.log(counters, this.state.counters);
		this.setState({ counters });
	}

	/*handleDecrement = (counterParam) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counterParam)
		counters[index] = {...counterParam} // This line is used to create different counters obj from state.
		counters[index].value--;
		this.setState({ counters });
	}*/
	
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
			<React.Fragment>
				<NavBar count={this.state.counters.filter( c => c.value > 0 ).length}/>
				<Counters
					counters={this.state.counters}
					onReset={this.handleReset}
					onDelete={this.handleDelete}
					// onIncrement={this.handleIncrement}
					// onDecrement={this.handleDecrement}
					onIncrementDecrement={this.handleIncrementDecrement}
				/>
			</React.Fragment>
		);
	}
}

export default App;
