import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import LatestMovies from './components/LatestMovies'

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const options = {method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDg5MWQzZjJjN2I5YWNiZGNhNzA5NTAyN2UyOTA3NiIsInN1YiI6IjYyZTc0YTVlNjc4MjU5MDA1OGZhMTk3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-XsOe2vA8yn2s2Yr5-vCj85kcgvWj2f39Q3fWbFkt0'
    }}

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=es-ES', options)
    .then(response => response.json())
    .then(response => setMovies([response.results]))
    .catch(err => console.error(err));
  }, [])

  return (
    <>
      <Header/>
      <Banner />
      <LatestMovies movies={movies}/>
    </>
  )
}

export default App
