import React from 'react';
import useNavigator from '../useNavigator';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { scrollTo } = useNavigator();
  
  return (
    <header className={styles.header}>
      <a
        href={window.location.hostname === 'localhost' ? '/' : '/InclusiveEducationTUDelft/'}
        className={styles.logo}
      >Inclusive STEM Education</a>
      <nav className={styles.navigation}>
        <a href="#about" className={styles.navLink}>About Us</a>
        <a
          onClick={() => scrollTo("why-inclusive-section")}
          className={styles.navLink}>Why Inclusive STEM Education</a>
        <a
          onClick={() => scrollTo("tips-section")}
          className={styles.navLink}>Tips & Tools</a>
        <a href="#example" className={styles.navLink}>Examples</a>
        <a
          onClick={() => scrollTo("contribute-section")}
          className={styles.navLink}>Contribute</a>
      </nav>
    </header>
  );
};

export default Header;