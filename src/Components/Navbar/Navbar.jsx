import React from 'react'
import './Navbar.css'
import '../../assets/main'
import '../../App.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleBurgerClick = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="main-container">
        <div className="nav">
          <div className="logo">
            <a href="/" onClick={closeMenu}>BS</a>
          </div>

          <nav className={navActive ? "nav-active" : ""}>
            <ul>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#portfolios" onClick={closeMenu}>Portfolio</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>

          <div className={`burger ${navActive ? "toggle-burger" : ""}`} onClick={handleBurgerClick}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar