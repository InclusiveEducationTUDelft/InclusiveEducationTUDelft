import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
  const navigate = useNavigate();

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function scrollTo(id: string) {
    let element = document.getElementById(id);

    if (!element) {
      navigate(window.location.hostname === 'localhost' ? '/' : '/InclusiveEducationTUDelft/');
    }

    async function fetchElement(id: string, retries = 5, delay = 100) {
      for (let i = 0; i < retries; i++) {
        const element = document.getElementById(id);
        if (element) return element;
        await sleep(delay);
      }
      return null;
    }

    element = await fetchElement(id);
    if (!element) return;

    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 40,
    });
  }

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