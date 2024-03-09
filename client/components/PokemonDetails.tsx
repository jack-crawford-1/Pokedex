import { Link, useParams } from 'react-router-dom'
import { Pokemon } from '../../models/Pokemon.ts'
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
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h1>{pokemonName}</h1>
      <h2>Index</h2>
      <p>{pokemon.id}</p>
      <img src={pokemon.sprites.front_default} alt={pokemonName} />
      <h2>Types</h2>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Moves</h2>
      <ul>
        {pokemon.moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  )
}
