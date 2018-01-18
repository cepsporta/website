import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { BoardData, MenuData, TimelineData, CoordinatorsData } from "./Data";
import { Timeline, MenuList, Coordinators, Board } from "./Components";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Coordinators Data={CoordinatorsData} />, document.getElementById('Coordinators'));
ReactDOM.render(<Timeline Data={TimelineData} />, document.getElementById('Timeline'));

ReactDOM.render(
    <div>
        {BoardData.map((singleBord) => (<Board
            BoardName={singleBord.Name}
            data={singleBord.Head}
            data2={singleBord.Data} />))}
    </div>
    , document.getElementById('Boards'));

ReactDOM.render(<MenuList ULProps={{ className: "slimmenu" }} Data={MenuData} />,
    document.getElementById('MainMenu'));

ReactDOM.render(<MenuList Data={MenuData} />,
    document.getElementById('FooterMenu'));

// registerServiceWorker();
