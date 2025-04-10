import React, { useEffect } from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/WhyChooseUs.css";

const WhyChooseUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".why-card").forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <section className="why-choose-us">
      <h2 className="section-title">
        Why <span className="highlight">Choose</span> Kalakriti?
      </h2>
      <div className="why-choose-container">
        
        {/* Top Row */}
        <div className="why-card light-card">
  <h3>Empowering Artisans</h3>
  <p>We connect local craftsmen directly with buyers, ensuring fair pay, recognition, and a sustainable livelihood for traditional artisans.</p>
</div>
<div className="why-card light-card">
  <h3>Beyond Transactions</h3>
  <p>Each purchase tells a story — one of heritage, culture, and the hands behind every creation. We offer lifetime support to keep that story alive.</p>
</div>

{/* Middle Image Section */}
<div className="why-card image-card">
  <h3>Crafted with Soul</h3>
  <p>Every item is a blend of heart and heritage — handmade using age-old techniques, ethically sourced materials, and uncompromised dedication.</p>
</div>

{/* Bottom Row */}
<div className="why-card dark-card">
  <h3>One Marketplace, Many Cultures</h3>
  <p>From the deserts of Rajasthan to the forests of Northeast India, discover a mosaic of styles under one roof, curated directly from grassroots creators.</p>
</div>
<div className="why-card dark-card">
  <h3>Your Choice Matters</h3>
  <p>With every product you buy, you become part of a movement — preserving dying artforms, reducing exploitation, and reviving lost legacies.</p>
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
