import React, { useState } from 'react';
import './Projects.css';

import Project1 from './assets/login.jpeg';
import Viewlinered from './assets/listviewred.jpeg';
import listviewgreen from './assets/listviewgreen.jpeg';
import placements from './assets/placements.jpeg';
import viewlinerun from './assets/viewlinerun.jpeg';
import greenviewlinerun from './assets/greenviewlinerun.jpeg';
import Project2 from './assets/listviewgreen.jpeg';
import Project3 from './assets/placements.jpeg';

const projectScreenshots = [
  {
    title: 'CR Poultry Farms',
    images: [Project1, listviewgreen, Viewlinered, greenviewlinerun, viewlinerun, placements]
  },
  {
    title: 'Online Patta App',
    images: [Project2]
  },
  {
    title: 'Design Showcase',
    images: [Project3]
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Design');

  return (
    <div className="projects-section">
      <h2>Projects</h2>

      {/* Neumorphic Toggle Switch */}
      <div className="toggle-box">
        <div className="toggle-container">
          <button
            className={`toggle-button ${activeTab === 'Design' ? 'active' : ''}`}
            onClick={() => setActiveTab('Design')}
          >
            Design
          </button>
          <button
            className={`toggle-button ${activeTab === 'Code' ? 'active' : ''}`}
            onClick={() => setActiveTab('Code')}
          >
            Code
          </button>
        </div>
      </div>

      <div className="projects-list">
        {projectScreenshots.map((project, index) => (
          <div key={index} className="project-row">
            <div className="project-text">
              <h3>{project.title}</h3>
            </div>
            <div className="carousel-wrapper">
              <div className="carousel-track">
                {project.images.map((img, idx) => (
                  <div key={idx} className="carousel-item">
                    <div className="phone-frame">
                      <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="phone-screen"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
