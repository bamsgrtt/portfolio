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
    <div className="py-20 px-20 bg-white" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">SERVICES</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Specialized In</h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>

          {/* Service Cards */}
          <div className="space-y-16">
            {serviceData.map((group, index) => (
              <div key={index} className="space-y-6">
                <div className="flex flex-wrap gap-4 items-center pt-3 justify-center">
                  {group.services.map((service, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 px-5 py-3 bg-gray-900 rounded-full border border-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:border-blue-500 group cursor-default shadow-lg">
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
  );
};

export default Services;