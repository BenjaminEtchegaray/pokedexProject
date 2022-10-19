import PropTypes from 'prop-types';
import './style.scss';

const PokemonList = ({
  pokemons,
}) => (
  <div className="pokemons">
    <ul className="pokemons_list">
      {pokemons
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((pokemon) => (
          <section className="pokemons_list_pokemon" key={pokemon.id}>
            <h3 className="pokemons_list_pokemon_name">{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} className="pokemons_list_pokemon_picture" alt={pokemon.name} />
            <p className="pokemons_list_pokemon_type">Type : {pokemon.types[0].type.name}</p>
            <p className="pokemons_list_pokemon_id">#{pokemon.id}</p>
          </section>
        ))}
    </ul>
  </div>
);

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,

};
// == Export
export default PokemonList;
