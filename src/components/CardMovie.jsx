import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import toggleFavorite from "../helpers/toggleFavorite"
import { useDispatch } from "react-redux"
import { FaHeart } from "react-icons/fa"


const CardMovie = ({movieData}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleClick = () => {
    const props = movieData
    navigate(`/movie/${movieData.id}`, {state: props})
  }

  const handleFavorite = () => {
    toggleFavorite(movieData, dispatch)
  }

  return (
    <article className="card-movie">
            <span>{movieData.vote_average.toFixed(1)}</span>
            { <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="" onClick={handleClick}/> }
            <div className="movie-info">
            {<p>{movieData.title}</p> }
            <p>2023</p>
            <button onClick={handleFavorite}><FaHeart /></button>
            </div>
    </article>
  )
}

CardMovie.propTypes = {
    movieData: PropTypes.object.isRequired
  };

export default CardMovie