import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaSistrix } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="text-white p-5 h-[60px] bg-[#393E46] sticky top-0 z-10 flex justify-center lg:justify-start items-center">
      {/* <FaList onClick={() => setOpenMenu(!openMenu)} /> */}
      <Link to="/home" className="flex items-center mr-10">
        <FaHome className="mr-1" />
        Inicio
      </Link>
      <Link to="/search" className="flex items-center mr-10">
        <FaSistrix className="mr-1" />
        Buscar
      </Link>
      <Link to="/favorites" className="flex items-center">
        <FaHeart className="mr-1" />
        Favoritos
      </Link>
    </nav>
  );
};

export default Header;
