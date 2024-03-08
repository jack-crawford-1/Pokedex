import { Link } from 'react-router-dom'

function GenTwoLocations() {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h2>Locations from generation 2</h2>
      <p>EG: </p>
      <ul>
        <li>Ashen Town</li>
        <li>Sunny City</li>
        <li>Brocks cave</li>
      </ul>
    </div>
  )
}
export default GenTwoLocations
