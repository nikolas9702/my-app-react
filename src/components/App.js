import React, { Component } from 'react';
// import logo from './Global/images/logo.svg';
// import './Global/css/App.css';

// Components
// 
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
// 
import items from '../data/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Codigos de Nikolas" items={items} />
        <Content />
        <Footer copyright="llegue me a copiar y ver lo que le pasa " />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
