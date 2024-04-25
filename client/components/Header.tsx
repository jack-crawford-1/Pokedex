import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Header() {
  return (
    <>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="Pokemon Logo" className="homepage-logo" />
        </Link>
      </div>
    </>
  )
}

export default Header
