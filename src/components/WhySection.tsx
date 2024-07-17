import React from 'react';
import styles from '../css/WhySection.module.css';

interface ReasonProps {
  title: string;
  imageSrc: string;
}

const Reason: React.FC<ReasonProps> = ({ title, imageSrc }) => (
  <div className={styles.reasonItem}>
    <h3 className={styles.reasonTitle}>{title}</h3>
    <img src={imageSrc} alt={title} className={styles.reasonImage} />
  </div>
);

const WhySection: React.FC = () => {
  const reasons = [
    { title: "Diversity, Equity and Inclusion", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c98e63efc3f7f132fddda564df09beeb4007b95d8163ce840bd6f68870168200?apiKey=91547a0531724dfdbec3493d0aeb27e5&" },
    { title: "Social Safety", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3a54a24f6aee5d3cfccb1d5cbd270723e414696a6047a5caa5809465b5196b7?apiKey=91547a0531724dfdbec3493d0aeb27e5&" },
    { title: "Accessibility", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5656d9f26b5314c90b3b61a2a511f80d7010e58fe993dbd0813010b47e96f2c4?apiKey=91547a0531724dfdbec3493d0aeb27e5&" }
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.whyContent}>
        <h2 className={styles.whyTitle}>Why Inclusive Education Is Needed</h2>
        <p className={styles.whySubtitle}>Lorem Ipsum is simply dummy text of the printing.</p>
        <div className={styles.whyReasons}>
          {reasons.map((reason, index) => (
            <Reason key={index} title={reason.title} imageSrc={reason.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;