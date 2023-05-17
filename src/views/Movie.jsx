import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Movie = () => {

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const location = useLocation();
  const props = location.state;

  const [movieData, setMovieData] = useState({})

  useEffect(() => {
    if (props !== null) {
      setMovieData(props)
    }

    console.log("render")
  }, [props, movieData])



  return (
    <main className='main-movie'>
      <button onClick={handleBack}>back</button>
      <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="" />
      <h2>{movieData.title}</h2>
      <p>{movieData.overview}</p>
    </main>
  )
}

export default Movie