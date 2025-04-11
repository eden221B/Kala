import React, { useState, useEffect, useRef } from "react";

import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/products.css";
import ProductsHero from "../components/ProductsHero";
import ProductsNav from "../components/ProductsNav";
import CategorySection from "../components/CategorySection";
import CategoryProducts from "../components/CategoryProducts";
import Footer from "../components/Footer";

const Products = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // animate only once
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="products-page">
            <ProductsNav />
            <ProductsHero />
            <CategorySection onSelectCategory={setSelectedCategoryId} />

            {selectedCategoryId && <CategoryProducts categoryId={selectedCategoryId} />}

            {selectedCategoryId && (
                <div className="view-all-container">
                    <button className="view-all-btn">View All</button>
                </div>
            )}

            {/* Animated About Products Section */}
            <section
                ref={aboutRef}
                className={`about-products fade-in ${isVisible ? "visible" : ""}`}
            >
                <div className={`about-text fade-in delay-1 ${isVisible ? "visible" : ""}`}>
                    <h2>All About Kalakriti</h2>
                    <p>
                        Explore a range of handcrafted products created by talented artisans.
                        Each item is crafted with passion and authenticity, bringing you the
                        finest in traditional and contemporary handicrafts.
                    </p>
                    <ul>
                        <li>Authentic Handmade Art</li>
                        <li>Premium Quality</li>
                        <li>Unique & Customizable</li>
                        <li>Sustainable & Eco-Friendly</li>
                    </ul>
                    <button className="learn-more-btn">Learn More</button>
                </div>
                <div className={`about-image fade-in delay-2 ${isVisible ? "visible" : ""}`}>
                    <img
                        src="https://i.pinimg.com/736x/4b/85/69/4b856905f3c2c93617775edd2fc27ead.jpg"
                        alt="Handicrafts Showcase"
                    />
                </div>
            </section>

            <div className="product-page">
                <Footer />
            </div>
        </div>
    );
};

export default Products;
