import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';
import Info from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Skills from './Skills';
import Contact from '../Contact';
import Projects from './Projects';
import myphoto from './assets/myphoto1.jpg';
import Highlights from './Highlights';


function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const clickListenerTimeout = useRef(null);


  const toggleMobileMenu = () => {
    const willOpen = !isMobileMenuOpen;

    setIsMobileMenuOpen(willOpen);

    setTimeout(() => {
      if (willOpen) {
        window.addEventListener('click', handleClickOutside);
      } else {
        window.removeEventListener('click', handleClickOutside);
      }
    }, 0);
  };


  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      toggleRef.current &&
      !navRef.current.contains(event.target) &&
      !toggleRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
      window.removeEventListener('click', handleClickOutside); // remove listener once used
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'highlights', 'projects', 'contact'];
      const headerHeight = 80;

      let currentSection = '';
      const buffer = window.innerHeight * 0.2; // Allow early activation

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerHeight + buffer && rect.bottom >= headerHeight + buffer) {
            currentSection = section;
            break; // Exit early on first match
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        window.removeEventListener('click', handleClickOutside);
      }
    };


    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
      clearTimeout(clickListenerTimeout.current);
    };
  }, [activeSection, isMobileMenuOpen]);

  return (
    <div className="full-screen">

      <div className="header">
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu} ref={toggleRef}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} ref={navRef}>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)} // 👈 close menu
          >
            <Info style={{ fontSize: 20 }} /> About
          </a>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <BuildIcon style={{ fontSize: 20 }} /> Skills
          </a>
          <a
            href="#highlights"
            className={activeSection === 'highlights' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CodeIcon style={{ fontSize: 20 }} /> Highlights
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CodeIcon style={{ fontSize: 20 }} /> Projects
          </a>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ContactMailIcon style={{ fontSize: 20 }} /> Contact
          </a>
        </div>

      </div>

      {/* ✅ About Section */}
      <div className="main-content" id="about">
        <div className="about-container">
          <div className="text-section">
            <h2>Hi, I am</h2>
            <h1>Logesh</h1>
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
              <a href="mailto:logesh1910@gmail.com" className="icon-button">
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
              <a
                href="tel:+919842749893"
                className="icon-button"
                aria-label="Call Logesh"
              >
                <PhoneIcon style={{ fontSize: '18px' }} />
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
        I am a skilled Front-End Developer with 2+ years of experience in creating high-quality mobile applications for Android and iOS using React Native, HTML, CSS, and JavaScript. I specialize in developing responsive and user-centric interfaces that deliver exceptional user experiences. My background in mobile application development equips me to bring innovative solutions and contribute effectively to the team’s success.
      </div>

      {/* Other Sections */}
      <div id="skills"><Skills /></div>
      <div id="highlights"><Highlights /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
