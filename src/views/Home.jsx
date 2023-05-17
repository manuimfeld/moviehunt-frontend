import Banner from '../components/Banner'
import LatestMovies from '../components/LatestMovies'
import PropTypes from 'prop-types';

const Home = ({movies}) => {
  return (
    <>
    <Banner />
    <LatestMovies movies={movies}/>
    </>
  )
}

Home.propTypes = {
    movies: PropTypes.array.isRequired
  };

export default Home