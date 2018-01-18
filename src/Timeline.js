import React from "react";

let data = [{
    time: "17 January 2018",
    posts: [
        {
            head: "Cricket",
            content: "Cricket final was conducted. The match was between Bhagat Singh and Karnan. Bhagat Singh won the match."
        },
        {
            head: "Badminton Boys",
            headSub: "Singles",
            content: "Final match was conducted between Bhagat Singh and Napoleon. The match was won by Bhagat Singh."
        },
        {
            head: "Badminton Girls",
            headSub: "Singles",
            content: "There were 2 matches. The first match was between Bhagat Singh and Karnan.The match was won by Bhagat Singh. The second match was final and the match was between Napoleon and Bhagat Singh. The finals was won by Napoleon."
        },
        {
            head: "Badminton Boys",
            headSub: "Doubles",
            content: ""
        },
        {
            head: "Badminton Girls",
            headSub: "Doubles",
            content: ""
        },
        {
            head: "Volley Ball",
            content: ""
        }
    ]
}, {
    time: "16 January 2018",
    posts: [
        {
            head: "Sporta Launched",
            content: "The Sports Event is officially launched in by Principal of College Of Engineering Poonjar."
        },
        {
            head: "Cricket",
            content: "Two matches were conducted. The first match was between Karnan and Napoleon. Karnan qualified to next round.The second match was between Bhagat Singh and Napoleon. Bhagat Singh was qualified."
        },
        {
            head: "Badminton Boys",
            headSub: "Singles",
            content: "There were 2 matches. The first match was between Bhagat Singh and Napoleon. The match was won by Napoleon. The second match was between Bhagat Singh and Karnan. Only one set of game was conducted."
        },
        {
            head: "Badminton Girls",
            headSub: "Singles",
            content: "There were 2 matches.The first match was between Bhagat Singh and Napoleon. The match was won by Napoleon. The second match was between Bhagat Singh and Karnan. Only one set of game was conducted."
        }
    ]
}
];

export default () => {
    return (
        <div className="timeline-container">
            {data.map((singleLine, i) => (
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
        <h1>{props.data.head} {props.data.headSub ? <span>{props.data.headSub}</span> : ""}</h1>
        <p>{props.data.content}</p>
    </div>
);