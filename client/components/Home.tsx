import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Practice App Main Section</h1>
      <p>React Query</p>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/Generations">Generations</Link>
      </button>
      <button>
        <Link to="/Second">Second</Link>
      </button>
      <button>
        <Link to="/Third">Third</Link>
      </button>
    </div>
  )
}

export default Home
