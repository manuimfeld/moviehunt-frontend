import { useState } from "react"
import { Link } from "react-router-dom"
import {FaList, FaHome, FaHeart, FaSistrix} from "react-icons/fa"

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
        {menuOpen && (
          <nav className={menuOpen != true ? "closed" : null}>
          <h2>MENÚ</h2>
          <ul>
            <li>
              <FaHome />
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <FaSistrix />
              <Link to="/search">Buscar</Link>
              </li>
            <li>
              <FaHeart />
              <Link to="/favorites">Favoritos</Link>
              </li>
          </ul>
          <div className="menu-glass" onClick={toggleMenu}></div>
          </nav>
        )}
        <button onClick={toggleMenu}><FaList /></button>
        <h1>MovieHUNT</h1>
    </header>
  )
}

export default Header