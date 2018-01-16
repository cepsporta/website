import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Coordinators from "./Coordinators";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Coordinators />, document.getElementById('Coordinators'));
registerServiceWorker();
