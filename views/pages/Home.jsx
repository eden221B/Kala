import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection"; 
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            
            <WhyChooseUs />
            <Footer />
        </>
    );
};

export default Home;
