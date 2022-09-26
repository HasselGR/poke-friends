import {useState, useEffect} from 'react'
import { Card } from './components/card/card.component';
import './App.css';

function App() {
   const [pokemon, setPokemon] = useState();
   const [isShowing, setIsShowing] = useState(false);

   const fetchPokemon = async () => {
      const response = await(fetch('https://pokeapi.co/api/v2/pokemon/637/'))
      const poke =  await response.json();
      console.log(poke)
      setPokemon({
        name: poke.name,
        id: poke.id,
        sprite: poke.sprites.front_default,
      })
      setIsShowing(!isShowing);
   }

   
  return (
    <div className="App">
      <h1 onClick={fetchPokemon} >God i want a front-end job so badly</h1>
      {isShowing? <Card key={pokemon.id} pokemon={pokemon}/>: null}
    </div>
  );
}

export default App;
