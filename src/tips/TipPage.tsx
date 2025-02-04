import { marked } from 'marked';
import { useEffect, useState } from 'react';
import Footer from '../misc/footer/Footer';
import Header from '../misc/header/Header';
import styles from './TipPage.module.css';
import Tip from './Tip';

const MARKDOWN_PATH = './data/tips/';

export enum TipType {
    SINGLE, REDIRECT, PAGE
}

export async function fetchAndProcessMarkdown(file_path: string): Promise<string> {
    if (!file_path) {
        return "<h1>ERR</h1><p>Invalid file path</p>";
    }

    try {
        const response = await fetch(`${MARKDOWN_PATH}/${file_path}.md`);
        if (!response.ok) {
            throw new Error(`Failed to load file: ${response.statusText}`);
        }
        const markdown = await response.text();
        const html = await marked(markdown);

        // Decode HTML entities such as &#39; back to their respective characters
        const decodedHtml = decodeHTMLEntities(html);
        return decodedHtml;
    } catch (err) {
        console.error(err);
        return "<h1>ERR</h1><p>Error loading content</p>";
    }
};

function decodeHTMLEntities(text: string): string {
    const element = document.createElement('textarea');
    element.innerHTML = text;
    return element.value;
}

/**
 * Fetches the title (first h1) and content (first paragraph) from a markdown string
 * @param markdown the markdown string to process
 */
export function fetchTitleAndContent(markdown: string): { title: string, content: string, tipType: TipType, redirect: string } {
    const titleMatches = Array.from(markdown.matchAll(/<h1>(.*?)<\/h1>/g), match => match[1]);
    const contentMatches = Array.from(markdown.matchAll(/<p>(.*?)<\/p>/g), match => match[1]);
    const redirectMatch = markdown.match(/<a href="(.*?)"/);

    const single = titleMatches.length + contentMatches.length === 2;
    const redirect = titleMatches.length === 1 && contentMatches.length === 2;

    return {
        title: titleMatches[0] || "Error",
        content: contentMatches[0] || "Error",
        tipType: redirectMatch && redirect ? TipType.REDIRECT : single ? TipType.SINGLE : TipType.PAGE,
        redirect: redirectMatch ? redirectMatch[1] : ""
    };
}


function TipPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [tipsData, setTipsData] = useState<{ title: string, content: string, tipType: TipType, redirect: string, path: string }[]>([]);
    const [tipsList, setTipsList] = useState<string[]>([]);

    useEffect(() => {
        const readTipsList = async () => {
            try {
                const response = await fetch(`${MARKDOWN_PATH}/data_list.json`);
                const data = response.ok ? await response.json() : [];
                setTipsList(data);
            } catch (err) {
                console.log(err);
            }
        };
        readTipsList();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const tips = [];
            for (const path of tipsList) {
                const markdown = await fetchAndProcessMarkdown(path);
                const { title, content, tipType, redirect } = fetchTitleAndContent(markdown);
                tips.push({ path, title, content, tipType, redirect, markdown });
            }
            setTipsData(tips);
            setIsLoading(false);
        };

        fetchData();
    }, [tipsList]);

    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.sectionTitle}>Inspiring Ways to Make Your STEM Education Inclusive</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={styles.tips}>
                        {tipsData.map((example, index) => (
                            <Tip key={index} {...example} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default TipPage;