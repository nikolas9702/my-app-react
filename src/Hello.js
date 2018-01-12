import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {
	super () {
		var html =  "1"
		console.log(html);
	}
	construct () {
		const html = "hello"
		console.log(html);
		return this.menu()
	}
	menu() {
		console.log(2);
		return  (<div className="App">
			<h1>nikolas el puto crack</h1>
			<input type="text" />
			<button type="button" class="btn btn-primary">nikolas es muy aspero</button>
			</div>)
	}
	render() {
		console.log(3);
		console.log("niko es un crack");
		console.log(this.html);
		return  (<div className="App">
			<h1>nikolas el puto crack</h1>
			<input type="text" />
			<button type="button" class="btn btn-primary">nikolas es muy aspero</button>
			</div>)
	}
}

