import axios from "axios";
import { getSearch } from "../redux/searchSlice";

export const getSearchApi = (text, dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${text}&language=es-ES`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    )
    .then((response) => dispatch(getSearch(response.data.results)))
    .catch((error) => console.error(error));
};
