import styles from "./GlossaryHero.module.css";

function GlossaryHero() {
    return <>
        <div className={styles.hero}>
            <div className={styles.heroTitle}>Glossary</div>
            <img src="./glossary-hero.png" alt="Glossary" className={styles.heroImage} />
        </div>
    </>
}

export default GlossaryHero;