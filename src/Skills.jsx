import React, { useRef } from 'react';
import './Skills.css';
import { motion, useInView } from 'framer-motion';
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
import Figma from './assets/figma.png';
import reacthooks from './assets/reacthooks.png';
import LogeshResume from './assets/LogeshResume.pdf';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

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
    <div className="skills-section" ref={ref}>
      <motion.h2
      >
        Skills
      </motion.h2>

      <div className="skills-layout">
        <div className="skills-left">
          {[{ title: 'Web Technologies', data: skills },
            { title: 'Tools', data: Tools },
            { title: 'State Management', data: StateManagement }].map((section, secIndex) => (
            <div className="skills-row" key={secIndex}>
              <motion.h3
                className="skills-heading"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={headingVariants}
              >
                {section.title}
              </motion.h3>
              <div className="skills-grid">
                {section.data.map((item, index) => (
                  <motion.div
                    className="skill-wrapper"
                    key={index}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    custom={index}
                  >
                    <div className="skill-card">
                      <img src={item.logo} alt={item.name} className="skill-icon" />
                    </div>
                    <p className="skill-name">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="skills-right-box"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
        >
          <h1>2</h1>
          <h2>Years</h2>
          <h3>Experience</h3>
<motion.a
  href={LogeshResume}
  download
  className="download-btn"
  animate={{ scale: [0.5, 1, 0.5] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
>
  Download CV
</motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;