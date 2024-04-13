import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName } from '../apis/Pokemon.ts'

export default function PokemonDetail() {
  const { name } = useParams()

  if (name === undefined) {
    return <p>Pokemon name not provided. Please specify a Pokemon.</p>
  }

  const {
    isPending,
    isError,
    data: pokemon,
  } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => fetchPokemonByName(name),
  })

  if (isPending) {
    return <p>Loading</p>
  }
  if (isError) {
    return <p>Not working</p>
  }

  const firstFiveMoves = pokemon.moves.slice(0, 5)

  return (
    <div className="pokemon-container">
      <h2 className="pokemon-name">{name}</h2>
      <div className="pokemon-image">
        <img src={pokemon.sprites.front_default} alt={name} />
      </div>
      <h3 className="pokemon-index">Index: {pokemon.id}</h3>
      <div className="pokemon-types">
        <h2>Types</h2>
        <ul className="types-content">
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div className="pokemon-abilities">
        <h2>Abilities</h2>
        <ul className="abilities-content">
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <div className="pokemon-moves">
        <h2>Moves</h2>
        <ul className="moves-content">
          {firstFiveMoves.map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
