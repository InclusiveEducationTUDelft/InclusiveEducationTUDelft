import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './AboutPage.module.css';
import TheProject from './main/TheProject';
import TheTeam from './team/TheTeam';

const AboutPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.aboutUs}>
                <div className={styles.contentWrapper}>
                    <TheProject />
                    <TheTeam />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;