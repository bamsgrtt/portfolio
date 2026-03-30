import React from 'react';
// import './Skill.css';
import '../App.css';

// Import Icons
import { 
  DiJava, 
  DiNodejsSmall, 
  DiMongodb, 
  DiGit, 
  DiPython, 
  DiDocker 
} from 'react-icons/di';

import { 
  SiTypescript, 
  SiNextdotjs, 
  SiVuedotjs,  
  SiJavascript, 
  SiTailwindcss, 
  SiBootstrap, 
  SiReact, 
  SiFirebase, 
  SiPostman, 
  SiFlutter, 
  SiFigma, 
  SiBlender, 
  SiCplusplus, 
  SiMysql, 
  SiPostgresql, 
  SiLaravel, 
  SiGo, 
  SiDart, 
  SiCanva, 
  SiOpenai,
  SiPhp 
} from 'react-icons/si';

import { FaPalette, FaCode, FaServer } from 'react-icons/fa';

const Skill = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills main-container">
        <h3 className="pre-title">Learning Path</h3>
        <h1 className="section-title">Skills & Expertise</h1>

          <div className="skills-wrapper">
          
          {/* --- CATEGORY 1: DESIGN & UI/UX --- */}
          <div className="skill-category-group">
            <h4 className="category-label">
              <FaPalette className="cat-icon" /> Design & UI/UX
            </h4>
            <div className="skills-list-grid">
              <div className="skill-item-card"><div className="skill-icon-box figma"><SiFigma /></div><h4>Figma</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box canva"><SiCanva /></div><h4>Canva</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box blender"><SiBlender /></div><h4>Blender 3D</h4></div>
            </div>
          </div>

          {/* --- CATEGORY 2: PROGRAMMING & FRAMEWORKS --- */}
                <div className="skill-category-group">
                <h4 className="category-label">
                  <FaCode className="cat-icon" /> Programming & Frameworks
                </h4>
                <div className="skills-list-grid">
                  <div className="skill-item-card"><div className="skill-icon-box js"><SiJavascript /></div><h4>JavaScript</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box ts"><SiTypescript /></div><h4>TypeScript</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box java"><DiJava /></div><h4>Java</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box php"><SiPhp /></div><h4>PHP</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box python"><DiPython /></div><h4>Python</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box cpp"><SiCplusplus /></div><h4>C++</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box dart"><SiDart /></div><h4>Dart</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box go"><SiGo /></div><h4>Go Lang</h4></div>
                  
                  <div className="skill-item-card"><div className="skill-icon-box react"><SiReact /></div><h4>React JS</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box next"><SiNextdotjs /></div><h4>Next JS</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box vue"><SiVuedotjs /></div><h4>Vue JS</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box laravel"><SiLaravel /></div><h4>Laravel</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box flutter"><SiFlutter /></div><h4>Flutter</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box tailwind"><SiTailwindcss /></div><h4>Tailwind</h4></div>
                  <div className="skill-item-card"><div className="skill-icon-box bootstrap"><SiBootstrap /></div><h4>Bootstrap</h4></div>
                </div>
                </div>

                {/* --- CATEGORY 3: BACKEND, TOOLS & AI --- */}
          <div className="skill-category-group">
            <h4 className="category-label">
              <FaServer className="cat-icon" /> Backend, Cloud & Tools
            </h4>
            <div className="skills-list-grid">
              <div className="skill-item-card"><div className="skill-icon-box node"><DiNodejsSmall /></div><h4>Node JS</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box mysql"><SiMysql /></div><h4>MySQL</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box pg"><SiPostgresql /></div><h4>PostgreSQL</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box mongo"><DiMongodb /></div><h4>MongoDB</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box firebase"><SiFirebase /></div><h4>Firebase</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box docker"><DiDocker /></div><h4>Docker</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box git"><DiGit /></div><h4>Git & GitHub</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box postman"><SiPostman /></div><h4>Postman</h4></div>
              <div className="skill-item-card"><div className="skill-icon-box openai"><SiOpenai /></div><h4>AI Integration</h4></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skill; 