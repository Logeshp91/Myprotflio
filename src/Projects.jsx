import React, { useState, useRef } from 'react';
import './Projects.css';
import { motion, useInView } from 'framer-motion';
import Project1 from './assets/login.jpeg';
import Viewlinered from './assets/listviewred.jpeg';
import listviewgreen from './assets/listviewgreen.jpeg';
import placements from './assets/placements.jpeg';
import viewlinerun from './assets/viewlinerun.jpeg';
import greenviewlinerun from './assets/greenviewlinerun.jpeg';
import Patta1 from './assets/patta.jpeg';
import Patta2 from './assets/patta2.jpeg';
import Patta3 from './assets/patta3.jpeg';
import Patta4 from './assets/patta4.jpeg';
import Patta5 from './assets/patta5.jpeg';
import spo1 from './assets/spo1.png';
import spo3 from './assets/spo3.png';
import spo4 from './assets/spo4.png';
import spo5 from './assets/spo5.png';
import spo2 from './assets/spo2.png';

const projectScreenshots = [
  {
    title: 'CR Poultry Farms',
    images: [Project1, listviewgreen, Viewlinered, greenviewlinerun, viewlinerun, placements],
    description: 'A mobile app to track poultry inventory, sales, and reports.'
  },
  {
    title: 'Online Patta App',
    images: [Patta1, Patta2, Patta3, Patta4, Patta5],
    description: 'Government land document generation.'
  },
  {
    title: 'SpoEvents',
    images: [spo1, spo3, spo4, spo5, spo2],
    description: 'A mobile app for managing sports event registrations with multi-sport selection and participant tracking.'
  }
];

// ✅ Animate words
const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  return (
    <p className="animated-description">
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: idx * 0.1, duration: 0.3 }}
          style={{ display: 'inline-block', marginRight: '5px' }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

// ✅ Overview Card with animation
const AnimatedCard = ({ children, direction = 'up', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="overview-card"
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

// ✅ Main Component
const Projects = () => {
  const [activeTab, setActiveTab] = useState('Design');

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="toggle-box">
        <div className="toggle-container">
          <button
            className={`toggle-button ${activeTab === 'Design' ? 'active' : ''}`}
            onClick={() => setActiveTab('Design')}
          >
            Design
          </button>
          <button
            className={`toggle-button ${activeTab === 'Overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('Overview')}
          >
            Overview
          </button>
        </div>
      </div>

      {/* ✅ DESIGN TAB */}
      {activeTab === 'Design' && (
        <div className="projects-list">
          {projectScreenshots.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className="project-info">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <AnimatedText text={project.description} />
              </div>

              <motion.div
                className="carousel-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  className="carousel-scroll"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="phone-frame"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.2 * idx }}
                    >
                      <img src={img} alt={`Screenshot ${idx}`} className="phone-screen" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ✅ OVERVIEW TAB */}
      {activeTab === 'Overview' && (
        <div className="overview-section">
          <AnimatedCard direction="up" delay={0}>
            <h3>CR Poultry Farms</h3>
            <ul className="overview-list">
              <li>Developed a cross-platform mobile app using React Native for poultry farm health monitoring.</li>
              <li>Integrated features to track daily bird health, vaccinations, and medication schedules.</li>
              <li>Implemented real-time alerts to notify farmers of critical health issues and abnormalities.</li>
              <li>Created a dynamic dashboard to visualize trends in feed intake and health status using interactive charts.</li>
              <li>Used Firebase for secure data storage and cross-device synchronization.</li>
              <li>Focused on intuitive UI/UX to ensure usability by non-technical farm workers.</li>
              <li>Achieved a reduction in bird mortality rates through timely data-driven actions.</li>
              <li>Utilized GitHub for version control and code collaboration.</li>
            </ul>
            <p><strong>Tools & Technologies:</strong> Javascript, React Native, React JS, HTML5, CSS, Redux, GitHub, VS Code, Android SDK, Xcode</p>
            <p><strong>Design Stack:</strong> Figma, Mobile-first UI, responsive layout, and modern visuals.</p>
          </AnimatedCard>

          <AnimatedCard direction="left" delay={0.2}>
            <h3>Online Patta Chitta Application</h3>
            <ul className="overview-list">
              <li>Developed a mobile app using React Native to access Tamil Nadu land record services like Patta, Chitta, and EC using WebView.</li>
              <li>Embedded official government portals for a seamless, app-like experience inside the app.</li>
              <li>Designed a clean and intuitive UI to help non-technical users apply for land records easily.</li>
              <li>Optimized performance for Android to ensure smooth WebView loading and navigation.</li>
              <li>Enabled external link handling, PDF downloads, and in-app file viewing when needed.</li>
              <li>Ensured compatibility across a wide range of Android devices and screen sizes.</li>
              <li>Used GitHub for version control and feature updates during iterative development.</li>
              <li>Delivered a lightweight, accessible solution for rural users relying on mobile access to land documents.</li>
            </ul>
            <p><strong>Tools & Technologies:</strong> React Native, WebView, JavaScript, GitHub, Android SDK, VS Code</p>
            <p><strong>Design Stack:</strong> Clean minimal UI, responsive mobile layouts, government service embedding.</p>
          </AnimatedCard>

          <AnimatedCard direction="right" delay={0.4}>
            <h3>SpoEvents</h3>
            <ul className="overview-list">
              <li>Developed a mobile app using React Native to manage sports event registrations across multiple categories.</li>
              <li>Allowed users to register, select one or more sports, and receive instant confirmation and tracking.</li>
              <li>Built a responsive and intuitive UI with scrollable sport selection and confirmation page.</li>
              <li>Integrated dynamic forms to handle participant input with proper validations.</li>
              <li>Structured data efficiently to support event planning and team management workflows.</li>
              <li>Planned for scalable features such as QR-based check-ins, result posting, and real-time schedules.</li>
              <li>Ensured performance and usability on Android with smooth navigation and lightweight screens.</li>
              <li>Managed code versioning and collaboration through GitHub for clean development practice.</li>
            </ul>
            <p><strong>Tools & Technologies:</strong> React Native, JavaScript, HTML, CSS, GitHub, Android SDK, VS Code</p>
            <p><strong>Design Stack:</strong> Scrollable card-based UI, form-first flow, responsive layout, modern visuals</p>
          </AnimatedCard>
        </div>
      )}
    </div>
  );
};

export default Projects;
