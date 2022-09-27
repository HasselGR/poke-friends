import {useState, useEffect} from 'react'
import { CardList } from './components/card-list/card-list.component';
import './App.css';

function App() {
   const library =[{
    name: 'David',
    pokename:'volcarona',
    quote: 'In hindsight, is easy to envision yourself making all the right choices, so much so that we often lose sight of how we could have made the wrong ones.'
   },
  {
    name: 'Carlos',
    pokename:'metagross',
    quote:'Son Vainas', 
  },
  {
    name: 'Karen',
    pokename: 'deino',
    quote: 'Los barcos no se hunden por el agua que los rodea, se hunden por el agua que entra en ellos. No permitas que lo que sucede a tu alrededor se meta dentro de ti y te hunda.',
  },
  {
    name:'Eliana',
    pokename: 'bulbasaur',
    quote:'Lo Mejor de tocar fondo es que solo puedes subir',
  },
  {
    name:'Chucho',
    pokename:'gligar',
    quote:'Va a pasar',
  },
  {
    name:'Josemi',
    pokename:'gengar',
    quote:'Dying \n Is an art, like everything else. \n I do it exceptionally well.',
  },
  {
    name:'Sebastian',
    pokename:'crobat',
    quote:'To come to acceptance with things and feelings is rare, and to accept them completetely is a miracle... Let yourself feel sad when you are, and let yourself forget when you do.',
  },
  {
    name:'Fabrizio',
    pokename:'squirtle',
    quote:'Overwatch 2 va a salir, estan preparados?'
  },
  {
    name:'Adolfo',
    pokename:'greninja',
    quote:'Es pan.'
  },
  {
    name:'Edward',
    pokename:'empoleon',
    quote:'Y esa vaina vons?'
  }
  ]
   let cards= []
   const [pokemon, setPokemon] = useState();
   const [isShowing, setIsShowing] = useState(false);

   const fetchPokemon = async () => { //question, should i put the async here as well? what should i do.
      library.map(async (element) => {
        const response = await(fetch(`https://pokeapi.co/api/v2/pokemon/${element.pokename}/`))
        const poke =  await response.json();
        cards.push({
          ...element,
          id: poke.id,
          sprite:poke.sprites.front_default
        })
      })
      setIsShowing(!isShowing);
      console.log(cards)
      return cards;
   }

   
  return (
    <div className="App">
      <h1 onClick={fetchPokemon} >God i want a front-end job so badly</h1>
      {isShowing? <CardList pokemons={cards}/>: null}
      {/* <CardList pokemons={cards}/> */}
    </div>
  );
}

export default App;
