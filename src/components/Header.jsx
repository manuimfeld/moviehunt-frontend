import { Link } from "react-router-dom";
import { FaList, FaHome, FaHeart, FaSistrix } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="p-5 bg-[#137547]">
      {/* <FaList onClick={() => setOpenMenu(!openMenu)} />
           {/* <FaHome />
      <Link to="/home">Inicio</Link>
      <FaSistrix />
      <Link to="/search">Buscar</Link>
      <FaHeart />
      <Link to="/favorites">Favoritos</Link> */}
    </nav>
  );
};

export default Header;
