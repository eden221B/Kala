import React, { useState, useEffect } from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/ProductsHero.css";

const images = [
    "https://i.pinimg.com/736x/cb/61/0c/cb610ca2db78e8f171a954f17f974f61.jpg",
    "https://i.pinimg.com/474x/5c/0a/2b/5c0a2bf1aa102e838e34db07624614db.jpg",
    "https://i.pinimg.com/474x/09/36/92/09369263839fdda8e2ef8f9d97b43472.jpg",
    "https://i.pinimg.com/474x/75/e1/01/75e1017ac537cadaf8c948d008669b52.jpg"
];

const ProductsHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="products-hero">
            <div className="products-hero-left">
                <img 
                    src={images[currentIndex]} 
                    alt="Handmade Craft" 
                    className="craft craft1" 
                />
            </div>
            <div className="products-hero-right">
            <h4>Exclusive Handcrafted Pieces</h4>
            <h1>Timeless Artistry, Made Just for You</h1>
<p>Each creation is a blend of tradition and passion — handcrafted by skilled artisans, made to inspire, and crafted to last. Experience artistry that speaks from the heart.</p>

                <button className="products-hero-btn">Shop Now</button>
            </div>
        </section>
    );
};

export default ProductsHero;
