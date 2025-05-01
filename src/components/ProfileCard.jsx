import React from 'react';
import styles from './ProfileCard.module.css';

export default function ProfileCard({ onOpenPanel }) {
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

  return (
    <div className={styles.card}>
        <div className={styles.avaborder}>
      <img
        src="/avatar.png"
        alt="Esther"
        className={styles.avatar}
      />
      </div>
      <h1 className={styles.name}>Hi name is Esther </h1>
      <p className={styles.title}>A Passionate Frontend | Software Engineer</p>
      <p className={styles.bio}>
      I am a Software Engineering Student specializing in creating intuitive and esthetically pleasing user experiences.
       Eager to learn and grow in a collaborative environment, I am committed to delivering high-quality software solutions that meet user needs and exceed expectations.
      </p>
      <div className={styles.buttonGroup}>
  <button className={styles.hireMeButton}>Hire Me</button>
  <button className={styles.resumeButton}>Resume</button>
</div>


      <div className={styles.buttonGroup1}>
        <button className={styles.gradientButton} onClick={() => onOpenPanel('projects')}>Projects</button>
        <button className={styles.gradientButton} onClick={() => onOpenPanel('skills')}>Skills</button>
        <button className={styles.gradientButton} onClick={() => onOpenPanel('aspirations')}>Aspirations</button>
        <button className={styles.gradientButton} onClick={() => onOpenPanel('education')}>Education</button>
        <button className={styles.gradientButton} onClick={() => onOpenPanel('tools')}>Tools</button>
        <button className={styles.gradientButton} onClick={() => onOpenPanel('certification')}>Certification</button>
        
      </div>
      <div className={styles.dateTime}>
        {currentDateTime.replace(',', ' @').replace('GMT', '')} UTC
      </div>
    </div>

  );
}
