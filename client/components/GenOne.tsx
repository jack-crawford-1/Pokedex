import { Link } from 'react-router-dom'

function GenOne() {
  const id = 1

  return (
    <div>
      <h2>First Sub page</h2>
      <p>Some text for the first sub page</p>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to={`/generations/gen-one/names/${id}`}> Generation 1 Names</Link>
      </button>
      <button>
        <Link to="/generations/gen-one/locations"> Generation 1 Locations</Link>
      </button>
    </div>
  )
}

export default GenOne
