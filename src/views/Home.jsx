import { useEffect } from "react";
import LatestMovies from "../components/LatestMovies";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LatestMovies />
    </>
  );
};
export default Home;
