import Footer from '../misc/footer/Footer';
import Header from '../misc/header/Header';
import Example from './Example';
import styles from './ExamplePage.module.css';

const examplesContent = [
    { path: 'example1', title: 'Example 1', content: 'Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so themselves. At brother inquiry of offices without do my service. As particular to companions at sentiments. Weather however luckily enquire so certain do. Aware did stood was day under ask. Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased. Towards did colonel article any parties.' },
    { path: 'example2', title: 'Example 2', content: 'Content for example 2' },
    { path: 'example3', title: 'Example 3', content: 'Content for example 3' },
]

function ExamplePage() {
    return <>
        <Header />
        <main className={styles.container}>
            <h1 className={styles.sectionTitle}>Inspiring Ways to Make Your STEM Education Inclusive</h1>
            <div className={styles.examples}>
                {examplesContent.map((example, index) => (
                    <Example key={index} {...example} />
                ))}
            </div>
        </main>
        <Footer />
    </>
}

export default ExamplePage;