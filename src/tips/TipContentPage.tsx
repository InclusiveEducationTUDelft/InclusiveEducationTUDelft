import { useParams } from "react-router-dom";
import Footer from "../misc/footer/Footer";
import Header from "../misc/header/Header";
import { useEffect, useState } from "react";
import { fetchAndProcessMarkdown } from "./TipPage";

function TipContentPage() {
    const [isLoading, setLoading] = useState(true);
    const [content, setContent] = useState<string>('');
    const { file_path } = useParams<{ file_path: string }>();

    useEffect(() => {
        const fetchData = async () => {
            if (!file_path) {
                setContent("<h1>ERR</h1><p>Invalid file path</p>");
                return;
            }

            const markdown = await fetchAndProcessMarkdown(file_path);
            setContent(markdown);
            setLoading(false);
        }

        fetchData();
    }, [file_path]);
    return (
        <>
            <Header />
            <main>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div
                        id="example-content"
                        style={{
                            width: "95%",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />)}
            </main>
            <Footer />
        </>
    );
}

export default TipContentPage;
