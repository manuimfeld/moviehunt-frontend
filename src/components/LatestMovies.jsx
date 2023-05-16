import CardMovie from "./CardMovie"
import PropTypes from 'prop-types';

const LatestMovies = ({movies}) => {
  return (
    <main>
        <h2>Ultimas películas</h2>
        {movies.length > 0 ? movies[0].map((movie) => {
            return (
                <CardMovie key={movie.id} movieData={movie}/>
            )
        }) : null}
    </main>
  )
}

LatestMovies.propTypes = {
    movies: PropTypes.array.isRequired
  };

export default LatestMovies