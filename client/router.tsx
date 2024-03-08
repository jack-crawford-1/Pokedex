/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Generations from './components/Generations'
import Second from './components/Second'
import Third from './components/Third'
import Home from './components/Home'
import GenOne from './components/GenOne'
import GenOneNames from './components/GenOneNames'
import GenTwo from './components/GenTwo'
import GenTwoNames from './components/GenTwoNames'
import GenOneLocations from './components/GenOneLocations'
import GenTwoLocations from './components/GenTwoLocations'

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/generations" element={<Generations />} />

        <Route path="/generations/gen-one" element={<GenOne />} />
        <Route path="/generations/gen-one/names" element={<GenOneNames />} />
        <Route
          path="/generations/gen-one/locations"
          element={<GenOneLocations />}
        />

        <Route path="/generations/gen-two" element={<GenTwo />} />
        <Route path="/generations/gen-two/names" element={<GenTwoNames />} />
        <Route
          path="/generations/gen-two/locations"
          element={<GenTwoLocations />}
        />

        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Route>
    </>,
  ])
)

export default router
