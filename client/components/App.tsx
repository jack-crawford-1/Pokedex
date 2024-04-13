import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
  return (
    <>
      <div className="app">
        <Header />
      </div>
      <Outlet />
    </>
  )
}

export default App
