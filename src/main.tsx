import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import ExampleContentPage from './example/ExampleContentPage';
import ExamplePage from './example/ExamplePage';
import Gender from './gender/Gender';
import Glossary from './glossary/Glossary';
import LandingPage from './landing/LandingPage';
import Neurodiversity from './neurodiversity/Neurodiversity';
import TipContentPage from './tips/TipContentPage';
import TipPage from './tips/TipPage';

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
