import { Link, useParams } from 'react-router-dom'
import { fetchPokemonGeneration } from '../apis/Pokemon'
import { useQuery } from '@tanstack/react-query'

function GenTwoTypes() {
  const { id } = useParams()

  if (id === undefined) {
    return <p>No ID provided</p>
  }

  const {
    isPending,
    isError,
    data: pokemonByGeneration,
  } = useQuery({
    queryKey: ['pokemon-GenTwo'],
    queryFn: async () => fetchPokemonGeneration(Number(2)),
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
      <h2>Pokémon Types {pokemonByGeneration.main_region.name}:</h2>
      <ul>
        {pokemonByGeneration.types.map((type) => (
          <li key={type.url}>
            <Link to={`/pokemon/${type.name}`}>{type.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default GenTwoTypes
