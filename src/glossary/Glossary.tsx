import { useEffect, useState } from "react";
import Footer from "../misc/footer/Footer";
import Header from "../misc/header/Header";
import styles from "./Glossary.module.css";
import GlossaryChapter from "./GlossaryChapter";
import GlossaryHero from "./GlossaryHero";

export interface GlossaryEntry {
    term: string;
    definition: string;
}

const GLOSSARY_PATH = './data/glossary.json';

function Glossary() {
    const [glossaryData, setGlossaryData] = useState<GlossaryEntry[]>([]);
    const [usedLetters, setUsedLetters] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(GLOSSARY_PATH);
            const data = await response.json();
            setGlossaryData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const setLetters = () => {
            const letters = glossaryData.map((entry: GlossaryEntry) => entry.term[0].toLowerCase());
            setUsedLetters([...new Set(letters.map((letter: string) => letter.toUpperCase()))]);
        }

        setLetters();
    }, [glossaryData]);

    const getEntries = (letter: string) => {
        return glossaryData.filter((entry: GlossaryEntry) => entry.term[0].toLowerCase() === letter.toLowerCase()).sort((a: GlossaryEntry, b: GlossaryEntry) => a.term.localeCompare(b.term));
    }

    return <>
        <Header />
        <section>
            <GlossaryHero />
            <div className={styles.glossary}>
                <div className={styles.letters}>
                    {usedLetters.sort().map((letter: string) => {
                        return <GlossaryChapter key={letter} letter={letter} entries={getEntries(letter)} />
                    })}
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default Glossary;