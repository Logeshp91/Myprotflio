import { useEffect, useState } from 'react';
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


function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 60 && rect.bottom >= 60) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="full-screen">
      <div className="header">
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          <Info style={{ fontSize: 20 }} /> About
        </a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
          <BuildIcon style={{ fontSize: 20 }} /> Skills
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
          <CodeIcon style={{ fontSize: 20 }} /> Projects
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          <ContactMailIcon style={{ fontSize: 20 }} /> Contact
        </a>
      </div>

      <div className="main-content" id="about">
        <div className="text-section">
          <h2>Hi, I am</h2>
          <h1>Logesh</h1>
          <p>Front-end Developer / UI Designer</p>
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
        <div className="image-section">{/* image if needed */}</div>
      </div>

      <div className="black-section">
        I am a skilled Front-End Developer with 2+ years of experience in creating high-quality mobile applications for Android
        and iOS using React Native, HTML, CSS, and JavaScript. I specialize in developing responsive and user-centric
        interfaces that deliver exceptional user experiences. My background in mobile application development equips me to
        bring innovative solutions and contribute effectively to the team’s success.      </div>
      <div id="skills">
        <Skills />
      </div>
            <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
    
  );
}

export default App;
