import React from 'react'
import './Skill.css'
import '../../App.css'
const Skill = () => {
  return (
    <div className="skills" data-aos="fade-up">
      <div className="skills main-container" data-aos="fade-up">
        <h3 className="pre-title" data-aos="fade-up" data-aos-delay="200">Learning Path</h3>
        <h1 className="section-title" data-aos="fade-up" data-aos-delay="300">Skills & Education</h1>

        <div className="skills-grid">
          <div className="skills-left">
            <div className="education">
              <div className="line">
                <div></div>
              </div>
              <div className="education-info" data-aos="fade-up" data-aos-delay="400">
                <h4 className="education-title">SDN Lengkong 02</h4>
                <p>Student - Elementary school</p>
                <h4 className="education-years">2014 - 2019</h4>
              </div>
            </div>
            <div className="education">
              <div className="line">
                <div></div>
              </div>
              <div className="education-info" data-aos="fade-up" data-aos-delay="500">
                <h4 className="education-title">SMPN 01 Mumbulsari</h4>
                <p>Student & Basic Programers - Junior High school</p>
                <h4 className="education-years">2019 - 2022</h4>
              </div>
            </div>
            <div className="education">
              <div className="line">
                <div></div>
              </div>
              <div className="education-info" data-aos="fade-up" data-aos-delay="600">
                <h4 className="education-title">SMKN 02 Jember</h4>
                <p>Intermediate Programers Developers - Software Engineering</p>
                <h4 className="education-years">2022 - 2025</h4>
              </div>
            </div>
          </div>

          <div className="skills-right" data-aos="fade-up" data-aos-delay="200">
            <p>
              For 2+ years, I have been continuously learning in the field of
              front-end and experimenting with new technologies and frameworks,
              and here you can see a summary of my skills. Field of front-end
              and experimenting with new technologies.
            </p>

            <div className="skills-list" data-aos="fade-up" data-aos-delay="300">
              <ul>
                <li>Java</li>
                <li>Node JS</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>Vue JS</li>
              </ul>

              <ul>
                <li>CSS</li>
                <li>Typescript</li>
                <li>Next JS</li>
                <li>GraphQl</li>
                <li>Angular JS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
