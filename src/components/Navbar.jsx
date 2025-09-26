// Navbar con enlaces de navegaci�n a categor�as y home 
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const active = ({ isActive }) => (isActive ? 'navlink active' : 'navlink')

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <NavLink to="/" className="brand">MiTienda</NavLink>

        <ul className="nav">
          <li><NavLink to="/category/auriculares" className={active}>Auriculares</NavLink></li>
          <li><NavLink to="/category/microfonos" className={active}>Micrófonos</NavLink></li>
          <li><NavLink to="/category/players" className={active}>Players</NavLink></li>
          <li><NavLink to="/category/monitores" className={active}>Monitores</NavLink></li>
          <li><NavLink to="/category/mixers" className={active}>Mixers</NavLink></li>
        </ul>

        <div className="cart">🛒</div>
      </nav>
    </header>
  )
}
