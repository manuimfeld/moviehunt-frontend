import CardMovie from "./CardMovie"
import { useSelector } from 'react-redux';

const LatestMovies = () => {
  const {moviesArr} = useSelector((state) => state.moviesArr)

  return (
    <main className="cardMovie-container">
        <h2>Ultimas películas</h2>
        {moviesArr.length > 0 ? moviesArr.map((movie) => {
            return (
                <CardMovie key={movie.id} movieData={movie}/>
            )
        }) : null}
    </main>
  )
}
export default LatestMovies