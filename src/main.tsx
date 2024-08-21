import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import LandingPage from './pages/LandingPage';
import ExamplePage from './example/ExamplePage';
import ExampleContentPage from './example/ExampleContentPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/example/:file_path" element={<ExampleContentPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
