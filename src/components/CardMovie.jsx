import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import toggleFavorite from "../helpers/toggleFavorite";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";

const CardMovie = ({ movieData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const props = movieData;
    navigate(`/movie/${movieData.id}`, { state: props });
  };

  const handleFavorite = () => {
    toggleFavorite(movieData, dispatch);
  };

  return (
    <>
      <div className="relative flex flex-wrap w-[250px] lg:w-[200px] lg:h-[360px] mx-5 my-5 rounded overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
        <img
          className="h-[250px] w-[250px] lg:w-[200px] lg:h-[260px] "
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt=""
        />
        <div className="px-6 py-4 bg-[#2A9134] w-[100%] lg:h-[100px] flex flex-wrap justify-start items-center">
          <div
            className="duration-300	hover:text-green-400 h-fit cursor-pointer w-[100%] font-bold text-xl truncate text-[#054A29]"
            onClick={handleClick}
          >
            {movieData.title}
          </div>
          <p className="absolute top-0 right-0 px-2 bg-white text-gray-700 text-base">
            {movieData.vote_average.toFixed(1)}
          </p>
          <p>Agregar</p>
          <FaHeart onClick={handleFavorite} />
        </div>
      </div>
    </>
  );
};

CardMovie.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default CardMovie;
