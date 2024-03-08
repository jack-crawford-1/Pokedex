import { Link } from 'react-router-dom'

function GenOneLocations() {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h2>Locations from generation 1</h2>
      <p>EG: </p>
      <ul>
        <li>Pallet Town</li>
        <li>Lava Island</li>
        <li>Team Rocket Village</li>
      </ul>
    </div>
  )
}
export default GenOneLocations
