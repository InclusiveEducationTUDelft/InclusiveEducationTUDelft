import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerAbout}>
          <h2 className={styles.footerTitle}>Towards Open Inclusive STEM Education</h2>
          <p className={styles.footerDescription}>
            We are a team of educators, researchers, and students from TU Delft 
            with a shared commitment to make our STEM education open, inclusive and accesible. 
            In this project, we collect resources, document best practices, and train educators.
            We are funded by the TU Delft Open Science programme.
          </p>
        </div>
        <nav className={styles.footerNav}>
          <h3 className={styles.navTitle}>Inclusive STEM Education</h3>
          <ul className={styles.navList}>
            <li><a href="#about">About us</a></li>  
            <li><a href="#why">Why Inclusive STEM Education</a></li>
            <li><a href="#tips">Tips & Tools</a></li>
            <li><a href="#example">Examples</a></li>
            <li><a href="#contribute">Contribute</a></li>
          </ul>
        </nav>
        <div className={styles.footerContact}>
          <h3 className={styles.contactTitle}>Contact</h3>
          <p className={styles.contactEmail}>inclusiveeducation@tudelft.nl</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>OpenInclusiveEducation All Right Reserved, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;