import React from 'react';
import Header from '../misc/header/Header';
import WhyInclusive from '../landing/why/WhyInclusive';
import Contribute from '../landing/contribute/Contribute';
import InspiringExamples from '../landing/examples/InspiringExamples';
import Hero from '../landing/hero/Hero';
import InclusiveTips from '../landing/tips/InclusiveTips';
import Footer from '../misc/footer/Footer';

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