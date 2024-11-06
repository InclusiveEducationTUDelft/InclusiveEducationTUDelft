import Footer from "../misc/footer/Footer";
import Header from "../misc/header/Header";
import PageExplanation from "../misc/page-explanation/PageExplanation";

const text_intro = "We have a gender gap in many STEM fields. Increasing gender diversity benefits the labor market, gender equality, and innovations. The lack of gender diversity is caused by, among others, a low sense of belonging, self-efficacy and stereotypes. Although it is a complex problem, we can still do several things in our education to attract and retain a diverse group of people. Below we will continue discussing the problem and possible solutions.";
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

        <section
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
            <h2>Concept of Gender</h2>
            <div>
            Before diving into the topic, let's discuss the concept of gender.
            - different elements, gender identity using the  <a href="https://www.itspronouncedmetrosexual.com/2018/10/the-genderbread-person-v4/">genderbread person</a> by Sam Killermann.
            - resource on gender beyond binary
            - althoug gender is more than men/women most resources/research describes binary gender 
            </div>
            <img src="https://www.itspronouncedmetrosexual.com/wp-content/uploads/2018/10/Genderbread-Person-v4-1200.png" alt="genderbread" width="500" c></img>
        </section>

        <section
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
            <h2>Why is it import to increase gender diversity in STEM fields?</h2>
            <div>
            - Current numbers
            - We need more people to fill the increasing number of vacancies. 
            - We want people to participate in fields with good career opportunities, benefiting gender equality. 
            - Moreover, gender diversity benefits productivity, innovations and reduces the risk of biased products and innovations.
            - Examples of these innovations
            </div>
        </section>

        <section
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
            <h2>Factors influencing the gender gap</h2>
            <div>
            - see slides
            - Jeffrey Maloy, Monika B. Kwapisz, and Bryce E. Hughes. 2022. Factors Influencing Retention of Transgender and Gender Nonconforming Students in Undergraduate STEM Majors. CBE—Life Sciences Education 21, 1 (March 2022), ar13. 
            https://doi.org/10.1187/cbe.21-05-0136
            - Amanda Menier, Rebecca Zarch, and Stacey Sexton. 2021. Broadening Gender in Computing for Transgender and Nonbinary Learners. In 2021 Conference on Research in Equitable and Sustained Participation in Engineering, Computing, and Technology (RESPECT). IEEE, Philadelphia, PA, USA, 1–5. 
            https://doi.org/10.1109/RESPECT51740.2021.9620612
            - Shirley: look for source on inclusive langauage (as suggested by reviewer)
            </div>
        </section>

        <section
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
            <h2>Solutions</h2>
            <div>
            - since the problem is complex, the solution is also at multiple places/stakeholders
            - but you can make steps
            - focus on making the systems inclusive 
            - scope down to higher education
            - a couple of examples/tips with referece to the example/tip page
            </div>
        </section>

        <Footer />
    </>
}

export default Gender;