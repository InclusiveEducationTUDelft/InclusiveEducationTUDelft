import Footer from "../misc/footer/Footer";
import Header from "../misc/header/Header";
import PageExplanation from "../misc/page-explanation/PageExplanation";

const text_intro = "We have a gender gap in many STEM fields. Increasing gender diversity benefits the labor market, gender equality, and innovations. The lack of gender diversity is caused by, among others, low sense of beloning, self-efficacy and stereotypes. Although it is a complex problem, we can still do several things in our education to attract and retain a diverse group of people. Below we will continue discussing the problem and possible solutions.";
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
            <PageExplanation title={"Gender"} innerHtml={text_intro} image={"gender-hero.png"} />
        </section>
        <Footer />
    </>
}

export default Gender;