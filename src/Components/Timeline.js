import React from "react";
import reactStringReplace from "react-string-replace";

export default (props) => {
    return (
        <div className="timeline-container">
            {props.Data.map((singleLine, i) => (
                <div key={i} className="timeline-item" date-is={singleLine.time}>
                    {singleLine.hasOwnProperty("posts") ?
                        singleLine.posts.map((singleBlock, j) => (
                            <Post key={j} data={singleBlock} />
                        ))
                        :
                        <Post key={i} data={singleLine} />
                    }

                </div>
            ))}
        </div>
    );
};

let Post = (props) => (
    <div>
        <h1>
            {
                reactStringReplace(props.data.head, /\[+([^\][]+)]+/g, (match, i) => (
                    <span key={i}>{match}</span>
                ))
            }
        </h1>
        <p>{props.data.content}</p>
    </div>
);