import { Link } from 'react-router-dom'

function GenTwoNames() {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h2>Generation 2 Pokemon</h2>
      <p>A list of Pokemon names to go here</p>
      <p>EG: </p>
      <ul>
        <li>Raddish</li>
        <li>Peakin</li>
        <li>Vusolt</li>
      </ul>
    </div>
  )
}

export default GenTwoNames
