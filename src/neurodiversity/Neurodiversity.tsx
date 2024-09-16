import Footer from "../misc/footer/Footer";
import Header from "../misc/header/Header";
import PageExplanation from "../misc/page-explanation/PageExplanation";

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish";

function Neurodiversity() {
    return <>
        <Header />
        <section>
            <PageExplanation title={"Neurodiversity"} innerHtml={text} image={"neurodiversity-hero.png"} />
        </section>
        <Footer />
    </>
}

export default Neurodiversity;