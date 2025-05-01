// Import React and ReactDOM
import React, { useState } from 'react';
import styles from './App.module.css';
import ProfileCard from './components/ProfileCard';

export default function App() {
  const [activePanel, setActivePanel] = useState(null);

  const handleOpenPanel = (panelName) => {
    console.log("Panel clicked:", panelName);
    setActivePanel(panelName);
  };

  return (
    <div className={styles.appContainer}>
      <ProfileCard onOpenPanel={handleOpenPanel} />
    </div>
  );
}

