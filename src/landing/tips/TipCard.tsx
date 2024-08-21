import React from 'react';
import styles from './TipCard.module.css';

interface TipCardProps {
    number: number;
    content: string;
}

const TipCard: React.FC<TipCardProps> = ({ number, content }) => {
    return (
        <div className={styles.tipCard}>
            <h3 className={styles.tipNumber}>TIP {number}</h3>
            <div className={styles.tipContainer}>
                <p className={styles.tipContent}>{content}</p>
                <button className={styles.readMoreBtn}>Read More</button>
            </div>
        </div>
    );
};

export default TipCard;