import React from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/AboutSection.css";

const AboutSection = () => {
    return (
        <section className="about">
            <div className="about-container">
                {/* Left Side - Stats Card */}
                <div className="about-card">
    <p className="small-text">"Honoring Heritage, Crafting the Future"</p>
    <h2>Timeless <span>Crafts, Modern Marketplace</span></h2>
    <h3>Empowering <span>India’s Artisans, One Handcrafted Piece at a Time</span></h3>
</div>


                {/* Right Side - Text and Image */}
                <div className="about-content">
                    <div className="about-text">
                        <h2><span className="bold">Who</span> <span className="light">We Are</span></h2>
                        <p>
                            We understand the challenges of connecting artisans with the world.
                            Our mission is to empower skilled craftsmen by providing a seamless platform 
                            that ensures their handcrafted work reaches a global audience.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://i.pinimg.com/736x/cb/61/0c/cb610ca2db78e8f171a954f17f974f61.jpg" alt="Artisans at work" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

