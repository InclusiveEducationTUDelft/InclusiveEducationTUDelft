import React from 'react';
import styles from './InclusiveTips.module.css';
import TipCard from './TipCard';

const tips = [
  {
    number: 1,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    number: 2,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    number: 3,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
];

const InclusiveTips: React.FC = () => {
  return (
    <section className={styles.inclusiveTips}>
      <h2 className={styles.sectionTitle}>How you can make your education more inclusive</h2>
      <div className={styles.tipContainer}>
        {tips.map((tip, index) => (
          <TipCard key={index} {...tip} />
        ))}
      </div>
    </section>
  );
};

export default InclusiveTips;