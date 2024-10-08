import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import LandingPage from './landing/LandingPage';
import ExamplePage from './example/ExamplePage';
import ExampleContentPage from './example/ExampleContentPage';
import TipPage from './tips/TipPage';
import TipContentPage from './tips/TipContentPage';
import Glossary from './glossary/Glossary';
import Gender from './gender/Gender';
import Neurodiversity from './neurodiversity/Neurodiversity';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/example/:file_path" element={<ExampleContentPage />} />
        <Route path="/tips" element={<TipPage />} />
        <Route path="/tips/:file_path" element={<TipContentPage />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/neurodiversity" element={<Neurodiversity />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
