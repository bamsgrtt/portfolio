import React from "react";
// import './Hero.css'
import profile from "../assets/images/profile.jpg";
import "../App.css";
const Hero = () => {
  return (
    <section className="hero section-wrap" id="hero"><div className="hero-grid"><div className="hero-content">
          <p className="hero-kicker eyebrow">Independent developer <span>•</span> Indonesia / 2025</p>
          <h1 className="hero-title">Hi, I&apos;m Bambang.<br/><em>I build with curiosity.</em></h1>
          <p className="hero-copy">Hi, I’m Bambang Sugiarto. I turn curious ideas into thoughtful interfaces and dependable software, one deliberate iteration at a time.</p>
          <div className="hero-actions"><a href="#contact" className="button button-primary">Let’s work together <span>↗</span></a><a href="#services" className="text-link">Explore my practice <span>↓</span></a></div>
          <div className="hero-stats"><div><strong>03+</strong><span>years learning</span></div><div><strong>24</strong><span>technologies</span></div><div><strong>∞</strong><span>curiosity</span></div></div>
        </div><div className="hero-visual"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="portrait-frame">
          <img
            src={profile}
            alt="Bambang Sugiarto"
          />
          </div><div className="floating-note note-top">currently learning<br/><strong>Java + Spring</strong></div><div className="floating-note note-bottom"><span className="status-dot"></span> open to opportunities</div></div></div><div className="scroll-cue">scroll to explore <span>↓</span></div></section>
  );
};

export default Hero;
