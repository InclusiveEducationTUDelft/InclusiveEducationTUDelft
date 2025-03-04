import { EquitableCardProps } from "../misc/generic-pages/Equitable";
import { FactorCardProps } from "../misc/generic-pages/Factors";
import GenericPage, { GenericPageProps } from "../misc/generic-pages/GenericPage";

const factorCardData: FactorCardProps[] = [
    {
        title: "Gender stereotypes",
        content: "People’s stereotypes about interests and roles manifest from childhood till professional life. Just over 80% of professionals in the STEM (Science, Technology, Engineering and Mathematics) field are male (Jenkins, 2013). The “girls” toys encourage skills of caregiving and consequently, 82% of the caring and leisure service professionals are female. Further research also shows that boys' toys tend to be more educational towards technical expertise whereas girls' toys tend to encourage imagination. Moreover, Argos retail group has identified that 60% of the professionals in creative fields such as designers and architects played with blocks. On the other hand, 66% of the professionals such as accountants and bankers, preferred puzzles (Moe et al., 2018). The market of gendered toys highlights some level of impact on skills and careers, but the gender data gap is clearly visible in corporate environments. Women accounted for 48% of entry-level hires and just 38% of first-level managers, consequently, women hold only 30% of the positions of vice presidents as opposed to 70% of men (McKinsey & Company, 2020). Examining these statistics, it becomes evident that gendered toys not only shape early play experiences but are also linked to gender disparities in corporate environments. ",
        image: "Gender (3).png"
    },
    {
        title: "Stereotypes about STEM",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "Gender (4).png"
    },
    {
        title: "Interest Development and mindset ",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image: "Gender (5).png"
    }
];

const equitable_data: EquitableCardProps[] = [
    {
        image: "Gender (3).png",
        content: "Respecting and understanding gender identity and expression in class can help students feel more welcome.  "
    },
    {
        image: "Gender (3).png",
        content: "Respecting and understanding gender identity and expression in class can help students feel more welcome.  "
    },
    {
        image: "Gender (3).png",
        content: "Respecting and understanding gender identity and expression in class can help students feel more welcome.  "
    },
]

const gender_data: GenericPageProps = {
    textIntro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish",
    whyTitle: "Why is it important?",
    whyImage: "./gender2.png",
    whyText: `
        Let’s look at the current numbers at TU Delft<br />
        • 32 % of our PhD Students are women <br />
        • 19 % of our full professors are women <br />
        These numbers extend into the industry where 1 out of 5 women work in tech and 1 out of 2 men work in tech. 
        We need more people to fill the increasing number of vacancies. 
        We want people to participate in fields with good career opportunities, benefiting gender equality. 
        Moreover, gender diversity benefits productivity, innovations and reduces the risk of biased products and innovations. 
    `,
    factors: factorCardData,
    equitable: equitable_data
}

const Gender: React.FC = () => {
    return (
        <GenericPage {...gender_data} />
    )
}

export default Gender;