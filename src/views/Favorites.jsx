import CardMovie from "../components/CardMovie";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFavorite } from "../redux/favoriteSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoriteArr } = useSelector((state) => state.favoriteArr);

  useEffect(() => {
    window.scrollTo(0, 0);

    // If favorites array already exist in localStorage, set array in store
    if (localStorage.getItem("favorites") !== null) {
      dispatch(getFavorite(JSON.parse(localStorage.getItem("favorites"))));
    }
  }, [dispatch]);

  return (
    <main className="bg-[#222831] min-h-[calc(100vh-120px)]">
      <h2 className="py-2.5 text-[#00ADB5] text-2xl font-bold text-center">
        Películas favoritas
      </h2>
      <div className="flex w-auto h-full flex-wrap justify-around">
        {favoriteArr.length > 0 ? (
          favoriteArr.map((movie) => {
            return (
              <CardMovie movieData={movie} key={movie.id} favorite={true} />
            );
          })
        ) : (
          <>
            <h2>Agrega películas a favoritos para tenerlas aquí</h2>
            <Link to="/">Ver películas</Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Favorites;
