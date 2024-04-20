import { Link } from 'react-router-dom'
import HomeImage from './HomeImage'

function Home() {
  return (
    <Link to={'/pokemon'}>
      <div className="homepage">
        <HomeImage />
        <p className="home-text">Enter</p>
      </div>
    </Link>
  )
}

export default Home
