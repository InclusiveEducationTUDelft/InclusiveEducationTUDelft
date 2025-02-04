import styles from "./Factors.module.css";

export interface FactorCardProps {
    title: string;
    content: string;
    image: string;
}

export interface FactorsProps {
    data: FactorCardProps[];
}

const Factors: React.FC<FactorsProps> = ({ data }) => {
    return <>
        <section className={styles.factors}>
            <div className={styles.factorsContainer}>
                <div className={styles.factorsContent}>
                    <div className={styles.factorsTitle}>
                        Factors influencing the gender gap
                    </div>
                    <div className={styles.factorsTitle} />
                </div>
            </div>
            <div className={styles.factorCardContainer}>
                {data.map((data, index) => (
                    <FactorCard key={index} title={data.title} content={data.content} image={"/Illustrations/" + data.image} />
                ))}
            </div>
        </section>
    </>;
}

const FactorCard: React.FC<FactorCardProps> = ({ title, content, image }) => {
    return <div className={styles.factorCard}>
        <img src={image} alt={title} className={styles.factorCardImage} />
        <div className={styles.factorCardTitle}>{title}</div>
        <div className={styles.factorCardContent}>{content}</div>
    </div>
}

export default Factors;
