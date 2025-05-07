import React from 'react';
import styles from './ProfileCard.module.css';
import { FaGithub, FaLink } from 'react-icons/fa6';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function ProjectsPanel({ onClose }) {
  return (
    <div className={styles.projectsModal}>
      <h2>Projects</h2>
      <p className={styles.quote}>"I love to create things that people can have an emotional connection with and here's a few I have made so far."</p>
      
      <div className={styles.projectItem}>
        <h3>Profile Card v1</h3>
        <p>Used HTML, CSS, and JavaScript to build a responsive profile card that showcases my details, social links, and a clean UI. This project pushed me to work under a tight deadline while ensuring a sleek, mobile-friendly design. With the Dark mode feature and Parallax effect, deployed with Vercel</p>
      
      <span className={styles.icons}>
      <a href='https://github.com/estheticallybawo/hngx-stage0-Profile-Card'
      target='_blank'
      rel="noopener noreferrer">
        <FaGithub className={styles.githubIcon} />
      </a>
      <a href='https://profile-card-two-tan.vercel.app/'
      target='_blank'
      rel="noopener noreferrer">
        <FaLink className={styles.goIcon} />
      </a>
      </span>

      </div>

      
      <div className={styles.projectItem}>
        <h3> Color Guessing Game</h3>
        <p>Used HTML CSS, and JavaScript to build a responsive Color Guessing Game for kids with color blindness with retro words UI, sound effects, and content to make the game interactive and engaging.</p>
        <span className={styles.icons}>
      <a href='https://github.com/estheticallybawo/hngx-stage1-Game'
      target='_blank'
      rel="noopener noreferrer">
        <FaGithub className={styles.githubIcon} />
      </a>
      <a href='https://color-game-gules-kappa.vercel.app/'
      target='_blank'
      rel="noopener noreferrer">
        <FaLink className={styles.goIcon} />
      </a>
      
      </span>
      </div>
      
      <button className={styles.closeButton} onClick={onClose}><IoMdCloseCircleOutline /></button>
    </div>
  );
}