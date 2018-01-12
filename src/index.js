import React from 'react';
import ReactDOM from 'react-dom';
import './components/Global/css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './components/App';
// import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(< Hello />, document.getElementById('root'));
ReactDOM.render(< App />, document.getElementById('root'));
registerServiceWorker();
