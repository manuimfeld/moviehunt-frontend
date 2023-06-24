import { useDispatch, useSelector } from "react-redux";
import { getSearchApi } from "../api/getSearch";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import CardMovie from "../components/CardMovie";
import { getFavorite } from "../redux/favoriteSlice";
import { isFavorite } from "../helpers/toggleFavorite";

const Search = () => {
  const dispatch = useDispatch();
  const { searchArr } = useSelector((state) => state.searchArr);
  const { favoriteArr } = useSelector((state) => state.favoriteArr);

  //Navigate other route, and get id params url
  const navigate = useNavigate();
  const { id } = useParams();

  //Form submit redirect to route search/(input value)
  const formSubmit = (e) => {
    e.preventDefault();
    //trim() remove blank spaces in string start and end
    const text = e.target.text.value.trim();
    if (text.length > 0) {
      navigate(`/search/${text}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    //id params route, is not empty, call api
    if (id !== undefined) {
      getSearchApi(id, dispatch);
    } else {
      navigate("/search");
    }

    if (localStorage.getItem("favorites") !== null) {
      dispatch(getFavorite(JSON.parse(localStorage.getItem("favorites"))));
    }
  }, [dispatch, id, navigate]);

  return (
    <>
      <form onSubmit={formSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="text"
            id="text"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar películas..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-[#00ADB5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buscar
          </button>
        </div>
      </form>
      <main className="bg-[#222831] min-h-[calc(100vh-120px)]">
        <div className="flex w-auto h-auto flex-wrap justify-around">
          {searchArr.length > 0
            ? searchArr.map((movie) => {
                return (
                  <CardMovie
                    movieData={movie}
                    key={movie.id}
                    favorite={isFavorite(movie.id, favoriteArr)}
                  />
                );
              })
            : null}
        </div>
      </main>
    </>
  );
};

export default Search;
