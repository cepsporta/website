import React from "react";

export default (props) => {
    return (
        <div>
            <div className="agile-choose-grids">
                {
                    props.Data.map((single, i) => (
                        <Template key={i} {...single } />
                    ))
                }
            </div>
        </div>
    );
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Template = (props) => {
    return (
        <div className="col-sm-3 agile-choose-grid">
            <div className="cardContainer card">
                <div className="wrapper" style={{ background: "url(" + props.profile + ")", backgroundSize: "cover" }}>
                    <div className="header">
                        <div className="date">
                            {props.position}
                        </div>
                        <ul className="menu-content">
                            <li><a href={"tel:" + props.mobile} className="fa fa-phone-square"><span>{getRandomInt(1, 20)}</span></a></li>
                            <li><a href={props.facebook} className="fa fa-facebook-official"><span>{getRandomInt(1, 20)}</span></a></li>
                            <li><a href={"mailto:" + props.email} className="fa fa-envelope-o"><span>{getRandomInt(1, 20)}</span></a></li>
                        </ul>
                    </div>
                    <div className="data">
                        <div className="content">
                            <h1 className="title">{props.name} </h1>
                            <span className="author">{props.text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};