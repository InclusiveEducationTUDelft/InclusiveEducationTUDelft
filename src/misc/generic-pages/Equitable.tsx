import styles from "./Equitable.module.css";

export interface EquitableCardProps {
    image: string;
    content: string;
}

export interface EquitableProps {
    data: EquitableCardProps[];
}

const Equitable: React.FC<EquitableProps> = ({ data }) => {
    return (
        <section className={styles.equitable}>
            <div className={styles.equitableContainer}>
                <div className={styles.equitableContent}>
                    <div className={styles.equitableTitle}>
                        How to create more equitable classrooms
                    </div>
                    <div className={styles.equitableTitle} />
                </div>
            </div>
            <div className={styles.equitableCardContainer}>
                {data.map((item, index) => (
                    <EquitableCard key={index} image={"/Illustrations/" + item.image} content={item.content} />
                ))}
            </div>
        </section>
    )
}

const EquitableCard: React.FC<EquitableCardProps> = ({ image, content }) => {
    return <div className={styles.equitableCard}>
        <img src={image} alt={content} className={styles.equitableCardImage} />
        <div className={styles.equitableCardContent}>{content}</div>
    </div>
}

export default Equitable;