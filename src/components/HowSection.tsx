import React from 'react';
import styles from '../css/HowSection.module.css';

const HowSection: React.FC = () => {
  return (
    <section className={styles.howSection}>
      <h2 className={styles.howTitle}>How can the Course be more Inclusive</h2>
      <p className={styles.howSubtitle}>Lorem Ipsum is simply dummy text of the printing.</p>
      <div className={styles.howCategories}>
        <div className={styles.categoryItem}>In the classroom</div>
        <div className={styles.categoryItemBlack}>Course materials</div>
        <div className={styles.categoryItem}>PRINCIPLES</div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/093a077138a7679877bbefed19ff99271fd87931a92d51a4647c309e46497a95?apiKey=91547a0531724dfdbec3493d0aeb27e5&" alt="Inclusive Course" className={styles.howImage} />
    </section>
  );
};

export default HowSection;