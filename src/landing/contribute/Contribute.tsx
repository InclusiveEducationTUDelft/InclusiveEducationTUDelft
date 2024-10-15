import React from 'react';
import styles from './Contribute.module.css';
import ContributeCard from './ContributeCard';

const contributeOptions = [
  {
    title: "GITHUB",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f58dec820eb357f459bf235d9d2fee1aade47f10ff7cf70b3e3dec84fa7d9a1?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Go to GitHub",
    href: "https://github.com/InclusiveEducationTUDelft/InclusiveEducationTUDelft",
  },
  {
    title: "EMAIL",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97dea5e06415fe5f39a91fd3f23db2ae63472e08ad7c6023c0cde42909ad87f0?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Send Email",
    href: "mailto:inclusiveEducation@tudelft.nl"
  },
  {
    title: "SHARE YOUR STORY",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b35b79639c355af1ff8e2cf69512c2ad56d7857d26507e287edf5920c4338f6?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Share Story",
    href: "https://example.com"
  }
];

const Contribute: React.FC = () => {
  return (
    <section className={styles.contribute} id="contribute-section">
      <h2 className={styles.sectionTitle}>How can you Contribute</h2>
      <p className={styles.sectionDescription}>Lorem Ipsum is simply dummy text of the printing.</p>
      <div className={styles.cardContainer}>
        {contributeOptions.map((option, index) => (
          <ContributeCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
};

export default Contribute;