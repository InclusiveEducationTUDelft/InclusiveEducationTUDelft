import React from 'react';
import styles from './Contribute.module.css';
import ContributeCard from './ContributeCard';

const contributeOptions = [
  {
    title: "GITHUB",
    content: "Do you want to change or add content, or duplicate the project? You can do so via GitHub! If you are not familiar with GitHub, you can reach out to us via email or the form.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f58dec820eb357f459bf235d9d2fee1aade47f10ff7cf70b3e3dec84fa7d9a1?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Go to GitHub",
    href: "https://github.com/InclusiveEducationTUDelft/InclusiveEducationTUDelft",
  },
  {
    title: "EMAIL",
    content: "Do you have any questions or suggestions related to inclusive STEM education? We would love to hear them and are looking forward to your email.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97dea5e06415fe5f39a91fd3f23db2ae63472e08ad7c6023c0cde42909ad87f0?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Send Email",
    href: "mailto:test@test.com"
  },
  {
    title: "SHARE YOUR STORY",
    content: "Do you want to share resources, experiences, or questions? You can share them via the form. We are very happy with all the input to collectively make our STEM education more inclusive for all.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b35b79639c355af1ff8e2cf69512c2ad56d7857d26507e287edf5920c4338f6?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Share Story",
    href: "https://example.com"
  }
];

const Contribute: React.FC = () => {
  return (
    <section className={styles.contribute} id="contribute-section">
      <h2 className={styles.sectionTitle}>How Can You Contribute</h2>
      <div className={styles.cardContainer}>
        {contributeOptions.map((option, index) => (
          <ContributeCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
};

export default Contribute;