import React from "react";

export default function Jokes(props){
    return(
        <div>
            <div>
                {props.setup && 
                <>
                    <p>setup: {props.setup}</p>
                
                </>
                }
                {props.punchline && 
                <>
                    <p>punchline: {props.punchline}</p>
                
                </>
                }

                <br />
            </div>
        </div>
    )
}