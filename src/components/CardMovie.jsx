import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../helpers/toggleFavorite";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const CardMovie = ({ movieData, favorite }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const props = movieData;
    navigate(`/movie/${movieData.id}`, { state: props });
  };

  const notify = (e) => {
    if (e === "Agregar") {
      toast("¡Agregada a favoritos!");
    } else {
      toast("¡Eliminada de favoritos!");
    }
  };

  const handleFavorite = (e) => {
    toggleFavorite(movieData, dispatch);
    notify(e.target.innerText);
  };

  return (
    <>
      <div className="relative flex flex-wrap w-[250px] lg:w-[200px] lg:h-[360px] mx-5 my-5 rounded-xl	 overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
        <img
          className="h-[250px] w-[250px] lg:w-[200px] lg:h-[260px] "
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt=""
        />
        <div className="px-6 py-4 bg-[#393E46] w-[100%] lg:h-[100px] flex flex-wrap justify-start items-center">
          <div
            className="duration-300	hover:text-[#00f5ff] h-fit cursor-pointer w-[100%] font-bold text-xl truncate text-[#00ADB5]"
            onClick={handleClick}
          >
            {movieData.title}
          </div>
          <p className="absolute top-0 right-0 px-2 bg-[#393E46] text-[#EEEEEE] text-base">
            {movieData.vote_average.toFixed(1)}
          </p>
          <p
            className="flex justify-between items-center w-[40%] text-[#EEEEEE]"
            onClick={handleFavorite}
          >
            {favorite == -1 ? "Agregar" : "Eliminar"}
            <FaHeart
              className={` ${
                favorite == -1 ? "text-gray-400" : "text-red-700"
              }`}
            />
          </p>

          <ToastContainer position="bottom-center" autoClose={2000} />
        </div>
      </div>
    </>
  );
};

CardMovie.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default CardMovie;
