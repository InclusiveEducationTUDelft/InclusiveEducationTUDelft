import React from 'react';
import styles from '../css/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Inclusive Education</div>
        <nav className={styles.navigation}>
          <a href="#" className={styles.navItem}>Home</a>
          <a href="#" className={styles.navItem}>About us</a>
          <a href="#" className={styles.navItem}>Team</a>
          <a href="#" className={styles.navItem}>Funding</a>
          <button className={styles.contributeButton}>Contribute</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;