import React from 'react';
import styles from '../css/Main.module.css';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import ContributeSection from '../components/ContributeSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowSection from '../components/HowSection';
import WhySection from '../components/WhySection';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <WhySection />
      <HowSection />
      <ContributeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;