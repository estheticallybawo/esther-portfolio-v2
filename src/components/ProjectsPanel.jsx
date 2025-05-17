import styles from './ProfileCard.module.css';
import { FaGithub, FaLink } from 'react-icons/fa6';
import { IoMdCloseCircleOutline } from "react-icons/io";
import React, { useEffect, useRef } from 'react';

export default function ProjectsPanel({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className={styles.projectsModal} data-theme="light" ref={modalRef}>
      <h2 className={styles.name}>Projects</h2>
      <p className={styles.quote}>"I design and develop with human connection in mind. These pieces reflect my commitment to meaningful experiences:"</p>
      
      {/* Add your new project here */}
      <div className={styles.projectItem}>
        <h3 className={styles.projectName}>Interactive Portfolio Card v2</h3>
        <p>A responsive portfolio card with smooth animations and mobile-first design. Built with React, CSS modules, and modern web technologies. Features include responsive layout, gradient animations, and accessible modal dialogs. This project demonstrates my frontend development skills and attention to user experience details.</p>
      
        <div className={styles.iconGroup}>
          <a href='https://github.com/estheticallybawo/esther-portfolio-v2'
            target='_blank'
            rel="noopener noreferrer"
            className={styles.iconLink}>
            <FaGithub />
          </a>
          <a href='https://my-portfolio-ten-bay-35.vercel.app'
            target='_blank'
            rel="noopener noreferrer"
            className={styles.iconLink}>
            <FaLink />
          </a>
        </div>
      </div>

      <div className={styles.projectItem}>
        <h3 className={styles.projectName}>Profile Card v1</h3>
        <p>Used HTML, CSS, and JavaScript to build a responsive profile card that showcases my details, social links, and a clean UI. This project pushed me to work under a tight deadline while ensuring a sleek, mobile-friendly design. With the Dark mode feature and Parallax effect, deployed with Vercel</p>
      
        <div className={styles.iconGroup}>
          <a href='https://github.com/estheticallybawo/hngx-stage0-Profile-Card'
            target='_blank'
            rel="noopener noreferrer"
            className={styles.iconLink}>
            <FaGithub />
          </a>
          <a href='https://profile-card-two-tan.vercel.app/'
            target='_blank'
            rel="noopener noreferrer"
            className={styles.iconLink}>
            <FaLink />
          </a>
        </div>
      </div>

      <div className={styles.projectItem}>
        <h3 className={styles.projectName}>Color Guessing Game</h3>
        <p>Used HTML CSS, and JavaScript to build a responsive Color Guessing Game for kids with color blindness with retro words UI, sound effects, and content to make the game interactive and engaging.</p>
        <div className={styles.iconGroup}>
          <a href='https://github.com/estheticallybawo/hngx-stage1-Game'
            target='_blank'
            rel="noopener noreferrer"
            className={styles.iconLink}>
            <FaGithub />
          </a>
          <a href='https://color-game-gules-kappa.vercel.app/'
            target='_blank'
            rel="noopener noreferrer"
            className={styles.iconLink}>
            <FaLink />
          </a>
        </div>
      </div>
      
      <button className={styles.closeButton} onClick={onClose}><IoMdCloseCircleOutline /></button>
    </div>
  );
}