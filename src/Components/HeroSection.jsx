/* eslint-disable no-unused-vars */
// src/Components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HeroSection = () => {
  return (
    <motion.section
      className="surface text-center py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col items-start">
          <h1 className="headline-large mb-4 text-left text-brand-primary">
            Liderazgo en Comunicación Minera
          </h1>
          <p className="body-large mb-8 max-w-2xl mx-auto text-left">
            Conectamos voluntades a través de estrategias de relaciones institucionales, comunitarias y con medios, impulsando el éxito de proyectos mineros.
          </p>
          <Link to="/contact" className="btn-brand">
            Contáctanos
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/comunicarlogo.webp"
            alt="Comunicar Consultora"
            className="mt-8 md:mt-0 w-1/2 md:w-full max-w-md rounded-4xl"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;