import React from "react";

export default (props) => {
    return (
        <ul {...props.ULProps}>

            {props.Data.map((MenuItem, i) => (
                <li key={i} {...props.LIProps}>
                    <a href={MenuItem.Link}>
                        <span>{MenuItem.Name}</span>
                    </a>
                </li>
            ))}

        </ul>
    );
};