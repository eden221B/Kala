import React from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/ProductsNav.css";

const Navbar = () => {
    return (
      <nav className="ProductsNav">
        <div className="ProductsNav-container">
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