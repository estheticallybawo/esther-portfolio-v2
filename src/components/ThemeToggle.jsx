import React from 'react';
import styles from './ThemeToggle.module.css';
import nightIcon from '../assets/night.png';
import sunIcon from '../assets/sun.png';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      className={styles.themeToggle} 
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <span className={styles.themeIcon}>
        <img 
          src={nightIcon} 
          className={`${styles.themeIconImage} ${theme === 'light' ? styles.visible : styles.hidden}`} 
          alt="Dark mode" 
        />
        <img 
          src={sunIcon} 
          className={`${styles.themeIconImage} ${theme === 'dark' ? styles.visible : styles.hidden}`} 
          alt="Light mode" 
        />
      </span>
    </button>
  );
};

export default ThemeToggle;