import InclusiveButton from '../misc/inclusive-button/InclusiveButton';
import styles from './Tip.module.css';
import { TipType } from './TipPage';

type TipProps = {
    path: string;
    title: string;
    content: string;
    tipType: TipType;
    redirect: string;
};

function Tip({ path, title, content, tipType, redirect }: TipProps) {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     switch (tipType) {
    //         case TipType.PAGE:
    //             navigate(`tips/${path}/`);
    //             break;
    //         case TipType.REDIRECT:
    //         default:
    //             break;
    //     }
    // };

    return (
        <div className={styles.container}>
            <h3 className={styles.tipTitle}>{title}</h3>
            <div className={styles.innerContainer}>
                <p className={styles.content}>{content}</p>
                {tipType !== TipType.SINGLE && (
                    <InclusiveButton text="Read More" alignSelf="flex-end" target="_blank" marginTop="4%" href={tipType === TipType.REDIRECT ? redirect : "#tips/" + path} />
                    // <button className={styles.readMore} type="button" onClick={handleClick}>
                    //     <a style={{
                    //         textDecoration: 'none',
                    //         color: '#000'
                    //     }}href={tipType === TipType.REDIRECT ? redirect : undefined}>Read More</a>
                    // </button>
                )}
            </div>
        </div>
    );
}

export default Tip;