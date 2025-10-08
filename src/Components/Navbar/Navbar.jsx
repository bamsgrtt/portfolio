import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="main-container">
        <div className="nav">
          {/* Logo */}
          <div className="logo">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              BS
            </Link>
          </div>

          {/* Menu */}
          <ul className={navActive ? "nav-links nav-active" : "nav-links"}>
            <li>
              <Link to="services" smooth={true} duration={100} offset={-70} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolios" smooth={true} duration={100} offset={-70} onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={100} offset={-70} onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={100} offset={-70} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <div className={`burger ${navActive ? "toggle-burger" : ""}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
