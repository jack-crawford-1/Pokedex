import { Link } from 'react-router-dom'

function GenTwo() {
  const id = 2
  return (
    <div>
      <h2>Second Sub page</h2>
      <p>Some text for the first sub page</p>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to={`/generations/gen-two/names/${id}`}> Generation 2 Names</Link>
      </button>
      <button>
        <Link to={`/generations/gen-two/types/${id}`}> Generation 2 Types</Link>
      </button>
    </div>
  )
}

export default GenTwo
