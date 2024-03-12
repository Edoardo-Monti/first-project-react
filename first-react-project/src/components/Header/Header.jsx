import React from "react"
import './Header.css'

export default function Header(){
    return (
        <nav>
            <div className="container">
                <div className="box-1">
                    <img src="/reactjs-icon.png" alt="" />
                    <h2>ReactFacts</h2>
                </div>
                <div className="box-2">
                    <h3>React Course - Project 1</h3>
                </div>
            </div>
        </nav>
    )   
}