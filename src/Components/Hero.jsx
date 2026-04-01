import React from "react";
// import './Hero.css'
import profile from "../assets/images/profile.jpg";
import "../App.css";
import { Element } from "react-scroll";
const Hero = () => {
  return (
    <div
      className="relative py-20 px-20 bg-gradient-to-b from-cyan-100 via-cyan-300 to-cyan-500"
      id="hero"
    >
      <div className="container mt-20 mb-10 mx-auto z-10 items-center justify-center text-center gap-12 ">
        <div
          className="w-50 mx-auto border-4 border-white rounded-full shadow-xl overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-animate="aos-init aos-animate"
        >
          <img
            src={profile}
            alt="Person Standing"
            className="rounded-full shadow-xl w-full object-cover items-center justify-center mx-auto"
          />
        </div>
        <div className="space-y-6">
          <h3
            className="text-2xl font-bold text-white leading-tight m-0"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-animate="aos-init aos-animate"
          >
            Hi, I'm Bambang Sugiarto
          </h3>
          <h1
            className="text-5xl font-bold text-white"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-animate="aos-init aos-animate"
          >
            Newbie <span className="text-blue-500">Developer</span>
          </h1>
          <p
            className="text-lg italic text-white "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-animate="aos-init aos-animate"
          >
           "The limit only exists if you stop moving. As long as you keep moving, the limit will continue to move away." ~ Luo Feng

          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
