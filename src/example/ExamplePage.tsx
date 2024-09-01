import { marked } from 'marked';
import { useEffect, useState } from 'react';
import Footer from '../misc/footer/Footer';
import Header from '../misc/header/Header';
import Example from './Example';
import styles from './ExamplePage.module.css';

export async function fetchAndProcessMarkdown(file_path: string): Promise<string> {
    if (!file_path) {
        return "<h1>ERR</h1><p>Invalid file path</p>";
    }

    try {
        const response = await fetch(`data/${file_path}.md`);
        if (!response.ok) {
            throw new Error(`Failed to load file: ${response.statusText}`);
        }
        const markdown = await response.text();
        const html = await marked(markdown);
        return html;
    } catch (err) {
        console.error(err);
        return "<h1>ERR</h1><p>Error loading content</p>";
    }
};

/**
 * Fetches the title (first h1) and content (first paragraph) from a markdown string
 * @param markdown the markdown string to process
 */
export function fetchTitleAndContent(markdown: string): { title: string, content: string } {
    const titleMatch = markdown.match(/<h1>(.*?)<\/h1>/);
    const contentMatch = markdown.match(/<p>(.*?)<\/p>/);
    return {
        title: titleMatch ? titleMatch[1].toUpperCase() : "Error",
        content: contentMatch ? contentMatch[1] : "Error",
    };
}

function ExamplePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [examplesData, setExamplesData] = useState<{ title: string, content: string, path: string }[]>([]);
    const [examplesList, setExamplesList] = useState<string[]>([]);

    useEffect(() => {
        const readExamplesList = async () => {
            try {
                const response = await fetch('./data/data_list.json');
                const data = response.ok ? await response.json() : [];
                setExamplesList(data);
            } catch (err) {
                console.log(err);
            }
        };
        readExamplesList();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const examples = [];
            for (const path of examplesList) {
                const markdown = await fetchAndProcessMarkdown(path);
                const { title, content } = fetchTitleAndContent(markdown);
                examples.push({ path, title, content, markdown });
            }
            setExamplesData(examples);
            setIsLoading(false);
        };

        fetchData();
    }, [examplesList]);

    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.sectionTitle}>Inspiring Ways to Make Your STEM Education Inclusive</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={styles.examples}>
                        {examplesData.map((example, index) => (
                            <Example key={index} {...example} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default ExamplePage;