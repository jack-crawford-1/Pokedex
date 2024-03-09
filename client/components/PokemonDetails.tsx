import { useParams } from 'react-router-dom'
import { Pokemon } from '../../models/Pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName } from '../apis/Pokemon.ts'

export default function PokemonDetail() {
  const { pokemonName } = useParams()

  if (pokemonName === undefined) {
    console.log(pokemonName)
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

  console.log(pokemonName)

  return (
    <div>
      <h1>{pokemonName}</h1>
    </div>
  )
}
