import { useEffect } from "react";
import { isFavorite } from "../helpers/toggleFavorite";
import CardMovie from "./CardMovie";
import { useSelector, useDispatch } from "react-redux";
import { getFavorite } from "../redux/favoriteSlice";

const LatestMovies = () => {
  const dispatch = useDispatch();
  const { moviesArr } = useSelector((state) => state.moviesArr);
  const { favoriteArr } = useSelector((state) => state.favoriteArr);

  useEffect(() => {
    if (localStorage.getItem("favorites") !== null) {
      dispatch(getFavorite(JSON.parse(localStorage.getItem("favorites"))));
    }
  }, [dispatch]);

  return (
    <main className="bg-[#222831] min-h-[calc(100vh-120px)]">
      <h2 className="py-2.5 text-[#00ADB5] text-2xl font-bold text-center">
        Ultimas películas
      </h2>
      <div className="flex w-auto h-auto flex-wrap justify-around">
        {moviesArr.length > 0
          ? moviesArr.map((movie) => {
              return (
                <CardMovie
                  key={movie.id}
                  movieData={movie}
                  favorite={isFavorite(movie.id, favoriteArr)}
                />
              );
            })
          : null}
      </div>
    </main>
  );
};
export default LatestMovies;
