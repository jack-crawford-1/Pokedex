import { Outlet } from 'react-router-dom'
import PokemonDetails from './PokemonDetails'

function Home() {
  return (
    <div className="homepage">
      <Outlet />
      {/* <PokemonDetails /> */}
    </div>
  )
}

export default Home
