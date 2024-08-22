import { useNavigate } from 'react-router-dom';
import styles from './Example.module.css';

type ExampleProps = {
    path: string;
    title: string;
    content: string;
};

function Example({ path, title, content }: ExampleProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${path}/`);
    };

    return <div className={styles.container}>
        <h3 className={styles.exampleTitle}>{title}</h3>
        <div className={styles.innerContainer}>
            <p className={styles.content}>{content}</p>
            <button className={styles.readMore} type="button" onClick={handleClick}>
                Read More
            </button>
        </div>
    </div>
}

export default Example;