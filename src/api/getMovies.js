import axios from "axios";
import { getMovies } from "../redux/trendingSlice";

export const getMoviesApi = (dispatch) => {
  axios
    .get("https://api.themoviedb.org/3/trending/movie/day?language=es-ES", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
    .then((response) => dispatch(getMovies(response.data.results)))
    .catch((error) => console.error(error));
};
