import React from "react";

let data = [{
    time: "16-January-2018",
    posts: [
        {
            head: "SPORTA LAUNCHED",
            content: "The Sports Event is officially launched in by Principal of College Of Engineering Poonjar."
        },
        {
            head: "CRICKET",
            content: "Two matches were conducted. The first match was between Karnan and Napoleon. Karnan qualified to next round.The second match was between Bhagat Singh and Napoleon. Bhagat Singh was qualified."
        },
        {
            head: "BADMINTON BOYS(Singles)",
            content: "There were 2 matches. The first match was between Bhagat Singh and Napoleon. The match was won by Napoleon. The second match was between Bhagat Singh and Karnan. Only one set of game was conducted."
        },
        {
            head: "BADMINTON GIRLS(Singles)",
            content: "There were 2 matches.The first match was between Bhagat Singh and Napoleon. The match was won by Napoleon. The second match was between Bhagat Singh and Karnan. Only one set of game was conducted."
        }
    ]
},{
    time: "17-January-2018",
    posts: [
        {
            head: "CRICKET",
            content: "Cricket final was conducted. The match was between Bhagat Singh and Karnan. Bhagat Singh won the match."
        },
        {
            head: "BADMINTON BOYS(Singles)",
            content: "Final match was conducted between Bhagat Singh and Napoleon. The match was won by Bhagat Singh."
        },
        {
            head: "BADMINTON GIRLS(Singles)",
            content: "There were 2 matches. The first match was between Bhagat Singh and Karnan.The match was won by Bhagat Singh. The second match was final and the match was between Napoleon and Bhagat Singh. The finals was won by Napoleon."
        },
        {
            head: "BADMINTON BOYS(Doubles)",
            content: "The match was between Bhagat Singh and Napoleon.Bhagat Singh got promoted to finals."
        },
        {
            head: "BADMINTON GIRLS(Doubles)",
            content: "There were two matches. The first was between Bhagat Singh and Napoleon.Napoleon got selected to next round.The second game was between Bhagat Singh and Karnan.Karnan got selected to next round."
        },
        {
            head:"VOLLEY BALL",
            content: "The match was between Bhagat Singh and Napoleon.Bhagat Singh got promoted to next round. "
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
                            <div key={j}>
                                <h1>{singleBlock.head}</h1>
                                <p>{singleBlock.content}</p>
                            </div>
                        ))
                        :
                        <div>
                            <h1>{singleLine.head}</h1>
                            <p>{singleLine.content}</p>
                        </div>
                    }

                </div>
            ))}
        </div>
    );
};