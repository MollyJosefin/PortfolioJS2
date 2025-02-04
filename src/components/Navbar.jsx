import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { Link } from "react-router-dom";
import "../styles/_navbar.scss";

const Navbar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effekt för att hantera navbarens bakgrund vid scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Ändra bakgrund efter 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effekt för att hantera body-klassen baserat på dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/about">Om mig</Link></li>
          <li><Link to="/experience">Erfarenhet</Link></li>
          <li><Link to="/projects">Projekt</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>

        <div className="theme-toggle-wrapper">
          <button onClick={() => dispatch(toggleTheme())} className="theme-toggle">
            {darkMode ? "Ljust läge" : "Mörkt läge"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
