import React from 'react';
import styles from './InfoCard.module.css';
import InclusiveButton from '../../misc/inclusive-button/InclusiveButton';

interface InfoCardProps {
    title: string;
    content: string;
    icon: string;
    href: string;
}

const InfoCard: React.FC<InfoCardProps> = (props: InfoCardProps) => {
    return (
        <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <div className={styles.infoContent}>
                <div className={styles.cardContent}>{props.content}</div>
                <div className={styles.cardFooter}>
                    <InclusiveButton href={props.href} alignSelf="flexEnd" />
                    <img src={props.icon} alt="" className={styles.cardIcon} />
                </div>
            </div>
        </div >
    );
};

export default InfoCard;