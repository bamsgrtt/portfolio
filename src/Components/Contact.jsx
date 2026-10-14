import React from "react";
import "../App.css";

// Import Icons
import {
  FaInstagramSquare,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const Contact = () => {

  const contactData = [
    {
      nama: "Instagram",
      icon: <FaInstagramSquare />,
      username: "@bamsgrtt",
      link: "https://instagram.com/bamsgrtt",
      action: "Follow Me",
      color: "text-pink-500",
      bgColor:
        "bg-blue-300/50 hover:bg-pink-300/50 transition-colors duration-300",
    },
    {
      nama: "Email",
      icon: <FaEnvelope />,
      username: "bambang031106@gmail.com",
      link: "mailto:bambang031106@gmail.com",
      action: "Contact Me",
      color: "text-red-500",
      bgColor:
        "bg-blue-300/50 hover:bg-red-300/50 transition-colors duration-300",
    },
    {
      nama: "GitHub",
      icon: <FaGithub />,
      username: "github.com/bamsgrtt",
      link: "https://github.com/bamsgrtt",
      action: "View Profile",
      color: "text-gray-800",
      bgColor:
        "bg-blue-300/50 hover:bg-gray-300/50 transition-colors duration-300",
    },
    {
      nama: "LinkedIn",
      icon: <FaLinkedin />,
      username: "linkedin.com/in/bamsgrtt",
      link: "https://linkedin.com/in/bamsgrtt",
      action: "Connect Now",
      color: "text-blue-600",
      bgColor:
        "bg-blue-300/50 hover:bg-blue-300 transition-colors duration-300",
    },
  ];

  return (
    <section className="section-wrap contact-section reveal" id="contact">
      <div className="container mx-auto">
          <div className="contact-heading"><p className="eyebrow">
            Contact
          </p><h1>Have a good idea?<br/><em>Let’s talk.</em></h1>
        </div>

        {/* Kotak Besar Pembungkus */}
           <div className="contact-grid">
        {contactData.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="flex items-center gap-3">
              <div className={`${contact.bgColor} p-2 rounded-lg ${contact.color} w-12 h-12 flex items-center justify-center`}>
                {contact.icon}
              </div>
              <div className="flex flex-col overlow-hidden">

                <div className="text-gray-400 text-2xl uppercase font-bold">
                  <p>{contact.nama}</p>
                </div>
                <div className="text-blue-500 text-xs">
                  <p>{contact.username}</p>
                </div>
              </div>
              </div>
                <div className="px-1 text-lg text-gray-700 text-center w-full">
                  <p>{contact.action}</p>
              </div>
            </a>
               ))}
          </div>
      </div>
    </section>
  );
};

export default Contact;
