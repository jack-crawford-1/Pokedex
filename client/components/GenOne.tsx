import { Link } from 'react-router-dom'

function GenOne() {
  const id = 1

  return (
    <div className="generations">
      <h2>Kanto</h2>
      <p>
        The Kanto region (Japanese: カントー地方 Kanto region) is a region of
        the Pokémon world. Kanto is located east of Johto, which together form a
        joint landmass that is south of Sinnoh.
      </p>

      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to={`/generations/gen-one/names/${id}`}>
        <button>Kanto Pokèmon</button>
      </Link>
      <Link to={`/generations/gen-one/types/${id}`}>
        <button>Pokèmon Types</button>
      </Link>
    </div>
  )
}

export default GenOne
