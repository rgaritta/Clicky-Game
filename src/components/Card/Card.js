import React from "react";
import "./Card.css";

const Card = props => (
    <div
        className = 'card'
        value = {props.id}
        onClick={() => props.handleClick(props.id)}
    >
    <div className="container">
        <img alt={props.name} src={props.images} />
        </div>
    </div>
)

export default Card;