import { Outlet } from 'react-router-dom'
import logo from '../images/logo.png'

function Home() {
  return (
    <div className="homepage">
      <img src={logo} alt="Pokemon Logo" className="homepage-logo" />
      <Outlet />
    </div>
  )
}

export default Home
