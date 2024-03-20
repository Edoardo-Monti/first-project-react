import React from "react";
import './Main.css'
import Jokes from "../Jokes/Jokes";

export default function Main(){
    return (
        <div className="main">
            <div className="container-main">
                <h1>JOKES</h1>
                <div className="list-container">
                    <Jokes
                        setup =" I got my daughter a fridge for her birthday."
                        punchline = "I can't wait to see her face light up when she opens it."

                    />
                </div>
            </div>
        </div>
    )
}