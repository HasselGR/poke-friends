import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css'

export const CardList = (props) =>{
    console.log('the rendering');
    return(
    <div className="card-list">
        {
        props.pokemons.map(pokemon => 
            <Card key={pokemon.id} pokemon={pokemon}/>)
        }  
    </div>
    );
}