/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import PokemonOriginals from './components/PokemonOriginals'
import PokemonDetails from './components/PokemonDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="pokemon" element={<PokemonOriginals />}>
        <Route path=":name" element={<PokemonDetails />} />
      </Route>
    </Route>
  )
)

export default router
