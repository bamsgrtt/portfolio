import React from "react";
import "./Services.css";
import "../../App.css";

// Import Icons yang sesuai dengan layanan
import { FaPaintBrush, FaCode, FaServer, FaMobileAlt, FaCloudUploadAlt, FaDatabase, FaSearchDollar } from 'react-icons/fa';
import { MdAppRegistration, MdApi } from 'react-icons/md';
import { HiOutlineTerminal } from 'react-icons/hi';
import { SiFigma, SiPostman } from 'react-icons/si';

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services main-container">
        <h3 className="pre-title">Services</h3>
        <h1 className="section-title services-title">Specialized In</h1>

        <div className="services-list-grid">
          
          <div className="service-item-card">
            <div className="service-icon-box uiux"><SiFigma /></div>
            <h4>UI/UX Design</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box app"><MdAppRegistration /></div>
            <h4>App Development</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box web"><FaCode /></div>
            <h4>Web Development</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box backend"><FaServer /></div>
            <h4>Backend</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box frontend"><HiOutlineTerminal /></div>
            <h4>Frontend</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box db"><FaDatabase /></div>
            <h4>Database</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box api"><MdApi /></div>
            <h4>API Integration</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box mobile"><FaMobileAlt /></div>
            <h4>Mobile Dev</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box cloud"><FaCloudUploadAlt /></div>
            <h4>Cloud & Deploy</h4>
          </div>

          <div className="service-item-card">
            <div className="service-icon-box seo"><FaSearchDollar /></div>
            <h4>SEO Optimization</h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;