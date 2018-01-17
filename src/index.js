import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Coordinators from "./Coordinators";
import Timeline from "./Timeline";
import Board from "./Board";
import registerServiceWorker from './registerServiceWorker';
import Scheduleboard from "./Scheduleboard.json";
import Scoreboard from "./Scoreboard.json";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Coordinators />, document.getElementById('Coordinators'));
ReactDOM.render(<Timeline />, document.getElementById('Timeline'));
ReactDOM.render(<Board
    BoardName={Scheduleboard.Name}
    data={Scheduleboard.Head}
    data2={Scheduleboard.Data} />, document.getElementById('Scheduleboard'));
ReactDOM.render(<Board
    BoardName={Scoreboard.Name}
    data={Scoreboard.Head}
    data2={Scoreboard.Data} />, document.getElementById('Scoreboard'));
// registerServiceWorker();
