import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="homepage">
      <h1>Pokèdex</h1>
      <h2>Using React Query and the Pokè API</h2>
      <div className="gen-btn">
        <Link to="/Generations">
          <button>Regions</button>
        </Link>
        <Link to="Second">
          <button>TBC</button>
        </Link>
        <Link to="Third">
          <button>TBC</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
