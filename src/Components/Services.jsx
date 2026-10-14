import React from "react";
import { FaCode, FaServer } from "react-icons/fa";
import { HiOutlineTerminal } from "react-icons/hi";
import { MdAppRegistration } from "react-icons/md";
import { SiFigma } from "react-icons/si";

const Services = () => {
  const services = [
    { number: "01", title: "Interface thinking", text: "Clear, considered interfaces that make complex ideas feel approachable.", icon: <SiFigma /> },
    { number: "02", title: "Frontend craft", text: "Responsive React experiences with motion, rhythm, and useful detail.", icon: <HiOutlineTerminal /> },
    { number: "03", title: "Product building", text: "From first sketch to working software, with curiosity at every step.", icon: <FaCode /> },
  ];

  return (
    <section className="section-wrap section-dark about-section reveal" id="services">
      <div className="about-intro">
        <p className="eyebrow">01 / about the person</p>
        <div>
          <h2>Still learning.<br /><em>Already building.</em></h2>
          <p className="about-lede">A developer in progress with a designer&apos;s eye for structure, texture, and the small moments that make software feel human.</p>
        </div>
      </div>
      <div className="about-story-grid">
        <div className="about-story">
          <p>I&apos;m Bambang Sugiarto, a Computer and Network Engineering graduate currently going deeper into Informatics and software development.</p>
          <p>My current focus is Java backend development, while I keep expanding my frontend practice with JavaScript, React, and thoughtful visual systems. I like working from first principles: understand the problem, make something useful, then improve it.</p>
          <div className="about-signature">Bambang <span>/ 永恒</span></div>
        </div>
        <div className="about-details">
          <div><span>Based in</span><strong>Indonesia</strong></div>
          <div><span>Focus</span><strong>Java / React</strong></div>
          <div><span>Approach</span><strong>Quietly curious</strong></div>
          <div><span>Availability</span><strong className="available"><i></i> Open to work</strong></div>
        </div>
      </div>
      <div className="service-cards">
        {services.map((service) => <article className="service-card" key={service.number}>
          <div className="service-card-top"><span>{service.number}</span><span className="service-icon">{service.icon}</span></div>
          <h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span>
        </article>)}
      </div>
    </section>
  );
};

export default Services;
