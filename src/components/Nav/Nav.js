import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
    <ul>
        <li className='title'>
            <a href="/Clicky-Game">{props.title}</a>
        </li>
        <li id="correct">
            {props.correct}
        </li>
        <li id="current">
            Current Score: {props.current}
        </li>
        <li id="top">
            Top Score: {props.top}
        </li>

    </ul>
    </nav>
)

export default Nav;