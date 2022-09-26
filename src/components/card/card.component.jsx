import React from "react";
import './card.styles.css'


export const Card = (props) => (
    <div className="card-container">
        <h2>{props.pokemon.name.toUpperCase()}</h2>
        <img src={`${props.pokemon.sprite}`} alt="pokemon" />
        <p> {props.pokemon.id}</p>
    </div>
);