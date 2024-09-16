import { GlossaryEntry } from "./Glossary";
import styles from "./GlossaryChapter.module.css";

interface GlossaryChapterProps {
    letter: string;
    entries: GlossaryEntry[];
}

function GlossaryChapter(props: GlossaryChapterProps) {

    return <>
        <div className={styles.chapter}>
            <span className={styles.chapterTitle}>{props.letter}</span>
            {props.entries.map((entry: GlossaryEntry) => {
                return <div key={entry.term} className={styles.entry}>
                    <span className={styles.term}>{entry.term}</span>
                    <span className={styles.definition}>{entry.definition}</span>
                </div>
            })}
        </div>
    </>
}

export default GlossaryChapter;