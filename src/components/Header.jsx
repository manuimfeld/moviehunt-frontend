import { useState } from "react"

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
        {menuOpen && (
          <nav className={menuOpen != true ? "closed" : null}>
          <ul>
            <li>Inicio</li>
            <li>Buscar</li>
            <li>Favoritos</li>
          </ul>
          <div className="menu-glass" onClick={toggleMenu}></div>
          </nav>
        )}
        <button onClick={toggleMenu}>Menu</button>
        <h1>MovieHUNT</h1>
    </header>
  )
}

export default Header