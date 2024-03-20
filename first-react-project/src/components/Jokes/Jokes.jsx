import React from "react";

export default function Jokes(props){
    return(
        <div>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}