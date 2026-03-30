import React from 'react'
// import './Hero.css'
import profile from '../assets/images/profile.jpg'
import '../App.css'
import { Element } from 'react-scroll'
const Hero = () => {
  return (
    <div className="py-16 px-16 bg-linear-to-tr from-slate-50 via-cyan-300 to-indigo-600" id="hero">
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 " >
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl font-bold text-gray-900 leading-tight" data-aos="fade-up" data-aos-delay="200" data-aos-animate="aos-init aos-animate">My name is</h3>
        <h1 className="text-5xl font-bold text-slate-900" data-aos="fade-up" data-aos-delay="300" data-aos-animate="aos-init aos-animate">Bambang  <span className="text-blue-500">Sugiarto</span></h1>
        <p className="text-lg text-slate-900" data-aos="fade-up" data-aos-delay="400" data-aos-animate="aos-init aos-animate">
          Hi, I'm Bambang Sugiarto. I'm a developer.
I like coding and building cool stuff.
Take a look at my work.
        </p>
      </div>

      <div className="flex-1 w-full " data-aos="fade-up" data-aos-delay="200" data-aos-animate="aos-init aos-animate">
        <img src={profile} alt="Person Standing" className="rounded-full shadow-xl w-full object-cover"/>
      </div>
    </div>
  </div>
  )
}

export default Hero
