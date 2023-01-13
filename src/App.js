import {useState, useEffect} from 'react'
import { CardList } from './components/card-list/card-list.component';
import { Navbar } from './components/navbar/navbar.component';
import './App.css';

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
},
{
  name:'Lily',
  pokename:'serperior',
  quote:'Queria poner a Crobat pero ya estaba'
},
{
  name:'Emily',
  pokename:'mawile',
  quote:'No matter what changes, will no longer change me'
},
{
  name:'Betty',
  pokename:'sylveon',
  quote:'Pero… ¿dejas de amar a alguien porque te traiciona? No lo creo. Eso es lo que hace que la traición duela tanto; el dolor, la frustración, la furia… y yo seguía amándola.'
},
{
  name:'Angie',
  pokename:'scorbunny',
  quote:"When I choose to see the good side of things, I'm not being naive. It is strategic and necessary. It's how I learned to survive through everything."
},
{
  name:'Alexis',
  pokename:'krookodile',
  quote:'Fight for everlasting peace.'
},


]


function App() {
   const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log({pokemons})
  },[pokemons])

  useEffect(() => {
    const fetchPokemon = async () => {
 
      const fetchingPromises = await Promise.all(library.map(element => fetch(`https://pokeapi.co/api/v2/pokemon/${element.pokename}/`)))
      const cardJsons = await Promise.all(fetchingPromises.map(element => element.json()));
      const cards = cardJsons.map((card, index) => 
      {return({
        ...library[index],
        id: card.id,
        sprite:card.sprites.front_default
      })}
      )
      setPokemons(cards)
    }
    fetchPokemon()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <h1>God i want a front-end job so badly</h1>
      <CardList pokemons={pokemons}/>
    </div>
  );
}

export default App;
