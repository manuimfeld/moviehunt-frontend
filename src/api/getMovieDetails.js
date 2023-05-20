import axios from "axios";
import { getDetail } from "../redux/detailSlice";

export const getMovieDetailsApi = (id, dispatch, navigate) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
    .then((response) => dispatch(getDetail(response.data)))
    .catch(() => navigate("/error"));
};
