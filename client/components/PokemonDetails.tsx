import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName } from '../apis/Pokemon.ts'

export default function PokemonDetail() {
  const { pokemonName } = useParams()

  if (pokemonName === undefined) {
    return <p>Pokemon name not provided. Please specify a Pokemon.</p>
  }

  const {
    isPending,
    isError,
    data: pokemon,
  } = useQuery({
    queryKey: ['pokemon', pokemonName],
    queryFn: async () => fetchPokemonByName(pokemonName),
  })

  if (isPending) {
    return <p>Loading</p>
  }
  if (isError) {
    return <p>Not working</p>
  }

  return (
    <div className="outer-container">
      <div className="pokemon-container">
        <div className="pokemon-btn">
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
        <div className="pokemon-name">
          <h1>{pokemonName}</h1>
        </div>
        <div className="pokemon-image">
          <img src={pokemon.sprites.front_default} alt={pokemonName} />
        </div>
        <div className="pokemon-index">
          <h2>Index: {pokemon.id}</h2>
        </div>
        <div className="pokemon-types">
          <div className="types-heading">
            <h2>Types</h2>
          </div>
          <div className="types-content">
            <ul>
              {pokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pokemon-abilities">
          <div className="abilities-heading">
            <h2>Abilities</h2>
          </div>
          <div className="abilities-content">
            <ul>
              {pokemon.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pokemon-moves">
          <div className="moves-heading">
            <h2>Moves</h2>
          </div>
          <div className="moves-content">
            <ul>
              {pokemon.moves.map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
