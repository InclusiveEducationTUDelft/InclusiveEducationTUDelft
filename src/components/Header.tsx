import React from 'react';
import styles from '../css/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>Inclusive STEM Education</a>
      <nav className={styles.navigation}>
        <a href="#about" className={styles.navLink}>About Us</a>
        <a href="#why" className={styles.navLink}>Why Inclusive STEM Education</a>
        <a href="#tips" className={styles.navLink}>Tips & Tools</a>
        <a href="#examples" className={styles.navLink}>Examples</a>
        <a href="#contribute" className={styles.navLink}>Contribute</a>
      </nav>
    </header>
  );
};

export default Header;