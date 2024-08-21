import React from 'react';
import styles from './InspiringExamples.module.css';
import ExampleCard from './ExampleCard';

const examples = [
  {
    number: 1,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    number: 2,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    number: 3,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

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