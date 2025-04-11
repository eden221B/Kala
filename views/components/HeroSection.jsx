import React from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/HeroSection.css";
import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Bringing Simplicity In The Handicrafts Market</h1>
                <p>Kalakriti simplifies the complex process of finding artisans & handmade crafts with ease.</p>
                <Link to="/products">
                    <button className="hero-btn">Start Your Artisan Journey</button>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
