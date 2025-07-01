import React from 'react';
import './Skills.css';
import HtmlLogo from './assets/Html.svg';
import CssLogo from './assets/Css.svg';
import javascriptLogo from './assets/javascript.svg';
import ReactjsLogo from './assets/React.png';
import ReactNativeLogo from './assets/reactnative.png';
import reduxLogo from './assets/redux.svg';
import materialLogo from './assets/material.svg';
import git from './assets/git.svg';
import googlecloud from './assets/googlecloud.svg';
import vscode from './assets/vscode.svg';
import androidos from './assets/androidos.svg';
import xcode from './assets/xcode.svg';
import Figma from './assets/figma1.svg';
import reacthooks from './assets/reacthooks.png';
import LogeshResume from './assets/LogeshResume.pdf';

function Skills() {
  const skills = [
    { name: 'HTML', logo: HtmlLogo },
    { name: 'CSS', logo: CssLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'React.js', logo: ReactjsLogo },
    { name: 'React Native', logo: ReactNativeLogo },
    { name: 'Redux', logo: reduxLogo },
    { name: 'Material Design(MUI)', logo: materialLogo },
  ];
  const Tools = [
    { name: 'GitHub', logo: git },
    { name: 'Google Cloud', logo: googlecloud },
    { name: 'VS Code', logo: vscode },
    { name: 'Android SDK', logo: androidos },
    { name: 'Xcode', logo: xcode },
    { name: 'Figma', logo: Figma },
  ];
  const StateManagement = [
    { name: 'Redux', logo: reduxLogo },
    { name: 'React Hooks', logo: reacthooks },
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>

      <div className="skills-layout">
        {/* LEFT SIDE: Skills */}
        <div className="skills-left">
          <div className="skills-row">
            <h3 className="skills-heading">Web Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-wrapper" key={index}>
                  <div className="skill-card">
                    <img src={skill.logo} alt={skill.name} className="skill-icon" />
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-row">
            <h3 className="skills-heading">Tools</h3>
            <div className="skills-grid">
              {Tools.map((tool, index) => (
                <div className="skill-wrapper" key={index}>
                  <div className="skill-card">
                    <img src={tool.logo} alt={tool.name} className="skill-icon" />
                  </div>
                  <p className="skill-name">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-row">
            <h3 className="skills-heading">State Management</h3>
            <div className="skills-grid">
              {StateManagement.map((item, index) => (
                <div className="skill-wrapper" key={index}>
                  <div className="skill-card">
                    <img src={item.logo} alt={item.name} className="skill-icon" />
                  </div>
                  <p className="skill-name">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-right-box">
          <h1>2</h1>
          <h2>Years</h2>
          <h3>Experience</h3>
<a href={LogeshResume} download className="download-btn">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
