import { Link, Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
  return (
    <>
      <div className="app">
        <Header />
      </div>
      <Outlet />
      <span>
        <Link to="/about">
          <p className="home-text">About</p>
        </Link>
      </span>
    </>
  )
}

export default App
