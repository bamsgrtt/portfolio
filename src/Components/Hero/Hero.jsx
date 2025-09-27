import React from 'react'
import './Hero.css'
import profile from '../../assets/images/profile.webp'
import '../../App.css'

const Hero = () => {
  return (
    <div className="main-container">
    <section className="hero">
      <div className="hero-left">
        <h3 className="pre-title" data-aos="fade-up" data-aos-delay="200" data-aos-animate="aos-init aos-animate">My name is</h3>
        <h1 className="hero-name" data-aos="fade-up" data-aos-delay="300" data-aos-animate="aos-init aos-animate">Bambang <span>Sugiarto</span></h1>
        <p className="paragraph" data-aos="fade-up" data-aos-delay="400" data-aos-animate="aos-init aos-animate">
          Hi, I'm Bambang Sugiarto. I'm a developer.
I like coding and building cool stuff.
Take a look at my work.
        </p>
      </div>

      <div className="hero-right" data-aos="fade-up" data-aos-delay="200" data-aos-animate="aos-init aos-animate">
        <img src={profile} alt="Person Standing" />
      </div>
    </section>
  </div>
  )
}

export default Hero
