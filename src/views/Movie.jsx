import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardMovie from '../components/CardMovie';

const Movie = () => {

  const [movieDetails, setMovieDetails] = useState({})
  const [similar, setSimilar] = useState([])


  // Get props received for react router
  const location = useLocation();
  const props = location.state;

  console.log(movieDetails)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Set props in state movieData
    if (props !== null) {
      setMovieDetails(props)
      
      const options = {method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDg5MWQzZjJjN2I5YWNiZGNhNzA5NTAyN2UyOTA3NiIsInN1YiI6IjYyZTc0YTVlNjc4MjU5MDA1OGZhMTk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-XsOe2vA8yn2s2Yr5-vCj85kcgvWj2f39Q3fWbFkt0'
      }}

      movieDetails.id !== undefined ? 
      fetch(`https://api.themoviedb.org/3/movie/${movieDetails.id}/similar?language=es-ES&page=1`, options)
      .then(response => response.json())
      .then(response => setSimilar([response.results]))
      .catch(err => console.error(err)) : null
    }
  }, [props, movieDetails])

  // Back page route, on click button
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <main className='cardMovie-container mt70'>
      <button onClick={handleBack}>back</button>
      <img src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt="" className='banner-movie'/>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <button>Ver trailer</button>
      <section className='cardMovie-container'>
        <h3>Películas similares</h3>
      {similar.length > 0 ? similar[0].map((movie) => {
        return (
          <CardMovie movieData={movie} key={movie.id} />
        )
      }) : null}
      </section>
    </main>
  )
}

export default Movie