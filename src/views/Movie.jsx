import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailsApi } from "../api/getMovieDetails";
import { getSimilarMoviesApi } from "../api/getSimilarMovies";
import CardMovie from "../components/CardMovie";

const Movie = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const props = location.state;
  // Get id params (if props already undefined or null, call api for get details movie)
  const { id } = useParams();

  // Dispatch and get states
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movieData);
  const { similarArr } = useSelector((state) => state.similarArr);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // when navigating in different routes/pages, it will always appear on top
    window.scrollTo(0, 0);

    if (props !== null) {
      getSimilarMoviesApi(id, dispatch);
    } else {
      return async () => {
        await getMovieDetailsApi(id, dispatch, navigate);
        getSimilarMoviesApi(id, dispatch);
      };
    }
  }, [dispatch, id, props, navigate]);

  return (
    <main className="bg-[#222831] flex flex-row flex-wrap mh-[100vh] lg:justify-center">
      {/* <button onClick={handleBack} className="bg-white">
        Volver
      </button> */}
      {
        // if props no have data, get data for redux state
        props === null ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
              alt=""
              className="w-full h-[90vh] lg:w-[30%] lg:h-[80vh] lg:p-[20px]"
            />
            <div className="border-b flex flex-wrap p-5 lg:w-[30%] text-white">
              <h2 className="mt-1 mb-5 text-[#00ADB5] text-3xl">
                {movieData.title}
              </h2>
              <p className="w-full text-gray-400">Sinopsis:</p>
              <p className="text-white">{movieData.overview}</p>
              <p className="mt-5 text-gray-400">Calificación: &nbsp;</p>
              <p className="mt-5">{movieData.vote_average.toFixed(1)}</p>
            </div>
          </>
        ) : (
          // if props have data, render this
          <>
            <img
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
              alt=""
              className="w-full h-[90vh] lg:w-[30%] lg:h-[80vh] lg:p-[20px]"
            />
            <div className="border-b flex flex-wrap p-5 lg:w-[30%] text-white">
              <h2 className="mt-1 mb-5 text-[#00ADB5] text-3xl">
                {props.title}
              </h2>
              <p className="w-full text-gray-400">Sinopsis:</p>
              <p className="text-white">{props.overview}</p>
              <p className="mt-5 text-gray-400">Calificación: &nbsp;</p>
              <p className="mt-5">{props.vote_average.toFixed(1)}</p>
            </div>
          </>
        )
      }
      <div className="bg-[#222831] flex w-auto h-auto flex-wrap justify-around">
        <h2 className="w-full py-2.5 text-[#00ADB5] text-2xl font-bold text-center">
          Películas similares
        </h2>

        {similarArr.map((movie) => {
          return <CardMovie movieData={movie} key={movie.id} />;
        })}
      </div>
    </main>
  );
};

export default Movie;
