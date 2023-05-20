import { getFavorite } from "../redux/favoriteSlice";

const toggleFavorite = (movie, dispatch) => {
  // Get array from localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if movie already exist in array
  const index = favorites.findIndex((favMovie) => favMovie.id === movie.id);

  if (index !== -1) {
    // If movie already exist, delete
    favorites.splice(index, 1);
  } else {
    // else add
    favorites.push(movie);
  }

  // Save new array in localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
  dispatch(getFavorite(JSON.parse(localStorage.getItem("favorites"))));
};

export default toggleFavorite;