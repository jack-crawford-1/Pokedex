import { Link } from 'react-router-dom'

function GenOneNames() {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h2>this is sub of a sub</h2>
      <p>A list of Pokemon names to go here</p>
      <p>EG: </p>
      <ul>
        <li>Charmander</li>
        <li>Bulbasaur</li>
        <li>Sparrow</li>
      </ul>
    </div>
  )
}

export default GenOneNames
