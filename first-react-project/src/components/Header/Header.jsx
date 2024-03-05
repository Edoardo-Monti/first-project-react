import React from "react"
import reactLogo from '../../assets/react.svg'
import "./Header.css"


export default function Header(){
    return(
        <div className="nav">
            <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
            <ul className="list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}