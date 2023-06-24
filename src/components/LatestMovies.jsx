import CardMovie from "./CardMovie";
import { useSelector } from "react-redux";

const LatestMovies = () => {
  const { moviesArr } = useSelector((state) => state.moviesArr);

  return (
    <main className="bg-[#222831]">
      <h2 className="py-2.5 text-[#00ADB5] text-2xl font-bold text-center">
        Ultimas películas
      </h2>
      <div className="flex w-auto h-auto flex-wrap justify-around">
        {moviesArr.length > 0
          ? moviesArr.map((movie) => {
              return <CardMovie key={movie.id} movieData={movie} />;
            })
          : null}
      </div>
    </main>
  );
};
export default LatestMovies;
