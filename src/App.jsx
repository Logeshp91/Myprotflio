import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';
import Info from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Skills from './Skills';
import Contact from '../Contact';
import Projects from './Projects';
import myphoto from './assets/myphoto1.jpg';
import Highlights from './Highlights';

function App() {
  const [activeSection, setActiveSection] = useState('');

useEffect(() => {
  const handleScroll = () => {
    const sections = ['about', 'skills', 'highlights', 'projects', 'contact'];
    const headerHeight = 80;

    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= headerHeight + 10 && rect.bottom >= headerHeight + 10;

        if (isVisible) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break; // stop at the first visible section
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // trigger once on mount

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [activeSection]);

  return (
    <div className="full-screen">
      <div className="header">
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          <Info style={{ fontSize: 20 }} /> About
        </a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
          <BuildIcon style={{ fontSize: 20 }} /> Skills
        </a>
        <a href="#highlights" className={activeSection === 'highlights' ? 'active' : ''}>
          <CodeIcon style={{ fontSize: 20 }} /> Highlights
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
          <CodeIcon style={{ fontSize: 20 }} /> Projects
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          <ContactMailIcon style={{ fontSize: 20 }} /> Contact
        </a>
      </div>

      {/* About Section */}
      <div className="main-content" id="about">
        <div className="about-container">
          <div className="text-section">
            <h2>Hi, I am</h2>
            <h1>Logesh</h1>

            {/* Animated Front-End Developer */}
            <div className="universe-title">
              {["Front-end", "Developer"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.5,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="universe-word"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="button-group">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=logesh1910@gmail.com"
                className="icon-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon style={{ fontSize: '18px' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/p-logesh-786b79307"
                className="icon-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ fontSize: '18px' }} />
              </a>
              <a
                href="https://github.com/Logeshp91"
                className="icon-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon style={{ fontSize: '18px' }} />
              </a>
            </div>
          </div>
<div className="image-section">
  <div className="image-wrapper">
    <img src={myphoto} alt="Logesh" />
  </div>
</div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="black-section">
        I am a skilled Front-End Developer with 2+ years of experience in creating high-quality mobile applications for Android
        and iOS using React Native, HTML, CSS, and JavaScript. I specialize in developing responsive and user-centric
        interfaces that deliver exceptional user experiences. My background in mobile application development equips me to
        bring innovative solutions and contribute effectively to the team’s success.
      </div>

      {/* Other Sections */}
  <div id="skills">
  <Skills />
</div>
<div id="highlights">
  <Highlights />
</div>
<div id="projects" >
  <Projects />
</div>
<div id="contact" >
  <Contact />
</div>
    </div>
  );
}

export default App;
