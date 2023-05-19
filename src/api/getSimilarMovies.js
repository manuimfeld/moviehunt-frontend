import axios from "axios";
import { getSimilar } from "../redux/similarSlice";

export const getSimilarMoviesApi = (id, dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=es-ES&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    )
    .then((response) => dispatch(getSimilar(response.data.results)))
    .catch((error) => console.error(error));
};
