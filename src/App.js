import {useState, useEffect} from 'react'
import { CardList } from './components/card-list/card-list.component';
import { Navbar } from './components/navbar/navbar.component';
import { SearchBox } from './components/search-box/search-box.component';
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
  quote:'Can you feel your heart burning? Can you feel the struggle within? The fear within is beyond anything your soul is able to make. You cannot kill me in a way that matters.'
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
{
  name:'Nina',
  pokename:'eevee',
  quote:"Eres más de lo que tu mismo crees.", 
},
{
  name:'Toto',
  pokename:'xurkitree',
  quote:"Te creo, porque yo tambien soy embustero.", 
},
{
  name:'Luis',
  pokename:'electivire',
  quote:"Soy el verdadero egoista, porque con el egoismo egoismeamos mejor", 
},
{
  name:'Alejo',
  pokename:'ivysaur',
  quote:"NO USES UN FOR EACH SI LO VAS A INTERRUMPIR, GAMBOA", 
},
{ 
  name:'Cesar T.',
  pokename:'umbreon',
  quote:"Pero que habla, mano?", 
},

{
  name:'Diana',
  pokename:'mewtwo',
  quote:"Create Yourself.", 
},
{
  name:'Katrina',
  pokename:'sceptile',
  quote:"Siempre que pienses que algo no tiene solución, míralo desde otra perspectiva y analiza todas las opciones, ya verás que siempre hay una solución.", 
},
]

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#5a483b',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([])


  const handleChange = (event) => {
    setSearchField(event.target.value)
  }

  useEffect(() => {
    console.log({pokemons})
  },[pokemons])

  useEffect(() =>{
    setFilteredPokemons(pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    ))
  },[searchField, pokemons])

  useEffect(() => {
    const fetchPokemon = async () => {
 
      const fetchingPromises = await Promise.all(library.map(element => fetch(`https://pokeapi.co/api/v2/pokemon/${element.pokename}/`)))
      const cardJsons = await Promise.all(fetchingPromises.map(element => element.json()));
      const cards = cardJsons.map((card, index) => 
      {return({
        ...library[index],
        id: card.id,
        sprite:card.sprites.front_default,
        color: colours[card.types[0].type.name]
      })}
      )
      setPokemons(cards)
    }
    fetchPokemon()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <h1>Check out my friends and their favorite Pokemons!</h1>
      <SearchBox
        placeholder='Search Friend'
        handleChange={handleChange}
        />
      <CardList pokemons={searchField === ""? pokemons: filteredPokemons}/>
    </div>
  );
}

export default App;
