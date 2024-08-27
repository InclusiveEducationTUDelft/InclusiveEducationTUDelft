import React from 'react';
import Header from '../misc/header/Header';
import WhyInclusive from './why/WhyInclusive';
import Contribute from './contribute/Contribute';
import InspiringExamples from './examples/InspiringExamples';
import Hero from './hero/Hero';
import InclusiveTips from './tips/InclusiveTips';
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