import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Example.module.css';
import InclusiveButton from '../misc/inclusive-button/InclusiveButton';

type ExampleProps = {
    path: string;
    title: string;
    content: string;
};

function Example({ path, title, content }: ExampleProps) {
    const navigate = useNavigate();
    const [actualContent, setActualContent] = useState(content);

    useEffect(() => {
        const wordLimit = 40;
    
        if (content.split(' ').length > wordLimit) {
            const words = content.split(' ');
            const truncatedWords = words.slice(0, wordLimit).join(' ');
            setActualContent(truncatedWords + '...');
        }
    }, [content]);

    const handleClick = () => {
        navigate(`${path}/`);
    };

    return <div className={styles.container}>
        <h3 className={styles.exampleTitle}>{title}</h3>
        <div className={styles.innerContainer}>
            <p className={styles.content}>{actualContent}</p>
            <InclusiveButton text="Read More" marginTop="4%" href={`#example/${path}`} />
            {/* <button className={styles.readMore} type="button" onClick={handleClick}>
                Read More
            </button> */}
        </div>
    </div>
}

export default Example;