import CardMovie from "../components/CardMovie"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getFavorite } from "../redux/favoriteSlice";

const Favorites = () => {

  const dispatch = useDispatch()
  const {favoriteArr} = useSelector((state) => state.favoriteArr)

  useEffect(() => {
    // If favorites array already exist in localStorage, set array in store
    if (localStorage.getItem("favorites") !== null) {
        dispatch(getFavorite(JSON.parse(localStorage.getItem("favorites"))));
    }
  }, [dispatch])

  return (
    <main className="cardMovie-container">
        <h2>Favoritos</h2>
        {favoriteArr.length > 0 ?  (
            favoriteArr.map((movie => {
                return (
                    <CardMovie movieData={movie} key={movie.id}/>
                )
            }))
        ) : 
        <>
            <h2>Agrega películas a favoritos para tenerlas aquí</h2>
            <Link to="/">Ver películas</Link>
        </>
    }
    </main>
  )
}

export default Favorites