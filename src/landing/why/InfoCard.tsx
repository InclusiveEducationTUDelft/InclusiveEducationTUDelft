import React from 'react';
import styles from './InfoCard.module.css';

interface InfoCardProps {
    title: string;
    content: string;
    icon: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, icon }) => {
    return (
        <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.infoContent}>
                <div className={styles.cardContent}>{content}</div>
                <div className={styles.cardFooter}>
                    <button className={styles.readMoreBtn}>Read More</button>
                    <img src={icon} alt="" className={styles.cardIcon} />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;