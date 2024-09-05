import { useNavigate } from 'react-router-dom';
import { TipType } from './TipPage';
import styles from './Tip.module.css';

type TipProps = {
    path: string;
    title: string;
    content: string;
    tipType: TipType;
    redirect: string;
};

function Tip({ path, title, content, tipType, redirect }: TipProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        switch (tipType) {
            case TipType.PAGE:
                navigate(`${path}/`);
                break;
            case TipType.REDIRECT:
            default:
                break;
        }
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.tipTitle}>{title}</h3>
            <div className={styles.innerContainer}>
                <p className={styles.content}>{content}</p>
                {tipType !== TipType.SINGLE && (
                    <button className={styles.readMore} type="button" onClick={handleClick}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#000'
                        }}href={tipType === TipType.REDIRECT ? redirect : undefined}>Read More</a>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Tip;