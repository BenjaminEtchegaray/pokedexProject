// == Import
import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';

// == Composant
function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');
      console.log(res.data.results);

      res.data.results.forEach(async (pokemon) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        console.log(poke.data);
      });
    };
    getPokemon();
  }, []);
  return (
    <div className="app">
      <header>Pokemon</header>
    </div>
  );
}

// == Export
export default App;
