import styles from "./Factors.module.css";

const factorCardData = [
    {
        title: "Gender stereotypes",
        content: "People’s stereotypes about interests and roles manifest from childhood till professional life. Just over 80% of professionals in the STEM (Science, Technology, Engineering and Mathematics) field are male (Jenkins, 2013). The “girls” toys encourage skills of caregiving and consequently, 82% of the caring and leisure service professionals are female. Further research also shows that boys' toys tend to be more educational towards technical expertise whereas girls' toys tend to encourage imagination. Moreover, Argos retail group has identified that 60% of the professionals in creative fields such as designers and architects played with blocks. On the other hand, 66% of the professionals such as accountants and bankers, preferred puzzles (Moe et al., 2018). The market of gendered toys highlights some level of impact on skills and careers, but the gender data gap is clearly visible in corporate environments. Women accounted for 48% of entry-level hires and just 38% of first-level managers, consequently, women hold only 30% of the positions of vice presidents as opposed to 70% of men (McKinsey & Company, 2020). Examining these statistics, it becomes evident that gendered toys not only shape early play experiences but are also linked to gender disparities in corporate environments. ",
        image: "Gender (3).png"
    },
    {
        title: "Stereotypes about STEM",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "Gender (4).png"
    },
    {
        title: "Interest Development and mindset ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "Gender (5).png"
    }
];

interface FactorCardProps {
    title: string;
    content: string;
    image: string;
}

const Factors: React.FC = () => {
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
                {factorCardData.map((data, index) => (
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