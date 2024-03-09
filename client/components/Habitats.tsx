import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByHabitat } from '../apis/Pokemon'
import { Link, useParams } from 'react-router-dom'

type Params = {
  habitatName: string
}

function Habitats() {
  const { name } = useParams<Params>()

  const {
    isPending,
    isError,
    data: pokemonByHabitat,
  } = useQuery({
    queryKey: ['each-habitat'],
    queryFn: async () => fetchPokemonByHabitat(name),
  })

  if (name === undefined) {
    return <p>undefined</p>
  }

  if (isPending) {
    return <p>pending</p>
  }

  if (isError) {
    return <p>error</p>
  } else if (!pokemonByHabitat) {
    return <p>loading</p>
  }
  return (
    <div className="generations habitats">
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1>{pokemonByHabitat.name}</h1>
      <h2>Names in different languages</h2>
      <ul>
        {pokemonByHabitat.names.map((habitatName) => (
          <li key={habitatName.name}>{habitatName.name}</li>
        ))}
        <h2>Species found</h2>
      </ul>
      {pokemonByHabitat.pokemon_species.map((p) => (
        <li key={p.url}>{p.name}</li>
      ))}
    </div>
  )
}

export default Habitats
