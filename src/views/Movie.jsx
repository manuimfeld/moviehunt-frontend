import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Movie = () => {

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
      <h2>{movieData.title}</h2>
    </main>
  )
}

export default Movie