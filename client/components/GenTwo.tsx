import { Link } from 'react-router-dom'

function GenTwo() {
  const id = 2
  return (
    <div className="generations">
      <h2>Johto</h2>
      <p>
        The Johto region (Japanese: ジョウト地方 Johto region) is a region of
        the Pokémon world. Johto is located west of Kanto, which together form a
        joint landmass that is south of Sinnoh and Sinjoh Ruins. It was the
        second core series region to be introduced.{' '}
      </p>

      <Link to="/">
        {' '}
        <button>Home</button>
      </Link>
      <Link to={`/generations/gen-two/names/${id}`}>
        {' '}
        <button>Johto Pokèmon</button>
      </Link>
      <Link to={`/generations/gen-two/types/${id}`}>
        {' '}
        <button>Pokèmon Types</button>
      </Link>
    </div>
  )
}

export default GenTwo
