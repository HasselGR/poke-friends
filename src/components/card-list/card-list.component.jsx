import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css'

export const CardList = ({pokemons}) =>{
    console.log(pokemons)
    return(
    <div className="card-list">
        {
        pokemons.map(pokemon => 
            <Card key={pokemon.id} pokemon={pokemon}/>)
        }  
    </div>
    );
}