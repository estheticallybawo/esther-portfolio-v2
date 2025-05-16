import React from 'react';
import styles from './ProfileCard.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function CertificationPanel({ onClose }) {
  const certifications = [
    { name: 'Responsive Web Design', issuer: 'freecodecamp.org' },
    { name: 'Project Management Basic Certification', issuer: 'Pendo' },
    { name: 'Prompt Engineering for Web Developers', issuer: 'Scrimba' },
    { name: 'McKinsey Forward Program', issuer: 'McKinsey' },
    { name: 'Introduction to Nextjs', issuer: 'frontendmasters.com' },
    { name: 'Introduction to Product Management', issuer: 'frontendmasters.com' },
    { name: 'Introduction to React Native', issuer: 'frontendmasters.com' }
  ];

  return (
    <div className={styles.certificationsModal} data-theme="light">
      <h2 className={styles.name}>Certifications</h2>
      
      <div className={styles.certificationsList}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.certificationItem}>
            <div className={styles.certificationName}>{cert.name}</div>
            {cert.issuer && (
              <div className={styles.certificationIssuer}>{cert.issuer}</div>
            )}
          </div>
        ))}
      </div>
      
      <button className={styles.closeButton} onClick={onClose}>
        <IoMdCloseCircleOutline />
      </button>
    </div>
  );
}