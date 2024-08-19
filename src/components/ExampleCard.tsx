import React from 'react';
import styles from '../css/ExampleCard.module.css';

interface ExampleCardProps {
    number: number;
    content: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ number, content }) => {
    return (
        <div className={styles.exampleCard}>
            <h3 className={styles.exampleNumber}>EXAMPLE {number}</h3>
            <div className={styles.exampleCardContainer}>
                <p className={styles.exampleContent}>{content}</p>
                <button className={styles.readMoreBtn}>Read More</button>
            </div>
        </div>
    );
};

export default ExampleCard;