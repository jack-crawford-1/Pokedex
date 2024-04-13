import { Link, useParams, Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemon } from '../apis/Pokemon'
import { Pokemon } from '../../models/Pokemon'
import { useState, useEffect } from 'react'

function PokemonOriginals() {
  const { id } = useParams()
  const [sprites, setSprites] = useState<{ [key: string]: string }>({})

  const {
    isPending,
    isError,
    data: pokemonData,
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => fetchPokemon(),
  })

  useEffect(() => {
    if (pokemonData) {
      const fetchAllSprites = async () => {
        const promises = pokemonData.results.map(async (poke) => {
          const response = await fetch(poke.url)
          const data = await response.json()
          return { name: poke.name, sprite: data.sprites?.front_default }
        })

        const spritesData = await Promise.all(promises)
        const newSprites = {}
        spritesData.forEach((spriteData) => {
          if (spriteData.sprite) {
            newSprites[spriteData.name] = spriteData.sprite
          }
        })
        setSprites(newSprites)
      }

      fetchAllSprites()
    }
  }, [pokemonData])

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Something went wrong, sorry</p>
  }

  if (!pokemonData) {
    return <p>No Pokémon data found.</p>
  }
  return (
    <div className="pokemon-page">
      <div className="generations genOne">
        <h2>Pokémon in Kánto:</h2>
        <ul>
          {pokemonData.results.map((poke: Pokemon) => (
            <Link to={`/pokemon/${poke.name}`} key={poke.name}>
              <li>
                {sprites[poke.name] ? (
                  <img
                    src={sprites[poke.name]}
                    alt={`Sprite of ${poke.name}`}
                  />
                ) : (
                  <span>Loading sprite...</span>
                )}
                {poke.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="pokemon-details">
        <Outlet />
      </div>
    </div>
  )
}

export default PokemonOriginals
