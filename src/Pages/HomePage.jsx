// src/Pages/HomePage.jsx
import React from 'react';
import HeroSection from '../Components/HeroSection';
import ServicesSection from '../Components/ServicesSection';
import Clientele from '../Components/Clientele';
import ProjectsSection from '../Components/ProjectsSection';
import CTABanner from '../Components/CTABanner';
import GalleryCarousel from '../Components/GalleryCarousel';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <ServicesSection />
      <Clientele />
      <ProjectsSection />
      <GalleryCarousel />
      <CTABanner />
    </div>
  );
};

export default HomePage;