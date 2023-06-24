import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaSistrix } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getFavorite } from "../redux/favoriteSlice";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { favoriteArr } = useSelector((state) => state.favoriteArr);

  useEffect(() => {
    if (localStorage.getItem("favorites") !== null) {
      dispatch(getFavorite(JSON.parse(localStorage.getItem("favorites"))));
    }
  }, [dispatch]);

  return (
    <nav className="text-white p-5 h-[60px] bg-[#393E46] sticky top-0 z-10 flex justify-center lg:justify-start items-center">
      {/* <FaList onClick={() => setOpenMenu(!openMenu)} /> */}
      <Link
        to="/home"
        className={`flex items-center mr-10 ${
          location.pathname === "/home" || location.pathname === "/"
            ? "text-[#00f5ff]"
            : ""
        } duration-300	hover:text-[#00ADB5]`}
      >
        <FaHome className="mr-1" />
        Inicio
      </Link>
      <Link
        to="/search"
        className={`flex items-center mr-10 ${
          location.pathname === "/search" ? "text-[#00f5ff]" : ""
        } duration-300	hover:text-[#00ADB5]`}
      >
        <FaSistrix className="mr-1" />
        Buscar
      </Link>
      <Link
        to="/favorites"
        className={`flex items-center ${
          location.pathname === "/favorites" ? "text-[#00f5ff]" : ""
        } duration-300	hover:text-[#00ADB5]`}
      >
        <FaHeart className="mr-1" />
        Favoritos
        <span className="text-xs mb-3 ml-[2px]">
          {favoriteArr.length > 0 ? favoriteArr.length : ""}
        </span>
      </Link>
    </nav>
  );
};

export default Header;
