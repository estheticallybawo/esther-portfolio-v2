import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './ProfileCard.module.css';
import ProjectsPanel from './ProjectsPanel.jsx';



export default function ProfileCard({ onOpenPanel }) {
  const [showProjects, setShowProjects] = useState(false);

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

      const [theme, setTheme] = useState('light');

      const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
      };

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.card} data-theme={theme}>
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
  >Resume</a>
</div>


      <div className={styles.buttonGroup1}>
      <button className={styles.gradientButton} onClick={() => setShowProjects(true)}>Projects</button>
      <button className={styles.gradientButton} onClick={() => onOpenPanel('skills')}>Skills</button>
      <button className={styles.gradientButton} onClick={() => onOpenPanel('aspirations')}>Aspirations</button>
      <button className={styles.gradientButton} onClick={() => onOpenPanel('education')}>Education</button>
      <button className={styles.gradientButton} onClick={() => onOpenPanel('tools')}>Tools</button>
      <button className={styles.gradientButton} onClick={() => onOpenPanel('certification')}>Certification</button>
      </div>

      {showProjects && (
        <>
          <div className={styles.overlay} onClick={() => setShowProjects(false)} />
          <ProjectsPanel onClose={() => setShowProjects(false)} />
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
        {currentDateTime.replace(',', ' @').replace('GMT', '')} UTC
      </div>
    </div>


  );
}
