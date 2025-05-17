import React, { useState, useEffect } from 'react';
import styles from './ProfileCard.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function AspirationsPanel({ onClose }) {
  const quotes = [
    "Aim higher in case you fall short.",
    "The beginning of everything is to believe, never to doubt",
    "Turning small investments into giant leaps for communities",
    "Dream as if you will live forever; Live as if you will die today",
    "Within our dreams and aspirations we find our opportunities",
    "You will become as small as your controlling desire; as great as your dominant aspiration",
    "The future belongs to those who believe in the beauty of their dreams",
    "All our dreams can come true, if we have the courage to pursue them"
  ];

  const projects = [
    {
      title: "ViragoVOX",
      description: "The Female Impact Archive"
    },
    {
      title: "Blooms",
      description: "Redefining female connections"
    },
    {
      title: "Fundar",
      description: "Where you can bet on African MSMEs"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState('');

  // Get random quote when component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className={styles.aspirationsModal} data-theme="light">
      <h2 className={styles.name}>Aspirations</h2>
      
      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>"{currentQuote}"</p>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
      
      <button className={styles.closeButton} onClick={onClose}>
        <IoMdCloseCircleOutline />
      </button>
    </div>
  );
}