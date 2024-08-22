import React from 'react';
import styles from './InspiringExamples.module.css';
import ExampleCard from './ExampleCard';

const examples = [
  { file_path: "example1" },
  { file_path: "example2" },
  { file_path: "example3" }
]

const InspiringExamples: React.FC = () => {
  return (
    <section className={styles.inspiringExamples}>
      <h2 className={styles.sectionTitle}>Inspiring Ways to Make Your STEM Education Inclusive</h2>
      <div className={styles.exampleContainer}>
        {examples.map((example, index) => (
          <ExampleCard key={index} {...example} />
        ))}
      </div>
      <button className={styles.exploreMoreBtn}>Explore More</button>
    </section>
  );
};

export default InspiringExamples;