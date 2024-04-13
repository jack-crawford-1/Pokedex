import { Link } from 'react-router-dom'

function HomeImage() {
  const imgSrc =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'

  return (
    <div>
      <Link to={'/pokemon'}>
        <img src={imgSrc} alt="homepage pokemon" />
      </Link>
    </div>
  )
}

export default HomeImage
