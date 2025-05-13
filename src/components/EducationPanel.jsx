import React, { useEffect, useRef } from 'react';
import styles from './ProfileCard.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function EducationPanel({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className={styles.educationModal} data-theme="light" ref={modalRef}>
      <h2 className={styles.name}>Education</h2>
      <br></br>
      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h4>Miva Open University, Itako Abuja</h4>
          <span className={styles.educationYear}>'26</span>
        </div>
        <p className={styles.educationDegree}>BSc, Software Engineering</p>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h4>AlfSchool Africa, Lagos</h4>
          <span className={styles.educationYear}>'26</span>
        </div>
        <p className={styles.educationDegree}>Diploma, Frontend Engineering</p>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h4>Federal Polytechnic, Nekede</h4>
          <span className={styles.educationYear}>'11</span>
        </div>
        <p className={styles.educationDegree}>Diploma, Public Administration</p>
      </div>

      <div className={styles.educationSeparator}>
        <span>Future Studies</span>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h4>University of Sussex, Brighton UK</h4>
        </div>
        <p className={styles.educationDegree}>MSc, Fintech, Risk and Investment Analysis</p>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationHeader}>
          <h4>BI Norwegian Business School, Norway</h4>
        </div>
        <p className={styles.educationDegree}>PhD, Strategy, Entrepreneurship and Innovation</p>
      </div>
      
      <button className={styles.closeButton} onClick={onClose}>
        <IoMdCloseCircleOutline />
      </button>
    </div>
  );
}