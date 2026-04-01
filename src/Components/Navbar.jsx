import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleMenu = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className=" px-6 py-2 navbar-header fixed w-full z-50 transition-all">
      <div className="px-8 mx-auto max-w-7xl flex items-center justify-start gap-1 lg:gap-8">
          {/* Logo */}
          <div className="logo font-bold text-2xl  cursor-pointer">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
            >
              BAMS<span className="text-blue-500">永恒</span>
            </Link>
          </div>

          {/* Menu */}
          <ul className={`flex py-1.5 gap-1 gap-y-4 lg:gap-4 items-center justify-between transition-all 
          ${navActive ? " flex-col absolute top-full left-0 w-full px-4 bg-blue-500/60 backdrop-blur-1xl shadow-lg" : "hidden md:flex"}`}>
             {["hero", "services", "skills", "contact"].map((item) => (
            <li key={item}>
              <Link
                activeClass="!bg-blue-500 text-white"
                to={item}
                spy={true}
                smooth={true}
                duration={500} // Diubah jadi 500ms agar lebih smooth
                offset={-70}
                className="cursor-pointer capitalize hover:text-white text-base bg-white hover:bg-blue-500 border-2 border-blue-500 px-2 py-1 rounded-2xl transition-colors duration-300 items-center justify-center"
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
