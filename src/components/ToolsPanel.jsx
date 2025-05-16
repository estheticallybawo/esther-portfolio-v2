import React from 'react';
import styles from './ProfileCard.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { 
  SiTypescript, SiJavascript, SiNodedotjs, 
  SiReact, SiNextdotjs, SiHtml5, 
  SiCss3, SiGit, SiFigma 
} from 'react-icons/si';

export default function ToolsPanel({ onClose }) {
  const tools = [
    { name: 'HTML', icon: <SiHtml5 />, proficiency: 95 },
    { name: 'CSS', icon: <SiCss3 />, proficiency: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, proficiency: 40},
    { name: 'JavaScript', icon: <SiJavascript />, proficiency: 90 },
    { name: 'Node.js', icon: <SiNodedotjs />, proficiency: 55 },
    { name: 'React', icon: <SiReact />, proficiency: 88 },
    { name: 'Next.js', icon: <SiNextdotjs />, proficiency: 80 },
    { name: 'Git', icon: <SiGit />, proficiency: 80 },
    { name: 'Figma', icon: <SiFigma />, proficiency: 70 }
  ];

  return (
    <div className={styles.toolsModal} data-theme="light">
      <h2 className={styles.name}>Tools</h2>
      
      <div className={styles.toolsContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolItem}>
            <div className={styles.toolHeader}>
              <div className={styles.toolIcon}>
                {tool.icon}
              </div>
              <span className={styles.toolName}>{tool.name}</span>
            </div>
            <div className={styles.toolProficiency}>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress} 
                  style={{ width: `${tool.proficiency}%` }}
                ></div>
              </div>
              <span className={styles.skillPercentage}>{tool.proficiency}%</span>
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