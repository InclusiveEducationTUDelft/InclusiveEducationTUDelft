import React from 'react';
import styles from './Contribute.module.css';
import ContributeCard from './ContributeCard';

const contributeOptions = [
  {
    title: "GitHub",
    content: "Do you want to change or add content, or duplicate the project? Check out the repository on GitHub!",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f58dec820eb357f459bf235d9d2fee1aade47f10ff7cf70b3e3dec84fa7d9a1?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Go to GitHub",
    href: "https://github.com/InclusiveEducationTUDelft/InclusiveEducationTUDelft",
  },
  {
    title: "Email",
    content: "Do you have any questions or suggestions related to our project? We would love to hear them and are looking forward to your email.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97dea5e06415fe5f39a91fd3f23db2ae63472e08ad7c6023c0cde42909ad87f0?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Send Email",
    href: "mailto:inclusiveEducation@tudelft.nl"
  },
  {
    title: "Share Your Story",
    content: "Do you want to share resources, experiences or challenges? We are very happy with all input to collectively make our education more inclusive.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b35b79639c355af1ff8e2cf69512c2ad56d7857d26507e287edf5920c4338f6?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    buttonText: "Share Story",
    href: "https://forms.office.com/e/P8mqNRV453"
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