// == Import
import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonList from '../PokemonList';
import './style.scss';

// == Composant
function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const reponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
      console.log(reponse.data.results);

      reponse.data.results.forEach(async (pokemon) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  console.log(pokemons);

  return (
    <div className="app">
      <header className="app_header">Pokedex</header>
      <PokemonList
        pokemons={pokemons}
      />
    </div>
  );
}

// == Export
export default App;
