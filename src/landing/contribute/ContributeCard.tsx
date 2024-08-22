import React from 'react';
import styles from './ContributeCard.module.css';

interface ContributeCardProps {
    title: string;
    content: string;
    icon: string;
    buttonText: string;
    href: string;
}

const ContributeCard: React.FC<ContributeCardProps> = ({ title, content, icon, buttonText, href }) => {
    return (
        <div className={styles.contributeCard}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardContainer}>
                <p className={styles.cardContent}>{content}</p>
                <div className={styles.cardFooter}>
                    <img src={icon} alt="" className={styles.cardIcon} />
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <button className={styles.actionBtn}>{buttonText}</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContributeCard;