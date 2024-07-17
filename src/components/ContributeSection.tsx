import React from 'react';
import styles from '../css/ContributeSection.module.css';

interface ContributeItemProps {
    title: string;
    imageSrc: string;
}

const ContributeItem: React.FC<ContributeItemProps> = ({ title, imageSrc }) => (
    <div className={styles.contributeItem}>
        <div className={styles.contributeItemContent}>
            <h3 className={styles.contributeItemTitle}>{title}</h3>
            {imageSrc &&
                <img src={imageSrc} alt={title} className={styles.contributeItemImage} />
            }
        </div>
    </div>
);

const ContributeSection: React.FC = () => {
    const contributeItems = [
        { title: "Course MATERIALS", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e59836aa8a0fecf7065e5bd91251a7e052008c453aa0ac33e6c0c8db4f07f84e?apiKey=91547a0531724dfdbec3493d0aeb27e5&" },
        { title: "EXPERIENCES", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5c9de101367002705f21c7915134b27c16ce3c5b30a8c125b30989b5dd43f2a?apiKey=91547a0531724dfdbec3493d0aeb27e5&" },
        { title: "GUIDELINES", imageSrc: "" }
    ];

    return (
        <section className={styles.contributeSection}>
            <div className={styles.contributeContent}>
                <h2 className={styles.contributeTitle}>How can you Contribute</h2>
                <p className={styles.contributeSubtitle}>Lorem Ipsum is simply dummy text of the printing.</p>
                <div className={styles.contributeItems}>
                    {contributeItems.map((item, index) => (
                        <ContributeItem key={index} title={item.title} imageSrc={item.imageSrc} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContributeSection;