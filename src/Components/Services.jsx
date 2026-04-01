import React from "react";
// import "./Services.css";
import "../App.css";

// Import Icons yang sesuai dengan layanan
import { FaPaintBrush, FaCode, FaServer, FaMobileAlt, FaCloudUploadAlt, FaDatabase, FaSearchDollar } from 'react-icons/fa';
import { MdAppRegistration, MdApi } from 'react-icons/md';
import { HiOutlineTerminal } from 'react-icons/hi';
import { SiFigma, SiPostman } from 'react-icons/si';

const Services = () => {

  const serviceData = [
    {
      services: [
        { name: "UI/UX Design", icon: <SiFigma />, color: "text-purple-600" },
        { name: "App Development", icon: <MdAppRegistration />, color: "text-green-600" },
        { name: "Web Development", icon: <FaCode />, color: "text-yellow-600" },
        { name: "Backend", icon: <FaServer />, color: "text-orange-600" },
        { name: "Frontend", icon: <HiOutlineTerminal />, color: "text-blue-600" }
      ],
    },
  ];


  return (
    <div className="relative py-20 px-10 md:px-20 bg-linear-to-b from-cyan-500 via-cyan-600 to-cyan-800" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">about</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200">About Me</h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <div className="flex md:flex-row flex-col w-full md:max-w-4xl mx-auto gap-4 mt-16 mb-16">
          <div className="w-full text-center md:text-left md:pr-10">
            <div className="text-2xl font-bold text-gray-200 mb-4">Describe Me</div>
          <p className="text-lg text-justify font-serif text-gray-300">
            I’m a newbie in the world of software development, currently on a journey to become a better developer every day. With a background in Computer and Network Engineering, I’m now diving deeper into Informatics, focusing on backend development using Java while gradually learning JavaScript and databases. I genuinely enjoy the learning process, from simple concepts to more complex challenges, because for me every error is a lesson and every solution is progress. As an introvert, I’m comfortable working in focus and silence, but I’m also pushing myself to grow, expand my perspective, and build a strong foundation for a future in tech.
          </p>
          </div>
          {/* Service Cards */}
          <div className="flex flex-col gap-6 w-full">
            {serviceData.map((group, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center md:text-start text-2xl font-bold text-gray-200 mb-4">My Services</div>
                <div className="flex flex-wrap  gap-2 items-start pt-3 justify-center md:justify-start">
                  {group.services.map((service, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-center gap-3 px-5 py-3 w-fit  bg-gray-900 rounded-full border border-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:border-blue-500 group cursor-default shadow-lg">
                        <span className={`text-2xl ${service.color} transition-transform group-hover:rotate-12`}>{service.icon}</span>
                        <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;