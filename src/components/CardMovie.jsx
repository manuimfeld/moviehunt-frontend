import PropTypes from 'prop-types';

const CardMovie = ({movieData}) => {

  return (
    <article className="card-movie">
            <span>1</span>
            { <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="" /> }
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