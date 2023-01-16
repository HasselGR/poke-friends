import React from "react";
import './card.styles.css'
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";


export const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    
    const flipCard = () =>{
        setIsFlipped(!isFlipped)
    }
    
    return(
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div style={{backgroundColor: props.pokemon.color}} className="card-container" onClick={flipCard}>
        <h2>{props.pokemon.pokename.toUpperCase()}</h2>
        <img src={`${props.pokemon.sprite}`} alt="pokemon" />
        <p> {props.pokemon.id}</p>
    </div>
    <div style={{backgroundColor: props.pokemon.color}} className="card-container" onClick={flipCard}>
        <h2>{props.pokemon.name}</h2>
        
        <p> {props.pokemon.quote}</p>
    </div>
    </ReactCardFlip>
    )
}