import styles from "./Equitable.module.css";

const equitable_data = [
    {
        image: "Gender (3).png",
        content: "Respecting and understanding gender identity and expression in class can help students feel more welcome.  "
    },
    {
        image: "Gender (3).png",
        content: "Respecting and understanding gender identity and expression in class can help students feel more welcome.  "
    },
    {
        image: "Gender (3).png",
        content: "Respecting and understanding gender identity and expression in class can help students feel more welcome.  "
    },
]

interface EquitableCardProps {
    image: string;
    content: string;
}

const Equitable: React.FC = () => {

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
                {equitable_data.map((data, index) => (
                    <EquitableCard key={index} image={"/Illustrations/" + data.image} content={data.content} />
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
