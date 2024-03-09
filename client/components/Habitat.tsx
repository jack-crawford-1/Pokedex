import { useQuery } from '@tanstack/react-query'
import { fetchAllHabitats } from '../apis/Pokemon'
import { Link } from 'react-router-dom'

function Habitat() {
  const {
    isPending,
    isError,
    data: habitats,
  } = useQuery({
    queryKey: ['all-habitats', name],
    queryFn: fetchAllHabitats,
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError || !habitats) {
    return <p>Error loading habitats.</p>
  }

  return (
    <div>
      <h1>List of Habitats</h1>
      <ul>
        {habitats.map((habitat) => (
          <li key={habitat.name}>
            <Link to={`/Habitats/${habitat.name}`}>{habitat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Habitat
