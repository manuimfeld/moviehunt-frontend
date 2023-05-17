import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CardMovie = ({movieData}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    const props = movieData
    navigate(`/movie/${movieData.id}`, {state: props})
  }

  return (
    <article className="card-movie">
            <span>1</span>
            { <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="" onClick={handleClick}/> }
            <div className="movie-info">
            {<p>{movieData.title}</p> }
            <p>2023</p>
            <p>Like</p>
            </div>
    </article>
  )
}

CardMovie.propTypes = {
    movieData: PropTypes.object.isRequired
  };

export default CardMovie