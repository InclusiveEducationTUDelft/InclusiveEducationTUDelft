import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerAbout}>
          <h2 className={styles.footerTitle}>Towards Open Inclusive STEM Education</h2>
          <p className={styles.footerDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy a type specimen book.
          </p>
        </div>
        <nav className={styles.footerNav}>
          <h3 className={styles.navTitle}>About Us</h3>
          <ul className={styles.navList}>
            <li><a href="#why">Why Inclusive STEM Education</a></li>
            <li><a href="#tips">Tips & Tools</a></li>
            <li><a href="#examples">Examples</a></li>
            <li><a href="#contribute">Contribute</a></li>
          </ul>
        </nav>
        <div className={styles.footerContact}>
          <h3 className={styles.contactTitle}>Contact Info</h3>
          <p className={styles.contactEmail}>inclusiveeducation@tudelft.nl</p>
          <p className={styles.contactLocation}>TU Delft</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>OpenInclusiveEducation All Right Reserved, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;