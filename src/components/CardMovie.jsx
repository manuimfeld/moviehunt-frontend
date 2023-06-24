import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../helpers/toggleFavorite";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const CardMovie = ({ movieData, favorite }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const props = movieData;
    navigate(`/movie/${movieData.id}`, { state: props });
  };

  const notify = (e) => {
    toast.dismiss();
    if (e === "Agregar") {
      toast("¡Agregada a favoritos!");
    } else {
      toast("¡Eliminada de favoritos!");
    }
  };

  const handleFavorite = (e) => {
    toggleFavorite(movieData, dispatch);
    notify(e);
  };

  return (
    <>
      <div className="relative flex flex-wrap w-[250px] lg:w-[200px] lg:h-[360px] mx-5 my-5 rounded-xl	 overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] ">
        <img
          className="h-[250px] w-[250px] lg:w-[200px] lg:h-[260px] "
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          alt=""
        />
        <div className="px-6 py-4 bg-[#393E46] w-[100%] lg:h-[100px] flex flex-wrap justify-center items-center text-center">
          <div
            className="mb-[10px] duration-300	hover:text-[#00f5ff] h-fit cursor-pointer w-[100%] font-bold text-xl lg:text-lg truncate text-[#00ADB5]"
            onClick={handleClick}
          >
            {movieData.title}
          </div>
          <FaHeart
            className={`${
              favorite == -1 ? "text-gray-400" : "text-red-700"
            } cursor-pointer absolute top-0 right-0 bg-[#393E46] b-b-left h-[40px] w-[40px] p-[10px] duration-300 lg:hover:text-red-700 hover:scale-[1.1]`}
            onClick={
              favorite == -1
                ? () => handleFavorite("Agregar")
                : () => handleFavorite("Eliminar")
            }
          />
          <button
            className="text-white bg-[#00ADB5] hover:bg-[#00f5ff] hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1"
            onClick={handleClick}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </>
  );
};

CardMovie.propTypes = {
  movieData: PropTypes.object.isRequired,
};

export default CardMovie;
