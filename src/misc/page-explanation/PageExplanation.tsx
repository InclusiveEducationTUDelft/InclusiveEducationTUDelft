import styles from "./PageExplanation.module.css";

export interface PageExplanationProps {
    title: string;
    innerHtml: string;
    image: string;
}

function PageExplanation(props: PageExplanationProps) {
    return <>
        <section className={styles.explanation}>
            <div className={styles.explanationContainer}>
                <div className={styles.explanationContent}>
                    <div className={styles.explanationTitle}>{props.title}</div>
                    <div className={styles.explanationText} dangerouslySetInnerHTML={{ __html: props.innerHtml }}></div>
                </div>
                <img src={props.image} alt={props.title} className={styles.explanationImage} />
            </div>
        </section>
    </>
}

export default PageExplanation;