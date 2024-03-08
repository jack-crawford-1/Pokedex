import { Link } from 'react-router-dom'

function GenTwo() {
  return (
    <div>
      <h2>Second Sub page</h2>
      <p>Some text for the first sub page</p>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/generations/gen-two/names"> Generation 2 Names</Link>
      </button>
      <button>
        <Link to="/generations/gen-two/locations"> Generation 2 Locations</Link>
      </button>
    </div>
  )
}

export default GenTwo
