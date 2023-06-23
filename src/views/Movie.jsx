import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailsApi } from "../api/getMovieDetails";
import { getSimilarMoviesApi } from "../api/getSimilarMovies";
import CardMovie from "../components/CardMovie";

const Movie = () => {
  // Back page route, on click button
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // Get props received (props contains details movie) for react router
  const location = useLocation();
  const props = location.state;

  // Get id params (if props already undefined or null, call api for get details movie)
  const { id } = useParams();

  // Dispatch and get states
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movieData);
  const { similarArr } = useSelector((state) => state.similarArr);

  useEffect(() => {
    // when navigating in different routes/pages, it will always appear on top
    window.scrollTo(0, 0);

    if (props !== null) {
      // call api for get similar movies
      getMovieDetailsApi(id, dispatch, navigate);
      // If props is null, call api for get movie data
      getSimilarMoviesApi(id, dispatch);
    } else {
      getSimilarMoviesApi(id, dispatch);
    }
  }, [dispatch, id, props, navigate]);

  return (
    <main className="movie-container">
      <button onClick={handleBack}>Back</button>
      {
        // if props no have data, get data for redux state
        props === null ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
              alt=""
              className="backdrop-movie"
            />
            <div className="movie-info-container">
              <h2>{movieData.title}</h2>
              <p>{movieData.overview}</p>
              <span>{}</span>
            </div>
          </>
        ) : (
          // if props have data, render this
          <>
            <img
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
              alt=""
              className="backdrop-movie"
            />
            <div className="movie-info-container">
              <h2>{props.title}</h2>
              <p>{props.overview}</p>
            </div>
          </>
        )
      }
      <div className="flex w-auto h-auto flex-wrap justify-around">
        <h2 className="w-full align-center">Películas similares</h2>
        {similarArr.map((movie) => {
          return <CardMovie movieData={movie} key={movie.id} />;
        })}
      </div>
    </main>
  );
};

export default Movie;
