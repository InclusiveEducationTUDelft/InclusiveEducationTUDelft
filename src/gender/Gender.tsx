import Footer from "../misc/footer/Footer";
import Header from "../misc/header/Header";
import PageExplanation from "../misc/page-explanation/PageExplanation";
import styles from "./Gender.module.css";

const text_intro = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish";
// const text_first = "Before diving into the topic, let's discuss the concept of gender."
// const text_second = "Here we will explain the importance of the problem in more detail"
// const examples = "To discuss, car door / dummy / apple health / chatGPT"
// const text_third = "Here we will explain the factors influencing the gender gap in STEM in more detail."
// // gender stereotypes, stereotypes about STEM fields, self-efficacy, mindset, interest development
// const text_fourth = "Here we will discuss some possible solutions, specific to the gender problem. Maybe linking to examples as well?"
// // bias, role models, inclusive education
function Gender() {
    return <>
        <Header />
        <section>
            <PageExplanation title={"What is gender?"} innerHtml={text_intro} image={"gender-hero.png"} />
            <div className={styles.whyContainer}>
                <div className={styles.whyContent}>
                    <div className={styles.whyTitle}>Why is it important?</div>
                    <div className={styles.whyTitle}></div>
                </div>
                <div className={styles.whyContent}>
                    <img src="./gender2.png" alt="Why is it important?" className={styles.whyImage} />
                    <div className={styles.whyText}>
                        Let’s look at the current numbers at TU Delft  <br />
                        • 32% of our PhD Students are women  <br />
                        • 19% of our full professors are women <br />
                        These numbers extend into the industry where 1 out of 5 women work in tech and 1 out of 2 men work in tech. We need more people to fill the increasing number of vacancies. We want people to participate in fields with good career opportunities, benefiting gender equality. Moreover, gender diversity benefits productivity, innovations and reduces the risk of biased products and innovations. For example, a woman is 47% more likely to be injured and 17% more likely to die in a car crash because crash tests are not done on with female dummies. (Perez, 2019). In 2022, the first female crash test dummy was designed.
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default Gender;