import React from 'react';
import './HeroSection.css';
import foodtruckimg2 from '../assets/food-truck-design2.jpg';

function HeroSection() {
  return (
    <section className="hero-section">
      <img src={foodtruckimg2} alt="푸드트럭" />
      <div className="hero-content">
        <h2>LET'S FIND THE RIGHT PLACE FOR YOU</h2>
        <p>푸드트럭 공모 및 제약을 알려드리는 서비스</p>
      </div>
    </section>
  );
}

export default HeroSection;
