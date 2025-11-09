import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the Home path
  const isHome = location.pathname === "/";

  return (
    <header className={`navbar ${isOpen ? "expanded" : ""}`}>
      <div className="container">
        <div className="navbar-grid">
          {/* ✅ Hide logo if on Home route */}
          {!isHome ? (
            <div className="logo">
              <NavLink to="/">
                <img src="./images/logo.png" alt="logo" className="vlogo" />
              </NavLink>
            </div>
          ): <div></div>}

          <nav className={`nav-section ${isOpen ? "show" : ""}`}>
            <ul className="nav-links">
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/aboutus">Our Story</NavLink></li>
              <li><NavLink to="/">Varnan</NavLink></li>
              <li><NavLink to="/contact">Let's Talk</NavLink></li>
            </ul>
          </nav>

          <button
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <img
              src={isOpen ? "./images/Open.svg" : "./images/Frame.svg"}
              alt="Toggle menu"
              className="toggle-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};