import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from 'marked';
import Header from "../misc/header/Header";
import Footer from "../misc/footer/Footer";

function ExampleContentPage() {
    const { file_path } = useParams<{ file_path: string }>();
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const loadMarkdown = async () => {
            if (!file_path) {
                setContent('<p>No file path provided</p>');
                return;
            }

            try {
                const response = await fetch(`/data/${file_path}.md`);
                if (!response.ok) {
                    throw new Error(`Failed to load file: ${response.statusText}`);
                }
                console.log(response);
                const markdown = await response.text();
                const html = await marked(markdown);
                console.log(html);
                setContent(html);
            } catch (err) {
                console.error(err);
                setContent('<p>Error loading content</p>');
            }
        };

        loadMarkdown();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div
                    id="example-content"
                    style={{
                        width: "95%",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </main>
            <Footer />
        </>
    );
}

export default ExampleContentPage;
