import React from "react";
import "./Contact.css";
import "../../App.css";

// Import Icons
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

const Contact = () => {
  return (
    <div className="contact" id="contact" data-aos="fade-up">
      <div className="main-container">
        <h3 className="pre-title">Contact</h3>
        <h1 className="section-title contact-title">Connect with me</h1>

        {/* Kotak Besar Pembungkus */}
        <div className="contact-box-wrapper" data-aos="zoom-in">
          <div className="contact-list-vertical">
            
            {/* Item 1 */}
            <a href="https://instagram.com/bamsgrtt" target="_blank" rel="noreferrer" className="contact-list-item">
              <div className="contact-icon-box instagram"><FaInstagram /></div>
              <div className="contact-text">
                <h4>Instagram</h4>
                <p>@bamsgrtt</p>
              </div>
            </a>

            {/* Item 3 */}
            <a href="mailto:emailmu@gmail.com" className="contact-list-item">
              <div className="contact-icon-box email"><FaEnvelope /></div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>bambang031106@gmail.com</p>
              </div>
            </a>

            {/* Item 4 */}
            <a href="https://github.com/bamsgrtt" target="_blank" rel="noreferrer" className="contact-list-item">
              <div className="contact-icon-box github"><FaGithub /></div>
              <div className="contact-text">
                <h4>GitHub</h4>
                <p>github.com/bamsgrtt</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;