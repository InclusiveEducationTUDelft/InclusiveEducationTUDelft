import React from 'react';
import styles from './InspiringExamples.module.css';
import ExampleCard from './ExampleCard';
import { useNavigate } from 'react-router-dom';

const examples = [
  { file_path: "example1" },
  { file_path: "example2" },
  { file_path: "example3" }
]

const InspiringExamples: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className={styles.inspiringExamples}>
      <h2 className={styles.sectionTitle}>Inspiring Ways to Make Your STEM Education Inclusive</h2>
      <div className={styles.exampleContainer}>
        {examples.map((example, index) => (
          <ExampleCard key={index} {...example} />
        ))}
      </div>
      <button className={styles.exploreMoreBtn} onClick={() => navigate("example")}>Explore More</button>
    </section >
  );
};

export default InspiringExamples;