import React from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Kalakriti</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" id="btn-link"><button>Get Started</button></a></li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;
