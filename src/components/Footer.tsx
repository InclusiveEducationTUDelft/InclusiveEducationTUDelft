import React from 'react';
import styles from '../css/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerAbout}>
                    <h3 className={styles.footerTitle}>Open Inclusive Education</h3>
                    <p className={styles.footerDescription}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy a type specimen book.
                    </p>
                </div>
                <nav className={styles.footerLinks}>
                    <h3 className={styles.footerLinksTitle}>Home</h3>
                    <a href="#" className={styles.footerLink}>About Us</a>
                    <a href="#" className={styles.footerLink}>Team</a>
                    <a href="#" className={styles.footerLink}>Funding</a>
                    <a href="#" className={styles.footerLink}>Contribute</a>
                </nav>
                <div className={styles.footerContact}>
                    <h3 className={styles.footerContactTitle}>Contact Info</h3>
                    <a className={styles.footerContactInfo}>inclusiveeducation@tudelft.nl</a>
                    <a className={styles.footerContactInfo}>TU Delft</a>
                </div>
            </div>
            <div className={styles.footerEnd}>
                <div className={styles.footerDivider} />
                <p className={styles.footerCopyright}>OpenInclusiveEducation All Right Reserved, 2024</p>
            </div>
        </footer>
    );
};

export default Footer;