import React from 'react';
import styles from './ProfileCard.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function SkillsPanel({ onClose }) {
  const skills = [
    { name: 'Optimism', percentage: 98 },
    { name: 'Emotional Intelligence', percentage: 74 },
    { name: 'Problem-Solving', percentage: 80 },
    { name: 'Communication', percentage: 65 },
    { name: 'Creativity', percentage: 98 },
    { name: 'Time Management', percentage: 70 },
    { name: 'Dependability', percentage: 90 },
    { name: 'Adaptability', percentage: 80 },
    { name: 'Team Work', percentage: 75 },
    { name: 'Empathy', percentage: 98 },
    { name: 'Leadership', percentage: 55 }
  ];

  return (
    <div className={styles.skillsModal} data-theme="light">
      <h2 className={styles.name}>Soft Skills</h2>
      
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillPercentage}>{skill.percentage}%</span>
            </div>
            <div className={styles.skillBar}>
              <div 
                className={styles.skillProgress} 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <button className={styles.closeButton} onClick={onClose}>
        <IoMdCloseCircleOutline />
      </button>
    </div>
  );
}