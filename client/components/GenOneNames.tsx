import { Link, useParams } from 'react-router-dom'
import { fetchPokemonGeneration } from '../apis/Pokemon'
import { useQuery } from '@tanstack/react-query'

function GenOneNames() {
  const { id } = useParams()

  if (id === undefined) {
    return <p>No ID provided</p>
  }
  const {
    isPending,
    isError,
    data: pokemonByGeneration,
  } = useQuery({
    queryKey: ['pokemon-GenOne'],
    queryFn: async () => fetchPokemonGeneration(Number(id)),
  })

  if (isPending) {
    return <p>pending</p>
  }
  if (isError) {
    return <p>Something went wrong sorry</p>
  } else if (!pokemonByGeneration) {
    return <p>Loading...</p>
  }
  return (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h2>Pokémon in {pokemonByGeneration.main_region.name}:</h2>
      <ul>
        {pokemonByGeneration.pokemon_species.map((p) => (
          <li key={p.url}>
            <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default GenOneNames
