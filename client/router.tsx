/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import App from './components/App'
import About from './components/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="pokemon" element={<PokemonList />}>
        <Route path=":name" element={<PokemonDetails />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Route>
  )
)

export default router
