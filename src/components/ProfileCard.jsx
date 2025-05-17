import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './ProfileCard.module.css';
import ProjectsPanel from './ProjectsPanel.jsx';
import EducationPanel from './EducationPanel.jsx';
import SkillsPanel from './SkillPanel.jsx';
import ToolsPanel from './ToolsPanel.jsx';
import CertificationPanel from './CertificationPanel.jsx';
import AspirationsPanel from './AspirationsPanel.jsx';



export default function ProfileCard({ onOpenPanel }) {
  const [showProjects, setShowProjects] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [showAspirations, setShowAspirations] = useState(false);




    const currentDateTime = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
      });
      const modalRef = useRef(null);
      
        useEffect(() => {
          if (modalRef.current) {
            modalRef.current.scrollTop = 0;
          }
        }, []);

      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
      };

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.card} data-theme={theme} ref={modalRef}>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
  
        <div className={styles.avaborder}>
      <img
        src="/avatar.png"
        alt="Esther"
        className={styles.avatar} data-theme={theme}
      />
      </div>
      <h1 className={styles.name}>Hi! My Name is Esther </h1>
      <p className={styles.title}>Passionate Frontend | Software Engineer</p>
      <p className={styles.bio}>
      I am a Software Engineering Student specializing in creating intuitive and esthetically pleasing user experiences.
       Eager to learn and grow in a collaborative environment, I am committed to delivering high-quality software solutions that meet user needs and exceed expectations.
      </p>
      <div className={styles.buttonGroup}>
  <a className={styles.hireMeButton}
    href="https://wa.me/+2348025859769" 
    target="_blank" 
    rel="noopener noreferrer">Hire Me</a>
  <a className={styles.resumeButton}
  href="/Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  ref={modalRef}>
  Resume</a>
</div>


      <div className={styles.buttonGroup1}>
      <button className={styles.gradientButton} onClick={() => setShowProjects(true)}>Projects</button>
      <button className={styles.gradientButton} onClick={() => setShowSkills(true)}>Skills</button>
      <button className={styles.gradientButton} onClick={() => setShowAspirations(true)}>Aspirations</button>
      <button className={styles.gradientButton} onClick={() => setShowEducation(true)}>Education</button>
      <button className={styles.gradientButton} onClick={() => setShowTools(true)}>Tools</button>     
      <button className={styles.gradientButton} onClick={() => setShowCertification(true)}>Certification</button>
      </div>

       

      {showProjects && (
        <>
          <div className={styles.overlay} onClick={() => setShowProjects(false)} />
          <ProjectsPanel onClose={() => setShowProjects(false)} />
        </>
      )}

        {showEducation && (
          <>
            <div className={styles.overlay} onClick={() => setShowEducation(false)} />
            <EducationPanel onClose={() => setShowEducation(false)} />
          </>
        )}

        {showSkills && (
          <>
            <div className={styles.overlay} onClick={() => setShowSkills(false)} />
            <SkillsPanel onClose={() => setShowSkills(false)} />
          </>
        )}
        {showTools && (
          <>
            <div className={styles.overlay} onClick={() => setShowTools(false)} />
            <ToolsPanel onClose={() => setShowTools(false)} />
          </>
        )}

        {showCertification && (
          <>
            <div className={styles.overlay} onClick={() => setShowCertification(false)} />
            <CertificationPanel onClose={() => setShowCertification(false)} />
          </>
        )}

          {showAspirations && (
            <>
              <div className={styles.overlay} onClick={() => setShowAspirations(false)} />
              <AspirationsPanel onClose={() => setShowAspirations(false)} />
            </>
          )}


      <div className={styles.socials}>
  <a href="https://instagram.com/estheticallybawo" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com/in/estheticallybawo" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/estheticallybawo" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
</div>
      <div className={styles.dateTime}>
        <p>Designed and Developed by Esther Bawo Tsotso <a href="https://profile-card-two-tan.vercel.app" target="_blank" rel="noopener noreferrer"> v1 </a></p>
      </div>
    </div>


  );
}
