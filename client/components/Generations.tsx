import { Link } from 'react-router-dom'

function Generations() {
  return (
    <div>
      <h2>Generations</h2>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/Generations/gen-one"> Generation 1</Link>
      </button>

      <button>
        <Link to="/Generations/gen-two"> Generation 2</Link>
      </button>
    </div>
  )
}

export default Generations
