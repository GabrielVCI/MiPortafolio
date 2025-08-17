import '../styles/global.css'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><p>Gabriel Valdez</p></div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#tech">Tecnologías</a></li>
        <li><a href="#repos">Repositorios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}
