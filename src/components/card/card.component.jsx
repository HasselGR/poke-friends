import React from "react";
import './card.styles.css'


export const Card = (props) => {
    console.log('The card, is here')
    return(
    <div className="card-container">
        <h2>{props.pokename.toUpperCase()}</h2>
        <img src={`${props.sprite}`} alt="pokemon" />
        <p> {props.id}</p>
    </div>
    )
}