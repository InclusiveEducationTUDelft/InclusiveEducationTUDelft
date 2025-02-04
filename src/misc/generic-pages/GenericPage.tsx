import Footer from "../footer/Footer";
import Header from "../header/Header";
import PageExplanation from "../page-explanation/PageExplanation";
import Equitable, { EquitableCardProps } from "./Equitable";
import Factors, { FactorCardProps } from "./Factors";
import styles from "./GenericPage.module.css";

export interface GenericPageProps {
    textIntro: string;
    whyTitle: string;
    whyImage: string;
    whyText: string;
    factors: FactorCardProps[]; 
    equitable: EquitableCardProps[];
}

function GenericPage({ textIntro, whyTitle, whyImage, whyText, factors, equitable }: GenericPageProps) {
    return <>
        <Header />
        <section>
            <PageExplanation title={"What is gender?"} innerHtml={textIntro} image={"gender-hero.png"} />
            <div className={styles.whyContainer}>
                <div className={styles.whyContent}>
                    <div className={styles.whyTitle}>{whyTitle}</div>
                    <div className={styles.whyTitle}></div>
                </div>
                <div className={styles.whyContent}>
                    <img src={whyImage} alt="Why is it important?" className={styles.whyImage} />
                    <div className={styles.whyText} dangerouslySetInnerHTML={{ __html: whyText }}>
                    </div>
                </div>
            </div>
            <Factors data={factors}  />
            <Equitable data={equitable} />
        </section>
        <Footer />
    </>
}

export default GenericPage;