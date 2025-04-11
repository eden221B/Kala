import React from "react";
import "/Users/spic/Desktop/KalaKriti2/kalakriti/public/css/FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features">
      {/* Feature 1 */}
      <div className="feature-box">
        <h3>End-to-End Solutions</h3>
        <p>We manage every aspect of your furnishing project, saving you time and resources.</p>
      </div>

      {/* Feature 2 */}
      <div className="feature-box">
        <h3>After-Sales Support</h3>
        <p>We provide ongoing maintenance and support to ensure long-term satisfaction.</p>
      </div>

      {/* Feature 3 */}
      <div className="feature-box">
        <h3>Superior Quality</h3>
        <p>Our commitment to excellence ensures high-end furnishings that stand the test of time.</p>
      </div>

      {/* Feature 4 */}
      <div className="feature-box">
        <h3>No Variety Restrictions</h3>
        <p>Choose from a wide range of furniture styles tailored to your preferences.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
