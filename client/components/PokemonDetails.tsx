import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName } from '../apis/Pokemon.ts'

export default function PokemonDetail() {
  const { name } = useParams()

  const {
    isLoading,
    isError,
    data: pokemon,
  } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      if (name === undefined) {
        throw new Error('Pokemon name not provided')
      }
      return fetchPokemonByName(name)
    },
    enabled: !!name,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Not working</p>
  }

  if (!pokemon) {
    return <p>Pokemon name not provided. Please specify a Pokemon.</p>
  }

  const firstFiveMoves = pokemon.moves.slice(0, 5)

  return (
    <div className="single-pokemon-container">
      <div className="single-pokemon-header">
        <h2>{name}</h2>
        <span className="index">#{pokemon.id.toString().padStart(3, '0')}</span>
      </div>
      <div className="inner-container">
        <div className="single-pokemon-image">
          <img src={pokemon.sprites.front_default} alt={name} />
        </div>
        <div className="single-pokemon-details">
          <div className="detail-section">
            <h3>Types</h3>
            <ul className="types-content">
              {pokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div className="detail-section">
            <h3>Abilities</h3>
            <ul className="abilities-content">
              {pokemon.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="detail-section">
            <h3>Moves</h3>
            <ul className="moves-content">
              {firstFiveMoves.map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              ))}
            </ul>
          </div>
          <div className="detail-section">
            <h3>Stats</h3>
            <ul className="stats-content">
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="detail-section">
            <h3>Attributes</h3>
            <ul className="stats-content">
              <li>Height: {pokemon.height} </li>
              <li>Weight: {pokemon.weight}</li>
            </ul>
          </div>
          <div className="detail-section">
            <h3>Held Items</h3>
            <ul className="held-items-content">
              {pokemon.held_items.length > 0 ? (
                pokemon.held_items.map((item, index) => (
                  <li key={index}>{item.item.name}</li>
                ))
              ) : (
                <li>No held items</li>
              )}
            </ul>
          </div>

          <div className="back-link">
            <a href="/">back</a>
          </div>
        </div>
      </div>
    </div>
  )
}
