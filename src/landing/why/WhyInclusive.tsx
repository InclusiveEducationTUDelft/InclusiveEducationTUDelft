import React from 'react';
import styles from './WhyInclusive.module.css';
import InfoCard from './InfoCard';

const infoCards = [
  {
    title: "Glossary",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8e2d3af44ddc9e3997c69af92e8123fbe11805cb083b189885505a709372c13?apiKey=91547a0531724dfdbec3493d0aeb27e5&"
  },
  {
    title: "Gender",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f36c5f32a5c415a6ee76b79b280073c9dd96d610269e88972c4fd4d84e432e99?apiKey=91547a0531724dfdbec3493d0aeb27e5&"
  },
  {
    title: "Neurodiversity",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/72d23130ec66bbe8f014bf49ed685c4b7ba08a06782039eb59e091c82c124b26?apiKey=91547a0531724dfdbec3493d0aeb27e5&"
  }
];

const WhyInclusive: React.FC = () => {
  return (
    <section className={styles.whyInclusive}>
      <h2 className={styles.sectionTitle}>Why Inclusive STEM Education Is Needed</h2>
      <div className={styles.cardContainer}>
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default WhyInclusive;