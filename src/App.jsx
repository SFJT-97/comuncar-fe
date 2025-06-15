// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';

import ScrollToTop from './Components/ScrollToTop';
import WhatsAppFAB from './Components/WhatsAppFab';
/* import CaseStudies from './Pages/CaseStudies'; */

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/case-studies" element={<CaseStudies />} /> */}
          </Route>
        </Routes>
        <WhatsAppFAB />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;