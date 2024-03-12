import React from "react";
import './Main.css'

export default function Main(){
    return (
        <div className="main">
            <div className="container-main">
                <h1>Fun Facts About React</h1>
                <div className="list-container">
                    <ul>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100K stars on GitHub</li>
                        <li>Is maintained by Facebook</li>
                        <li>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}