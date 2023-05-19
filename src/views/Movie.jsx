import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetailsApi } from '../api/getMovieDetails';
import { getSimilarMoviesApi } from '../api/getSimilarMovies';
import CardMovie from '../components/CardMovie';
import PropTypes from 'prop-types';

const Movie = () => {
  // Back page route, on click button
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  // Get props received (props contains details movie) for react router
  const location = useLocation();
  const props = location.state;

  // Get id params (if props already undefined or null, call api for get details movie)
  const {id}  = useParams();

  // Dispatch and get states
  const dispatch = useDispatch();
  const {movieData} = useSelector((state) => state.movieData)
  const {similarArr} = useSelector((state) => state.similarArr)

  useEffect(() => {
    // when navigating in different routes/pages, it will always appear on top
    window.scrollTo(0, 0)
    // call api for get similar movies
    getSimilarMoviesApi(id, dispatch)

    // If props is null, call api for get movie data
    if (props == null) {
      getMovieDetailsApi(id, dispatch)
    } 
  }, [dispatch, id, props])

  return (
    <main className='cardMovie-container mt70'>
      <button onClick={handleBack}>Back</button>
      {
        // if props no have data, get data for redux state
        props === null ? (
          <>
            <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="" className='banner-movie'/>
            <h2>{movieData.title}</h2>
            <p>{movieData.overview}</p> 
          </>
          ) : 
        // if props have data, render this 
          <>
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="" className='banner-movie'/>
            <h2>{props.title}</h2>
            <p>{props.overview}</p> 
          </>
      }
      <button>Ver trailer</button>
      <section className='cardMovie-container'>
        <h3>Películas similares</h3>
      { 
         similarArr.map((movie) => {
          return (
            <CardMovie movieData={movie} key={movie.id} />
          )
        }) 
      }
      </section>
    </main>
  )
}

// PropTypes defined for props received by react-router
Movie.propTypes = {
  props: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default Movie