import React from "react";

let data = [{
    time: "12-10-17",
    head: "Sporta Lounched",
    content: "The Sports Event is officially launched in by Principal of College Of Engineeding Poonjar"
}, {
    time: "12-10-17",
    head: "Sporta Lounched",
    content: "The Sports Event is officially launched in by Principal of College Of Engineeding Poonjar"
}, {
    time: "12-10-17",
    head: "Sporta Lounched",
    content: "The Sports Event is officially launched in by Principal of College Of Engineeding Poonjar"
}, {
    time: "12-10-17",
    head: "Sporta Lounched",
    content: "The Sports Event is officially launched in by Principal of College Of Engineeding Poonjar"
},
];

export default () => {
    return (
        <div className="timeline-container">
            {data.map((singleLine) => (
                <div className="timeline-item" date-is={singleLine.time}>
                    <h1>{singleLine.head}</h1>
                    <p>{singleLine.content}</p>
                </div>
            ))}
        </div>
    );
};