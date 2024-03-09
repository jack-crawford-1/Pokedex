import { Link } from 'react-router-dom'

function Generations() {
  return (
    <div className="generations">
      <h2>Pokémon Regions</h2>

      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Generations/gen-one">
        <button>Kanto</button>
      </Link>
      <Link to="/Generations/gen-two">
        <button>Johto</button>
      </Link>
    </div>
  )
}

export default Generations
