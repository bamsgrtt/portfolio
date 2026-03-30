import React from "react";
// import "./Services.css";
import "../App.css";

// Import Icons yang sesuai dengan layanan
import { FaPaintBrush, FaCode, FaServer, FaMobileAlt, FaCloudUploadAlt, FaDatabase, FaSearchDollar } from 'react-icons/fa';
import { MdAppRegistration, MdApi } from 'react-icons/md';
import { HiOutlineTerminal } from 'react-icons/hi';
import { SiFigma, SiPostman } from 'react-icons/si';

const Services = () => {
  return (
    <div className="py-16 px-16" id="services">
      <div className="container mx-auto space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 after:content-[''] after:w-10 after:h-1 after:bg-red-500 after:rounded-full">SERVICES</h3>
        <h1 className="text-4xl font-bold text-gray-900 text-center">Specialized In</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-40 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-purple-600 rounded-xl p-2 uiux"><SiFigma /></div>
              <h4>UI/UX Design</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-50 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-green-600 rounded-xl p-2 app"><MdAppRegistration /></div>
              <h4>App Development</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-50 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-yellow-600 rounded-xl p-2 web"><FaCode /></div>
              <h4>Web Development</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-40 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-orange-600 rounded-xl p-2 backend"><FaServer /></div>
              <h4>Backend</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-40 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-blue-600 rounded-xl p-2 frontend"><HiOutlineTerminal /></div>
              <h4>Frontend</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-40 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-cyan-600 rounded-xl p-2 db"><FaDatabase /></div>
              <h4>Database</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-50 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-indigo-600 rounded-xl p-2 api"><MdApi /></div>
              <h4>API Integration</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-40 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-pink-600 rounded-xl p-2 mobile"><FaMobileAlt /></div>
              <h4>Mobile Dev</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-50 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-teal-600 rounded-xl p-2 cloud"><FaCloudUploadAlt /></div>
              <h4>Cloud & Deploy</h4>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 h-full w-full bg-blue-400 hover:bg-blue-400/50 hover:border-blue-500 hover:border-1 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-50 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 cursor-pointer 
            px-2 py-2 rounded-full text-white">
              <div className="bg-red-600 rounded-xl p-2 seo"><FaSearchDollar /></div>
              <h4>SEO Optimization</h4>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Services;