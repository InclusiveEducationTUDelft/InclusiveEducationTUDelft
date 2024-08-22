import React, { useEffect, useState } from 'react';
import { fetchAndProcessMarkdown, fetchTitleAndContent } from '../../example/ExamplePage';
import styles from './ExampleCard.module.css';
import { useNavigate } from 'react-router-dom';

interface ExampleCardProps {
    file_path: string
}

const ExampleCard: React.FC<ExampleCardProps> = ({ file_path }) => {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!file_path) {
                setContent("<h1>ERR</h1><p>Invalid file path</p>");
                return;
            }

            const markdown = await fetchAndProcessMarkdown(file_path);
            const { title, content } = fetchTitleAndContent(markdown);
            setTitle(title);
            setContent(content);
            setLoading(false);
        }

        fetchData();
    }, [file_path]);

    const handleClick = () => {
        navigate(`/example/${file_path}/`);
    };

    return (
        <div className={styles.exampleCard}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h3 className={styles.exampleNumber}>{title}</h3>
                    <div className={styles.exampleCardContainer}>
                        <p className={styles.exampleContent}>{content}</p>
                        <button className={styles.readMoreBtn} onClick={handleClick}>Read More</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ExampleCard;