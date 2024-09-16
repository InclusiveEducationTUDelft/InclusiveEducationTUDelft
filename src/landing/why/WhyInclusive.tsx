import React from 'react';
import styles from './WhyInclusive.module.css';
import InfoCard from './InfoCard';

const infoCards = [
  {
    title: "Glossary",
    content: "Literature on inclusive STEM education includes many different terms. Some of these terms are explained in our glossary.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8e2d3af44ddc9e3997c69af92e8123fbe11805cb083b189885505a709372c13?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    href: "#glossary"
  },
  {
    title: "Gender",
    content: "Women and nonbinary people are underrepresented in most STEM field. Providing an inclusive and welcoming environment for all is a crucial step towards inclusivity.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f36c5f32a5c415a6ee76b79b280073c9dd96d610269e88972c4fd4d84e432e99?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    href: "#gender"
  },
  {
    title: "Neurodiversity",
    content: "Students experiencing and interacting with the world around them in many different ways. Next to providing the necessary facilities, we need to be open and considerate to foster a safe and inclusive environment.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/72d23130ec66bbe8f014bf49ed685c4b7ba08a06782039eb59e091c82c124b26?apiKey=91547a0531724dfdbec3493d0aeb27e5&",
    href: "#gender"
  }
];

const WhyInclusive: React.FC = () => {
  return (
    <section className={styles.whyInclusive} id="why-inclusive-section">
      <h2 className={styles.sectionTitle}>Why Inclusive STEM Education Is Needed</h2>
      <p className={styles.sectionParagraph}>
        As higher educational institutions shift their focus towards enhancing educational outcomes for all students, 
        regardless of their differences, it is essential to create content that is suitable for all ​(Dewsbury, 2019)​. 
        Recognizing and addressing the unique needs of diverse student populations is crucial in fostering an inclusive 
        environment. The sense of belonging of students can directly impact their results and performance and as an 
        institution, the aim is to improve quality of education. ​(Dewsbury, 2019)​. Besides this, there is evidence to 
        prove that the higher dropout rate is linked to students being underrepresented in STEM fields. ​(Dewsbury, 2019)​.    
      </p>
      <div className={styles.cardContainer}>
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default WhyInclusive;