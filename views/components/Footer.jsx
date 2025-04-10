import React from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/Footer.css"; // Ensure the CSS file is linked correctly

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Subscription */}
        <div className="footer-logo-section">
          <h2 className="footer-logo">Kalakriti</h2>
          <p className="tagline">Bringing handcrafted elegance to your home.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Middle Section - Menu Links */}
        <div className="footer-links">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Our services</a></li>
            <li><a href="#">Why choose us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Right Section - Contact Information */}
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>📍 123 Artisan Street, Kolkata, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ contact@kalakriti.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kalakriti. All Rights Reserved.</p>
        <p>Designed & Developed by <a href="#">YourName</a></p>
      </div>
    </footer>
  );
};

export default Footer;
