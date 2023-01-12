import React from "react";
import './card.styles.css'


export const Card = (props) => {
    return(
    <div className="card-container">
        <h2>{props.pokemon.pokename.toUpperCase()}</h2>
        <img src={`${props.pokemon.sprite}`} alt="pokemon" />
        <p> {props.pokemon.id}</p>
    </div>
    )
}