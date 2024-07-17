import React from 'react';
import styles from '../css/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextColumn}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Tip of the day</h1>
            <p className={styles.heroSubtitle}>"Use Gender Neutral Pronouns"</p>
          </div>
        </div>
        <div className={styles.heroImageColumn}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/244f76805a95ee205fc1589ddcbf63e2f023dcb56a4c038b5ded5a5187a3c616?apiKey=91547a0531724dfdbec3493d0aeb27e5&" alt="Inclusive Education" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;