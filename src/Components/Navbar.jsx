import React, { useState } from "react";
import { Link } from "react-scroll";
// import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleMenu = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  return (
    <header className="navbar-header fixed w-full z-50 transition-all">
      <div className="nav-shell mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <div className="logo font-bold text-2xl  cursor-pointer">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              BAMS<span className="logo-mark">/永恒</span>
            </Link>
          </div>

          {/* Menu */}
           <ul className={`nav-links flex gap-1 gap-y-4 lg:gap-4 items-center transition-all ${navActive ? "mobile-nav" : "hidden md:flex"}`}>
             {["hero", "services", "skills", "contact"].map((item) => (
            <li key={item}>
              <Link
                 activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                duration={500} // Diubah jadi 500ms agar lebih smooth
                offset={-70}
                 className="cursor-pointer capitalize"
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
          </ul>
      

           {/* Hamburger - Muncul di layar kecil (md:hidden) */}
        <div
          className={`burger ml-auto cursor-pointer md:hidden  ${navActive ? "toggle-burger" : ""}`}
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
