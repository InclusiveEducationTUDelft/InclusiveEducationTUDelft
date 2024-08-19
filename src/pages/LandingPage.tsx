import React from 'react';
import Header from '../components/Header';
import Contribute from '../components/Contribute';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InclusiveTips from '../components/InclusiveTips';
import InspiringExamples from '../components/InspiringExamples';
import WhyInclusive from '../components/WhyInclusive';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyInclusive />
        <InclusiveTips />
        <InspiringExamples />
        <Contribute />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;