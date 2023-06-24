import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHeart, FaSistrix } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="text-white p-5 h-[60px] bg-[#393E46] sticky top-0 z-10 flex justify-center lg:justify-start items-center">
      {/* <FaList onClick={() => setOpenMenu(!openMenu)} /> */}
      <Link
        to="/home"
        className={`flex items-center mr-10 ${
          location.pathname === "/home" ? "text-[#00f5ff]" : ""
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
      </Link>
    </nav>
  );
};

export default Header;
